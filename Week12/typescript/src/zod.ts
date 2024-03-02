import z from "zod";
import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 3001;

const UserSchema = z.object({
    name: z.string().min(3, { message: "min length is 3" }),
    email: z.string().email().min(5, { message: "min length is 5" }),
    age: z.number().optional(),
}).strict();

type UserSchemaType = z.infer<typeof UserSchema>

app.use(express.json())

app.put('/update', (req: Request, res: Response) => {
    const { success } = UserSchema.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            msg: "Incorrect Input format",
            data: req.body,
        })
    }
    res.json({
        msg: "Success updated",
        data: req.body,
    })
})

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});