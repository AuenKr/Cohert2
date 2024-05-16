import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Sender() {
    const [socket, setSocket] = useState<WebSocket | null>(null);
    useEffect(() => {
        const socket = new WebSocket("ws://localhost:3005");
        socket.onopen = () => {
            socket.send(JSON.stringify({ type: "sender" }));
        };
        setSocket(socket);
        console.log("Sender connected to ws");
        // return () => socket.close();
    }, []);

    async function startSendingVideo() {
        if (!socket) return;

        // Create offer
        const pc = new RTCPeerConnection();

        // When there is need to exchange sdp
        pc.onnegotiationneeded = async () => {
            console.log("On negotiated");
            const offer = await pc.createOffer();
            await pc.setLocalDescription(offer);
            socket.send(
                JSON.stringify({
                    type: "createOffer",
                    sdp: pc.localDescription,
                })
            );
        };
        // When other side rend answer or updated iceCandidate
        socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            if (message.type === "answer") {
                pc.setRemoteDescription(message.sdp);
            }
            // For trickelling of iceCandidate (ice cand. are slowing comming in)
            else if (message.type === "candidate") {
                pc.addIceCandidate(message.candidate);
            }
        };

        // Send ice candidate when audio/video transfer
        pc.onicecandidate = (event) => {
            const candidate = event.candidate;
            if (candidate) {
                console.log("on icecandidate called ");
                socket.send(
                    JSON.stringify({ type: "addIceCandidate", candidate })
                );
            }
        };

        console.log("Btn clicked");

        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false,
        });
        pc.addTrack(stream.getVideoTracks()[0]);
    }

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
            }}
        >
            <div>On Sender page</div>
            <button>
                <Link to={"/"}>Go Back</Link>
            </button>
            <button onClick={startSendingVideo}>Send Video</button>
        </div>
    );
}
