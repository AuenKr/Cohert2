const mongoose = require("mongoose");
const { mongooseURL } = require("./keys");
// Connect to MongoDB
mongoose.connect(mongooseURL);

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean,
});
const Course = mongoose.model("Course", CourseSchema);
// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: [5, "Min 5 length"],
    },
    courseActive: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: Course,
        },
    ],
});
const Admin = mongoose.model("Admin", AdminSchema);

const User = mongoose.model("User", UserSchema);

module.exports = {
    Admin,
    User,
    Course,
};
