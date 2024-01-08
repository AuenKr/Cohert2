const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post("/signup", (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
    const isValid = Admin.find({ username: username });
    if (!isValid) {
        const data = new Admin({
            username: username,
            password: password,
        });
        data.save().then(
            res.json({
                message: "Admin created successfully",
            })
        );
    } else {
        res.status.json({
            message: "username alredy exist",
        });
    }
});

router.post("/courses", adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get("/courses", adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;
