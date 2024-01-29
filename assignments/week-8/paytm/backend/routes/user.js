const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { signupSchema, signinSchema, updateInfoSchema } = require("../schemas");
const jwt = require("jsonwebtoken");
const jwtPassword = process.env.JWT_SECRET;
const route = express.Router();

const { User, Accounts } = require("../db");

route.get("/", async (req, res) => {
  const allUser = await User.find({});
  res.send({
    msg: "all user",
    allUser,
  });
});

route.post("/signup", async (req, res) => {
  const { success } = signupSchema.safeParse(req.body);
  if (!success) {
    return res.status(411).send({
      message: "Invalid Inputs",
    });
  }

  const response = await User.findOne({ username: req.body.username });
  if (response) {
    return res.status(411).send({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const { firstName, lastName, username, password } = req.body;
  const { _id } = await User.create({
    firstName,
    lastName,
    username,
    password,
  });

  // Giving random balance bw 1 to 1000
  const randBalance = Math.floor(Math.random() * 1000) + 1;
  const accBalance = await Accounts.create({
    userId: _id,
    balance: randBalance,
  });

  // Final response
  const jwtData = { username };
  const token = jwt.sign(jwtData, jwtPassword);
  res.send({
    message: "User created successfully",
    token: token,
    balance: accBalance.balance,
  });
});

route.post("/signin", async (req, res) => {
  const { success } = signinSchema.safeParse(req.body);
  if (!success) {
    return res.status(411).send({
      message: "Invalid Inputs",
    });
  }
  const { username, password } = req.body;
  const isValid = await User.findOne({ username, password });
  if (!isValid) {
    return res.status(411).send({
      message: "Error while logging in",
    });
  }
  const jwtData = { username };
  const token = jwt.sign(jwtData, jwtPassword);
  res.send({
    token,
  });
});

route.put("/", authMiddleware, async (req, res) => {
  const { success } = updateInfoSchema.safeParse(req.body);
  if (!success) {
    return res.status(411).send({
      message: "Invalid Inputs",
    });
  }

  const userId = req.userId;
  const { password, firstName, lastName } = req.body;
  const updatedValue = { password, firstName, lastName };
  try {
    await User.findByIdAndUpdate(userId, updatedValue);
    return res.send({
      message: "Updated successfully",
    });
  } catch (err) {
    return res.send({
      message: "Error while updating information",
    });
  }
});

route.get("/bulk", authMiddleware, async (req, res) => {
  const filter = req.query.filter || "";

  const response = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
      {
        username: {
          $regex: filter,
        },
      },
    ],
  });

  const userId = req.userId;
  const finalSearchResult = response.map((user) => {
    // if (userId.toString()!==user._id.toString()) {
      return {
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        _id: user._id,
      };
    // }
  });
  return res.send({
    users: finalSearchResult,
  });
});

route.get("/test", authMiddleware, (req, res) => {
  res.send({
    msg: "On test route",
    userId: req.userId,
  });
});

module.exports = route;
