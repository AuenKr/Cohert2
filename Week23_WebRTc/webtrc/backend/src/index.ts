import { WebSocket, WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 3005 });

let senderSocket: WebSocket | null = null;
let receiverSocket: WebSocket | null = null;

wss.on('connection', function connection(ws) {
    ws.on('error', function error(error) {
        console.log(error);
    });

    ws.on('message', async function message(data) {
        if (!senderSocket) console.log("Sender not connected");
        if (!receiverSocket) console.log("Receiver not connected");
        const message = JSON.parse(data as unknown as string);
        console.log(message);
        // identify as sender
        // identify as receiver

        // create offer
        // create answer

        // add ice candidate
        if (message.type === "sender") {
            senderSocket = ws;
        } else if (message.type === "receiver") {
            receiverSocket = ws;
        } else if (message.type === "createOffer") {
            receiverSocket?.send(JSON.stringify({ type: "offer", sdp: message.sdp }));
            console.log(!senderSocket ? "create offer fail as no sender is not connected" : "Create offer success")
        } else if (message.type === "createAnswer") {
            senderSocket?.send(JSON.stringify({ type: "answer", sdp: message.sdp }));
            console.log(!receiverSocket ? "create answer fail as no reciver is not connected" : "Create Answer success")
        } else if (message.type === "addIceCandidate") {
            if (ws === senderSocket) {
                receiverSocket?.send(JSON.stringify({ type: "candidate", candidate: message.candidate }))
            } else if (ws === receiverSocket) {
                senderSocket?.send(JSON.stringify({ type: "candidate", candidate: message.candidate }))
            }
        }
    })

    ws.on("close", () => {
        console.log("One connection closed")
    })
    ws.send(JSON.stringify({ msg: "Connection look good" }));
})

