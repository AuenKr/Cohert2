const jwt = require("jsonwebtoken");
const jwtPass = "secret";

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    try {
        jwt.verify(token, jwtPass);
        next();
    } catch (err) {
        res.status(404).send({
            message: "Invalid userId/ Password",
        });
    }
}

module.exports = userMiddleware;
