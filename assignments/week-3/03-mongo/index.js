const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { all } = require("./routes/admin");
const app = express();

// Middleware for parsing request bodies
app.use(bodyParser.json());
const PORT = 3000;

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/courseApp");

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    courseActive: {
        type: [String],
        default: [],
    },
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    publish: {
        type: Boolean,
        default: true,
    },
});

// Middlewares
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const { username, password } = req.headers;
    Admin.findOne({
        username: username,
        password: password,
    }).then((data) => {
        if (data === null) {
            res.status(404).send({
                message: "Invalid userId/ Password",
            });
            return;
        }
        next();
    });
}
function userMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const { username, password } = req.headers;
    User.findOne({
        username: username,
        password: password,
    }).then((data) => {
        if (data === null) {
            res.status(404).send({
                message: "Invalid userId/ Password",
            });
            return;
        }
        next();
    });
}

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

// Admin Routes
app.post("/admin/signup", async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
    const isValid = await Admin.findOne({ username: username });
    if (isValid === null) {
        const newUser = new Admin({
            username: username,
            password: password,
        });
        await newUser.save();
        res.json({
            message: "Admin created successfully",
        });
    } else {
        res.status(404).json({
            message: "username alredy exist",
        });
    }
});

app.post("/admin/courses", adminMiddleware, (req, res) => {
    const { username, password } = req.headers;
    const { title, description, price, imageLink } = req.body;
    const courseData = new Course({
        title: title,
        description: description,
        price: price,
        imageLink: imageLink,
    });
    courseData
        .save()
        .then((data) => {
            console.log("Course data updated");
            const courseId = courseData._id;
            res.send({
                message: "Course created successfully",
                courseId: courseId,
            });
        })
        .catch((err) => {
            res.status(404).send({
                message: "Course created failed",
            });
        });
});

app.get("/admin/courses", adminMiddleware, (req, res) => {
    Course.find().then((data) => {
        res.json(data);
    });
});

// User Routes
app.post("/users/signup", async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
    const isValid = await User.findOne({ username: username });
    if (isValid === null) {
        const newUser = new User({
            username: username,
            password: password,
        });
        await newUser.save();
        res.json({
            message: "User created successfully",
        });
    } else {
        const allUser = await User.find();
        res.status(404).json({
            message: "username alredy exist",
        });
    }
});
app.get("/users/courses", userMiddleware, (req, res) => {
    Course.find().then((data) => {
        res.json(data);
    });
});
app.post("/users/courses/:courseId", userMiddleware, (req, res) => {
    const { courseId } = req.params;
    const { username } = req.headers;
    User.findOne({ username: username })
        .then((data) => {
            const { courseActive } = data;
            User.updateOne(
                { username: username },
                { courseActive: courseActive.push(courseId) }
            ).then((data) => {
                res.send({ message: "Course purchased successfully" });
            });
        })
        .catch((err) => {
            res.send({
                message: "Course purchased failed",
            });
        });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
