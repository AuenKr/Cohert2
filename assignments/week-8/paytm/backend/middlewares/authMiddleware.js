const jwt = require("jsonwebtoken");
const { User } = require("../db");
const jwtPassword = process.env.JWT_SECRET;

async function authMiddleware(req, res, next) {
    const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith("Bearer ")) {
        return res.status(403).json({});
    }

    const token = authorization.split(" ")[1];
    try {
        const { username } = jwt.verify(token, jwtPassword);
        const user = await User.findOne({ username });
        req.userId = user._id;
        return next();
    } catch (err) {
        res.status(403).send({
            message: "Invalid Token",
        });
    }
}

module.exports = authMiddleware;
