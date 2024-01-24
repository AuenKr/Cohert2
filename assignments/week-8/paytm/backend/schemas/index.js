const zod = require("zod");

const signupSchema = zod
    .object({
        firstName: zod.string(),
        lastName: zod.string(),
        username: zod.string().email(),
        password: zod.string().min(6),
    })
    .strict();

const signinSchema = zod
    .object({
        username: zod.string().email(),
        password: zod.string().min(6),
    })
    .strict();

const updateInfoSchema = zod
    .object({
        password: zod.string().min(6).optional(),
        firstName: zod.string().optional(),
        lastName: zod.string().optional(),
    })
    .strict();

const transferMoneySchema = zod
    .object({
        to: zod.string(),
        amount: zod.number(),
    })
    .strict();

module.exports = {
    signupSchema,
    signinSchema,
    updateInfoSchema,
    transferMoneySchema,
};
