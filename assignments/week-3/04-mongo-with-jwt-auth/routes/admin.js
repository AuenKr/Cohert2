const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index");
const router = Router();
const jwt = require("jsonwebtoken");
const jwtPass = "secret";

// Admin Routes
router.post("/signup", async (req, res) => {
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

router.post("/signin", (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
    Admin.findOne({
        username,
        password,
    })
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    message: "Invalid userId/ Password",
                });
                return;
            }
            const token = jwt.sign({ username }, jwtPass);
            res.send({ token });
        })
        .catch((err) => {
            res.status(400).send({
                msg: "internal server error",
            });
        });
});

router.post("/courses", adminMiddleware, (req, res) => {
    // Implement course creation logic
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

router.get("/courses", adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find().then((data) => {
        res.json(data);
    });
});

module.exports = router;
