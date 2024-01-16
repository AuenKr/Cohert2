const { Router } = require("express");
const router = Router();
const { Todo } = require("../db/index");
const { checkSchema } = require("../middlewares/checkSchema");
const { validId } = require("../middlewares/validId");

router.get("/all", async (req, res) => {
    const data = await Todo.find({});
    res.send(data);
});

router.post("/add", checkSchema, async (req, res) => {
    const { id, title, description } = req.body;
    await Todo.create({ id, title, description });
    res.send({
        msg: "Todo Added",
    });
});

router.put("/:id", validId, async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    try {
        const data = await Todo.findOneAndUpdate(
            { id },
            { $set: body },
            { new: true, runValidators: true }
        );
        res.send({
            msg: "Updated",
            data,
        });
    } catch (err) {
        res.send({
            msg: "Fail to Update",
        });
    }
});

router.delete("/:id", validId, async (req, res) => {
    const { id } = req.params;
    await Todo.deleteOne({ id });
    res.send({
        msg: "deleted",
    });
});

module.exports = router;
