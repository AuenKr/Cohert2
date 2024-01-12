const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index");
const router = Router();

// Admin Routes
router.get("/", async (req, res) => {
    const data = await Admin.find({});
    res.send({
        admins: data,
    });
});
router.post("/signup", async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
    if (!(username && password)) {
        res.status(409).send({
            message: "username/password invalid",
        });
        return;
    }
    const isValid = await Admin.findOne({ username: username });
    if (!isValid) {
        const data = {
            username: username,
            password: password,
        };
        await Admin.create(data);
        res.send({
            message: "Admin created successfully",
        });
        return;
    }
    res.status(409).send({
        message: "username alredy exist",
    });
});

router.post("/courses", adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const { title, description, price, imageLink } = req.body;
    const newCourse = await Course.create({
        title,
        description,
        price,
        imageLink,
    });
    res.send({
        msg: "course created",
        courseId: newCourse._id,
    });
});

router.get("/courses", adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const data = await Course.find({});
    res.send({
        courses: data,
    });
});

module.exports = router;
