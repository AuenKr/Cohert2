function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const { username, password } = req.headers;
    User.findOne({
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

module.exports = userMiddleware;
