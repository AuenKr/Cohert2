const zod = require("zod");

const todoSchema = zod.object({
    title: zod.string(),
    description: zod.string(),
});
const completedSchema = zod.object({
    id: zod.string(),
});

module.exports = {
    createTodo: todoSchema,
    updateTodo: completedSchema,
};
/* 
    {
        todos : {},
        todo : {
            title : string
            description : string
        }
        completed : {
            id : string
        }
    }
*/
