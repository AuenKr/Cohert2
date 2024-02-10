import { Client } from 'pg';

export async function getClient() {
    const client = new Client("Your Postgress connection string");
    await client.connect();
    return client;
}
