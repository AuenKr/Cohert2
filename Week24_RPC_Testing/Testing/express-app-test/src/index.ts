import express from 'express';

export const app = express();

app.use(express.json());

// simple health checkpoint
app.get("/", (req, res) => {
    res.json({
        msg: "Health check point"
    })
})
// For body
app.post('/sum', (req, res) => {
    const { a, b } = req.body;
    return res.json({
        answer: parseInt(a) + parseInt(b)
    })
})

// For headers
app.post('/multiply', (req, res) => {
    const { a, b }: any = req.headers;
    return res.json({
        answer: parseInt(a) * parseInt(b)
    })
})

// For query param
app.get('/sub', (req, res) => {
    const { a, b } = req.query;
    return res.json({
        answer: parseInt(a as string) - parseInt(b as string)
    })
})

// For params test
app.get('/square/:a', (req, res) => {
    const { a } = req.params;
    return res.json({
        answer: parseInt(a) * parseInt(a)
    })
})