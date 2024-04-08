import express from 'express';
import { WebSocketServer, WebSocket } from 'ws';
const PORT = 8080;
let userCount = 0;

const app = express();
const httpServer = app.listen(PORT || 3000, () => {
    console.log("listening on Port ", PORT)
})

app.get('/', (req, res) => {
    res.send("Hello from express http server")
})

const wss = new WebSocketServer({ server: httpServer });

wss.on('connection', function connection(socket) {
    console.log("New user connected\nTotalUser : ", ++userCount);
    socket.on('error', (err) => console.error(err));

    socket.on('message', function message(data, isBinary) {
        wss.clients.forEach(function each(client) {
            // console.log((client));
            if (client.readyState === WebSocket.OPEN) {
                client.send(data, { binary: isBinary });
            }
        });
    });
    socket.on('close', () => console.log('User got disconnected\nTotalUser : ', --userCount))
    socket.send('Hello! Message From Server!! xxxxxxxx');
});