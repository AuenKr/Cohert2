import { WebSocketServer } from 'ws';
import { startLogger } from './logger';
import { GameManager } from './store';

const wss = new WebSocketServer({
    port: 3000
})

const gameManager = GameManager.getInstance();

wss.on('connection', () => {
    gameManager.addGame("game" + String(Math.floor(Math.random() * 10000)));
});

wss.on('connection', function connection(ws) {
    ws.on('open', () => console.log("New connection added"));

    ws.on('error', console.error);

    ws.on('message', async (data) => {
        const message = JSON.parse(data as unknown as string);
        console.log("message :\n", message);
        ws.send(JSON.stringify(message));
    })
    ws.send(JSON.stringify({
        msg: "Connection establised",
    }))
})

wss.on('close', () => console.log("Connection is closed"));

startLogger();