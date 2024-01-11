const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { Todo } = require("./db");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/todos", function (req, res) {
    Todo.find()
        .then((data) => {
            res.send({
                todos: data,
            });
        })
        .catch((err) => {
            res.status(503).send({
                msg: err,
            });
        });
});

app.post("/todo", function (req, res) {
    const createdPayload = req.body;
    let parsepayload = createTodo.safeParse(createdPayload);
    if (!parsepayload.success) {
        res.status(411).send({
            msg: "Invalid inputs",
        });
        return;
    }
    Todo.create({
        title: createdPayload.title,
        description: createdPayload.description,
    })
        .then((data) => {
            res.send({
                msg: "Todo created",
            });
        })
        .catch((err) => {
            res.status(503).send({
                msg: "Todo create fail",
            });
        });
});

app.put("/completed", async function (req, res) {
    const updatePayload = req.body;
    let parsepayload = updateTodo.safeParse(updatePayload);
    if (!parsepayload.success) {
        res.status(411).send({
            msg: "Invalid inputs",
        });
        return;
    }
    try {
        await Todo.findOneAndUpdate(
            {
                _id: updatePayload.id,
            },
            {
                completed: true,
            }
        );
        res.send({
            msg: "completed",
        });
    } catch (err) {
        res.status(411).send({
            msg: "Invalid Id"
        })
    }
});

// Global catch
app.use((err, req, res, next) => {
    res.status(500).send({
        error: err,
        END: "ERROR end",
    });
});
app.all("*", (req, res) => {
    res.status(404).send({
        message: "Page does not exist",
    });
});

app.listen(PORT, () => {
    console.log("port : ", PORT);
});
