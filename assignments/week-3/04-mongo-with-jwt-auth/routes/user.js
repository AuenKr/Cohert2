const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");


// User Routes
router.post("/signup", async (req, res) => {
    // Implement user signup logic
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

router.post("/signin", (req, res) => {
    // Implement admin signup logic

    res.send("on user singin page");
});

router.get("/courses", (req, res) => {
    // Implement listing all courses logic
    Course.find().then((data) => {
        res.json(data);
    });
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
    // Implement course purchase logic
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

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const { username } = req.headers;
    const userData = await User.findOne({ username: username });
    const purchasedCourses = userData.courseActive;
    const resData = [];
    for (let course of purchasedCourses) {
        const courseData = await Course.findById(course);
        resData.push(courseData);
    }
    res.json({
        purchasedCourses: resData,
    });
});

module.exports = router;
