const mongoose = require("mongoose");
const { mongodbURL } = require("./keys");

mongoose.connect(mongodbURL);

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false,
    },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = {
    Todo,
};
