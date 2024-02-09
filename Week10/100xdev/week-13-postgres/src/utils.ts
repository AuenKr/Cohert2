import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://fdkfdcjk:bwpqGgUAL0p1G31NfIAHaJ4n6ExY4IcJ@jelani.db.elephantsql.com/fdkfdcjk");
    await client.connect();
    return client;
}