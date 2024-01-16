const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/todoApp");

const schema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
});

const Todo = mongoose.model("Todo", schema);

module.exports = {
    Todo,
};
