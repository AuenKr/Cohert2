import express from 'express';
import z from 'zod';
import { multiply, square, subtract, sum } from './utility';

export const app = express();

app.use(express.json());

// simple health checkpoint
app.get("/", (req, res) => {
    res.json({
        msg: "Health check point"
    })
})
// For body
const sumInput = z.object({
    a: z.number(),
    b: z.number()
}).strict()

app.post('/sum', (req, res) => {
    const parseInput = sumInput.safeParse(req.body);
    if (!parseInput.success) {
        return res.status(404).json({
            msg: "Invalid inputs"
        })
    }
    const { a, b } = req.body;
    // If this is not cover it covered, then if I remove this code it still pass but it shouldn't.
    if (a > 1000000 || b > 1000000) {
        return res.status(422).json({
            msg: "We don'nt support big number"
        })
    }

    return res.json({
        answer: sum(a, b)
    })
})

// For headers
app.post('/multiply', (req, res) => {
    const { a, b }: any = req.headers;
    return res.json({
        answer: multiply(parseInt(a), parseInt(b))
    })
})

// For query param
app.get('/sub', (req, res) => {
    const { a, b } = req.query;
    return res.json({
        answer: subtract(parseInt(a as string), parseInt(b as string))
    })
})

// For params test
app.get('/square/:a', (req, res) => {
    const { a } = req.params;
    return res.json({
        answer: square(parseInt(a))
    })
})