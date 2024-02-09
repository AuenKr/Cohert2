// Func to create user in database
import { Client } from "pg";

// postgresql://postgres:admin123@localhost:5432/postgres?sslmode=disable

const client = new Client({
    connectionString: "postgresql://postgres:admin123@localhost:5432/postgres?sslmode=disable",
    // connectionString: "postgresql://harkirat.iitr:CPiu@Lcwt1ZU@ep-icy-meadow-a5nmej2q.us—east-2.aws.neon.tech/neondb?sstmode=require",
    // host: "localhost",
    // port: 5432,
    // database: "postgres",
    // user: 'postgres',
    // password: "admin123"
})


async function createUsersTable() {
    await client.connect();
    const result = await client.query(`
        CREATE TABLE User1TEST (
            id SERIAL PRIMARY KEY,
            USERNAME VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result);
    client.end();
}

// createUsersTable();

async function insertData(username: string, email: string, password: string) {
    try {
        await client.connect();
        const query1 = `
            INSERT INTO usertest (USERNAME, email, password)
            VALUES ('${username}', '${email}', '${password}');
        `;
        const query2 = `
            INSERT INTO usertest (USERNAME, email, password)
            VALUES ($1, $2, $3);
        `;
        const values = [username, email, password];
        console.log(query1, values);
        const result = await client.query(query1);
        console.log(result);
    } catch (err) {
        console.log("Error :\n", err);
    }
    finally {
        await getData('username AND delete from usertest');
        client.end();
    }
}

insertData("afsdadsf1dfsa", "fdasfd121dsa", "123123");

async function getData(TABLE: string) {
    // client.connect();
    const query = "SELECT * FROM " + TABLE;
    const result = await client.query(query);
    console.log("search result : \n", result.fields, "\n", result.rows);
    // client.end();
}

// getData("usertest");