const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
dotenv.config();
const app = express();
const PORT = process.env.PORT;

const apiRoute = require("./routes");

app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1", apiRoute);

app.listen(PORT, () => console.log("Port : ", PORT));
