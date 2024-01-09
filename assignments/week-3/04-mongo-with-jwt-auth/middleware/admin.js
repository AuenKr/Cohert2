// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const { username, password } = req.headers;
    Admin.findOne({
        username: username,
        password: password,
    }).then((data) => {
        if (data === null) {
            res.status(404).send({
                message: "Invalid userId/ Password",
            });
            return;
        }
        next();
    });
}

module.exports = adminMiddleware;
