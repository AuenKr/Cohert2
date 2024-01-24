const { Router } = require("express");
const route = Router();
const userRoute = require("./user");
const accountRoute = require("./account");

route.get("/", (req, res) => {
    res.send("on api/v1 page");
});
route.use("/user", userRoute);

route.use("/account", accountRoute);

module.exports = route;
