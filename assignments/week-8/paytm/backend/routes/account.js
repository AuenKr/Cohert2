const express = require("express");
const mongoose = require("mongoose");
const { Accounts } = require("../db");
const authMiddleware = require("../middlewares/authMiddleware");
const { transferMoneySchema } = require("../schemas");
const route = express.Router();

route.get("/", async (req, res) => {
  const allData = await Accounts.find({});
  res.send({
    msg: allData,
  });
});

route.get("/balance", authMiddleware, async (req, res) => {
  const userId = req.userId;
  const accountInfo = await Accounts.findOne({ userId });
  res.send({
    balance: accountInfo.balance,
  });
});

route.post("/transfer", authMiddleware, async (req, res) => {
  const { success } = transferMoneySchema.safeParse(req.body);
  if (!success) {
    return res.status(411).send({
      message: "Invalid Inputs",
    });
  }
  try {
    const session = await mongoose.startSession();
    session.startTransaction();

    //Check info
    const senderId = req.userId;
    const { to: recieverId, amount } = req.body;
    const { balance } = await Accounts.findOne({ userId: senderId }).session(
      session
    );
    if (!balance || balance < amount) {
      await session.abortTransaction();
      return res.status(400).send({
        message: "Insufficient balance",
        balance,
      });
    }

    const senderIdValidy = await Accounts.findOne({
      userId: recieverId,
    }).session(session);
    if (!senderIdValidy) {
      await session.abortTransaction();
      return res.status(400).send({
        message: "Invalid receiver Id",
      });
    }
    // Start transaction
    const { balance: userBalance } = await Accounts.findOneAndUpdate(
      { userId: senderId },
      { $inc: { balance: -amount } },
      { new: true }
    ).session(session);
    await Accounts.findOneAndUpdate(
      { userId: recieverId },
      { $inc: { balance: amount } }
    ).session(session);

    // Commit the transaction
    await session.commitTransaction();
    session.endSession();

    return res.send({
      message: "Transfer successful",
      balance: userBalance,
    });
  } catch (error) {
    return res.status(400).send({
      message: "Transfer failed",
      error,
    });
  }
});

module.exports = route;
