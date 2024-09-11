import { WebSocketServer } from 'ws';
import dotenv from 'dotenv';

dotenv.config();
const PORT = parseInt(process.env.WS_SERVER || "5000")

const wss = new WebSocketServer({ port: PORT });

console.log("wss running on port", PORT)
wss.on('connection', function connection(ws) {
  console.log("new connection started")
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    ws.send(JSON.stringify({
      msg: "Message received",
      data: data.toString()
    }))
    console.log('received: %s', data);
  });


  ws.send(JSON.stringify({
    msg: `Server is running on port ${PORT}`
  }));

  ws.on("close", () => {
    console.log("one client disconnected")
  })
  
});
