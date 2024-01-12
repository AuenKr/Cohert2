const jwt = require("jsonwebtoken");
const jwtPass = "secret";

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
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

module.exports = adminMiddleware;
