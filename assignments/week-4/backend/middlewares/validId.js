const { Todo } = require("../db");

async function validId(req, res, next) {
    const { id } = req.params;
    const isValid = await Todo.findOne({ id });
    if (!isValid) {
        res.status(400).send({
            msg: "invalid ID",
        });
        return;
    }
    next();
}

module.exports = { validId };
