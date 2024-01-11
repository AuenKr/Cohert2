// const zod = require("zod");
function validityCheck(data, schema) {
    return schema.safeParse(data).success;
}

module.exports = {
    validityCheck: validityCheck,
};
