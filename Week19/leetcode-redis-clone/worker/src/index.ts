import { createClient } from 'redis';

const client = createClient();

async function startWorker() {
    await client.connect();
    console.log("Connected to redis");
}

async function main() {
    let length = await client.lLen("submissions");
    console.log("Queue length : ", length);
    while (true) {
        let response;
        length = await client.lLen("submissions");
        if (Number(length) > 0) {
            response = await client.rPop("submissions");
        }
        else {
            response = await client.brPop("submissions", 0);
        }
        console.log(response);
        // run the user code
        await new Promise((resolve) => (setTimeout(resolve, 1000)))
        console.log("finish execution\n Queue Lenght ", length);
    }
}

async function startNWorker(N: number) {
    await startWorker();
    while (N--) {
        main();
    }
}

startNWorker(1);