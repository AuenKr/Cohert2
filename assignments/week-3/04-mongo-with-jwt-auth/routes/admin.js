const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

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
    res.send("On admin singin page")
});

router.post("/courses", adminMiddleware, (req, res) => {
    // Implement course creation logic
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

router.get("/courses", adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find().then((data) => {
        res.json(data);
    });
});

module.exports = router;
