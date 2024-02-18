const mongoose = require("mongoose");
const { DB_URL, PORT } = require("./config");
const express = require("express");
const cors = require("cors");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const path = require("path");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter);
app.use("/user", userRouter);

app.use(express.static("public"));
app.use("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../admin-client/dist/index.html"));
});

// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "courses",
});

app.listen(PORT, () => console.log("Server running on port ", PORT));
