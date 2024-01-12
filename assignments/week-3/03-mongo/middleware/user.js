const { User } = require("../db");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const { username, password } = req.headers;
    const isValid = await User.findOne({
        username,
        password,
    });
    if (!isValid) {
        res.status(411).send({
            msg: "user doesn't exist",
        });
        return;
    }
    next();
}

module.exports = userMiddleware;
