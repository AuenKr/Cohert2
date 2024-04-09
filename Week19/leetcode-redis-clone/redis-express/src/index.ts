import express from 'express';
import { createClient } from 'redis';

const PORT = 3000;
const app = express();

const client = createClient();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("On health check endpoint, hello")
})

app.post('/submit', async (req, res) => {
    try {
        const { problemId, userId, code, language } = req.body;
        // store it in database
        if (!problemId || !userId || !code || !language) {
            throw new Error("Invalid arguements")
        }
        const result = await client.lPush("submissions", JSON.stringify({
            problemId, userId, code, language
        }))

        res.json({
            msg: "Submission recieved",
            queueSize: result
        })
    } catch (err) {
        return res.json({
            msg: "Submission failed",
        })
    }
})

async function startServer() {
    try {
        await client.connect();
        console.log("Connected to redis");
        app.listen(PORT, () => console.log("On Port ", PORT))
    } catch (error) {
        console.log("Error start\n", error, "error occur\n")
    }
}

startServer();