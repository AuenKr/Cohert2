const express = require("express");
const app = express();
const port = 8;

app.listen(port, () => {
    console.log(`port: ${port}`);
});

app.get("/", (req, res) => {
    res.send("Get / response sucess");
});