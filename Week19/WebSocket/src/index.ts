import WebSocket, { WebSocketServer } from 'ws';
import http from 'http';
let userCount = 0;

const server = http.createServer(function (request: any, response: any) {
  console.log((new Date()) + ' Received request for ' + request.url);
  response.end("hi there");
});

const wss = new WebSocketServer({ server });

wss.on('connection', function connection(socket) {
  console.log("New user connected\nTotalUser : ", ++userCount);
  socket.on('error', (err) => console.error(err));

  socket.on('message', function message(data) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
  socket.on('close', () => console.log('User got disconnected\nTotalUser : ', --userCount))
  socket.send('Hello! Message From Server!! xxxxxxxx');
});

server.listen(8080, function () {
  console.log((new Date()) + ' Server is listening on port 8080');
});