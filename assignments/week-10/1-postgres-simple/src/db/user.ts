import { Client } from "pg";
import { client } from "../index";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    const values = [username, password, name];
    const result = await client.query(`
        INSERT INTO users (username, password, name)
        VALUES ($1, $2, $3)
     `, values);
    console.log(result);
    return { username, password, name };
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    const values = [userId];
    const result = await client.query(`
        SELECT username, password, name from users where userID=$1
    `, [userId]);
    console.log(result);
    return result;
}

createUser("abc", "1231123", "abc").then((data) => console.log(data));
getUser()