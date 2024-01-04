const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 3000;

mongoose.connect(
    "mongodb+srv://auenkumar64:AIHhn2cPyBEO3mkY@cluster0.xj64whe.mongodb.net/user_app"
);

const newUser = mongoose.model("Users", {
    name: String,
    email: String,
    password: String,
});
// Middlewares
async function userExists(req, res, next) {
    const { email } = req.body;
    // const query = newUser.where({ email: email });
    const existingUser = await newUser.findOne({ email: email });
    if (existingUser) {
        res.json({
            msg: "user already exist",
        });
        return;
    } else {
        next();
    }
}

app.use(express.json());

app.post("/signup", userExists, (req, res) => {
    const { name, email, password } = req.body;
    const user = new newUser({
        name: name,
        email: email,
        password: password,
    });
    user.save().then(() => {
        res.json({
            msg: "new user created",
        });
        return console.log("new user created");
    });
});

app.listen(port, () => {
    console.log("Port : ", port);
});
