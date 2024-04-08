import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [socket, setSocket] = useState<null | WebSocket>(null);
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState<string>("");

    useEffect(() => {
        const webSocket = new WebSocket("ws://localhost:8080");
        webSocket.onopen = () => {
            console.log("connected");
            setSocket(webSocket);
        };
        webSocket.onmessage = (message) => {
            console.log("recieved message", message.data);
            setMessages((prev) => [...prev, message.data]);
        };
        return () => {
            webSocket.close();
        };
    }, []);

    if (!socket) {
        return <div>Connecting to websocket...</div>;
    }

    return (
        <>
            <div>All messages are</div>
            {messages.map((message, index) => {
                return <div key={index}>{message}</div>;
            })}
            <div>
                <input
                    type="text"
                    value={input}
                    onChange={(evt) => {
                        setInput(evt.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        if (input) {
                            socket.send(input);
                            setInput("");
                        }
                    }}
                >
                    Send
                </button>
            </div>
        </>
    );
}

export default App;
