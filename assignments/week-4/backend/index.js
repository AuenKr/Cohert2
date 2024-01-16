const express = require("express");
const todoRoute = require("./routes/todo");
const cors = require("cors");
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send({
        msg: "Todo App",
    });
});

app.use("/todo", todoRoute);

app.listen(PORT, () => {
    console.log("port : ", PORT);
});
