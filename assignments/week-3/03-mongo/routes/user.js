const { Router } = require("express");
const { User, Course } = require("../db/index");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.get("/", async (req, res) => {
    const data = await User.find({});
    res.send({
        users: data,
    });
});

router.post("/signup", async (req, res) => {
    // Implement user signup logic
    const { username, password } = req.body;
    if (!(username && password)) {
        res.status(409).send({
            message: "username/password invalid",
        });
        return;
    }
    const isValid = await User.findOne({ username: username });
    if (!isValid) {
        const data = {
            username: username,
            password: password,
        };
        await User.create(data);
        res.send({
            message: "User created successfully",
        });
        return;
    }
    res.status(409).send({
        message: "username alredy exist",
    });
});

router.get("/courses", userMiddleware, async (req, res) => {
    // Implement listing all courses logic
    const data = await Course.find({});
    res.send({
        courses: data,
    });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const { username } = req.headers;
    const { courseId } = req.params;
    const isValid = await Course.findOne({ _id: courseId });
    if (!isValid) {
        res.status(400).send({
            msg: "Bad request",
        });
        return;
    }
    await User.updateOne(
        { username: username },
        {
            $push: {
                courseActive: courseId,
            },
        }
    );
    res.send({
        msg: "Course purchased successfully ",
    });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const { username } = req.headers;
    const { courseActive } = await User.findOne({ username });
    const allCourseData = await Course.find({ _id: { $in: courseActive } });
    res.send({
        allCourseData,
    });
});

module.exports = router;
