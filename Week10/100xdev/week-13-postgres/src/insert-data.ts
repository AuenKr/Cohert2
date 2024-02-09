import { getClient } from "./utils";

async function createEntries() {
    const client = await getClient();
    const insertUserText = 'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id';
    const userValues = ['john.do11e@gmail234.com', 'hashed_password_here'];

    let response = await client.query(insertUserText, userValues);
    const insertTodoText = 'INSERT INTO todos (title, description, user_id) VALUES ($1, $2, $3) RETURNING id';
    console.log(response.rows)
    const todoValues = ['Buy groceries', 'Milk, bread, and eggs', response.rows[0].id];
    await client.query(insertTodoText, todoValues);

    console.log("Entries created!");
}

createEntries();