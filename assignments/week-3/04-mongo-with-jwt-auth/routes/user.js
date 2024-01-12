const { Router } = require("express");
const { User, Course } = require("../db/index");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken");
const jwtPass = "secret";

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
    // Implement User signup logic
    const { username, password } = req.body;
    User.findOne({
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
                err,
            });
        });
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
    const { authorization } = req.headers;
    console.log("Token :", authorization)
    const token = authorization.split(" ")[1];
    const { username } = jwt.decode(token);
    User.findOne({ username: username })
        .then((data) => {
            const { courseActive } = data;
            User.updateOne(
                { username: username },
                {
                    $push: {
                        courseActive: courseId,
                    },
                }
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
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    const { username } = jwt.decode(token);
    const userData = await User.findOne({ username: username });
    const { courseActive } = userData;
    const allCourseData = await Course.find({ _id: { $in: courseActive } });
    res.json({
        purchasedCourses: allCourseData,
    });
});

module.exports = router;
