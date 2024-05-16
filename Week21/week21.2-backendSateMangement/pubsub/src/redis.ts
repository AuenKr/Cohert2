import { createClient } from 'redis';


async function startRedisClient() {
    const client = await createClient();
    client.on('error', err => console.log('Redis Client Error', err))
    client.connect();
    console.log("Connected to redis");

    // for testing
    await client.set('key', 'value');
    const value = await client.get('key');
    console.log('key : ', value);
    await client.disconnect();
    console.log("Disconnected to redis")

    
}

startRedisClient();