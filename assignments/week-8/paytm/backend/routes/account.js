const express = require("express");
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
            message: "Invalid user Inputs",
        });
    }

    const senderId = req.userId;
    const { to: recieverId, amount } = req.body;
    const { balance } = await Accounts.findOne({ userId: senderId });
    if (!balance || balance < amount) {
        return res.status(400).send({
            message: "Insufficient balance",
            balance,
        });
    }

    const senderIdValidy = await Accounts.findOne({ userId: recieverId });

    try {
        await transferAmount(senderId, recieverId, amount);
        return res.send({
            message: "Transfer successful",
        });
    } catch (err) {
        return res.send({
            message: "Transfer failed",
        });
    }
});

module.exports = route;

async function transferAmount(senderId, recieverId, amount) {
    try {
        await Accounts.findOneAndUpdate(
            { userId: senderId },
            { $inc: { balance: -amount } }
        );
        try {
            await Accounts.findOneAndUpdate(
                { userId: recieverId },
                { $inc: { balance: amount } }
            );
        } catch (err) {
            await Accounts.findOneAndUpdate(
                { userId: senderId },
                { $inc: { balance: amount } }
            );
            return res.status(400).send({
                message: "Transfer failed : error at reciver end",
                err,
            });
        }
    } catch (err) {
        return res.status(400).send({
            message: "Transfer failed : error at sender end",
            err,
        });
    }
}
