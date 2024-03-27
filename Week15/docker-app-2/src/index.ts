
import { PrismaClient } from "@prisma/client";
import express from "express";
import { Request, Response, NextFunction } from 'express';

const app = express();
app.use(express.json());
let noCalls = 0;

const client = new PrismaClient();


function noOfCalls(req: Request, res: Response, next: NextFunction) {
    noCalls++;
    console.log("hello", noCalls);
    next();
}
app.use(noOfCalls)
app.get("/", (req: Request, res: Response) => {
    res.json({
        message: "Healthy server",
        noCalls
    })
})

app.post("/", async (req: Request, res: Response) => {
    const { email, name } = await req.body;
    console.log("email : ", email, "\nname : ", name);
    if (!email || !name) {
        return res.json({
            err: "Invalid param",
            email,
            name,
            body: await req.body,
        })
    }
    const result = await client.user.create({
        data: {
            email: email,
            name: name
        }
    })

    res.json({
        message: "Done signing up!",
        noCalls,
        result
    })
})

app.listen(3000, () => console.log("on port 3000"));