import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
export default function Receiver() {
    const [socket, setSocket] = useState<WebSocket | null>(null);
    useEffect(() => {
        const socket = new WebSocket("ws://localhost:3005");
        socket.onopen = () => {
            socket.send(JSON.stringify({ type: "receiver" }));
            console.log("Connected to ws");
        };

        let pc: RTCPeerConnection | null = null;
        socket.onmessage = async (event) => {
            const message = JSON.parse(event.data);
            if (message.type === "offer") {
                pc = !pc ? new RTCPeerConnection() : pc;
                pc.ontrack = (event) => {
                    console.log("ontrack is callled, \n", event.track);
                    const videoElement = document.createElement("video");
                    document.body.appendChild(videoElement);
                    videoElement.srcObject = new MediaStream([event.track]);
                    videoElement.play();
                };

                await pc.setRemoteDescription(message.sdp);
                const answer = await pc.createAnswer();
                await pc.setLocalDescription(answer);
                socket?.send(
                    JSON.stringify({
                        type: "createAnswer",
                        sdp: pc.localDescription,
                    })
                );

                pc.onicecandidate = (event) => {
                    const candidate = event.candidate;
                    console.log("on ice candidate");
                    if (candidate) {
                        socket.send(
                            JSON.stringify({
                                type: "addIceCandidate",
                                candidate,
                            })
                        );
                    }
                };
            } else if (message.type === "candidate") {
                // For trickelling of iceCandidate (ice cand. are slowing comming in)
                if (!pc) return;
                await pc.addIceCandidate(message.candidate);
            }
        };

        setSocket(socket);
        // return () => socket.close();
    }, []);
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
            }}
        >
            <div>On Receiver page</div>
            <button>
                <Link to={"/"}>Go Back</Link>
            </button>
        </div>
    );
}
