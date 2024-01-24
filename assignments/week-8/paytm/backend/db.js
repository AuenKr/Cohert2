const dotenv = require("dotenv");
dotenv.config();
const DB_HOST = process.env.DB_HOST;

const mongoose = require("mongoose");
mongoose.connect(DB_HOST).then((data) => console.log("connected"));

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
});

const accountsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    balance: {
        type: Number,
        default: 0,
        required: true,
    },
});

const User = mongoose.model("User", userSchema);
const Accounts = mongoose.model("Accounts", accountsSchema);

module.exports = {
    User,
    Accounts,
};
