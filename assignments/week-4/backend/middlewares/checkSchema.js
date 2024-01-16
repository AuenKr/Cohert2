const zod = require("zod");

const schema = zod.object({
    id: zod.number(),
    title: zod.string(),
    description: zod.string(),
});

function checkSchema(req, res, next) {
    const { id, title, description } = req.body;
    if (!schema.safeParse({ id, title, description }).success) {
        res.status(400).send({
            msg: "Invalid Input format",
        });
        return;
    }
    next();
}

module.exports = {
    checkSchema,
};
