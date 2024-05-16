import { createClient } from "redis";
const client = createClient();

async function processSubmission(submission: string) {
    const { problemId, code, language } = JSON.parse(submission);

    console.log(`Processing submission for problemId ${problemId}...`);
    console.log(`Code: ${code}`);
    console.log(`Language: ${language}`);
    // Here you would add your actual processing logic

    // Simulate processing delay 
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`Finished processing submission for problemId ${problemId}.`);
    client.publish("problem_done", JSON.stringify({ problemId, status: "TLE", problomDetail: submission }));
}

async function startWorker() {
    try {
        await client.connect();
        console.log("Worker connected to Redis.");

        // Main loop
        while (true) {
            try {
                const submission = await client.brPop("problems", 0);
                // @ts-ignore
                await processSubmission(submission.element);
            } catch (error) {
                console.error("Error processing submission:", error);
                // Implement your error handling logic here. For example, you might want to push
                // the submission back onto the queue or log the error to a file.
            }
        }
    } catch (error) {
        console.error("Failed to connect to Redis", error);
    }
}

async function addProblemWorker() {
    try {
        await client.connect();
        console.log("Client connectd in problemWorker")
        const example = {
            problemId: "123", code: "hello world", language: "hello"
        }
        for (let i = 0; i < 10; i++) {
            await client.LPUSH("problems", JSON.stringify({ ...example, i }));
        }
        await client.disconnect();
        console.log("Added problems")
        await new Promise(resolve => setTimeout(resolve, 5000));
    } catch (error) {
        console.log("Clinet did not connect to redis")
    }
}

async function Main() {
    await addProblemWorker();
    await startWorker();
}

Main();