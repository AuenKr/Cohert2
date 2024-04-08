import express, { NextFunction, Request, Response } from "express";

const app = express();

let countRequest = 0;

const middlewareFunction = (req: Request, res: Response, next: NextFunction) => {
    countRequest++;
    next();
}

app.use(middlewareFunction)

app.get('/', (req, res) => {
    res.json({
        msg: "server working fine",
        countRequest
    })
})

app.listen(3000, () => {
    console.log("on port 3000");
})