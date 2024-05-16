import { Link } from "react-router-dom";
export default function App() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
            }}
        >
            <div>Hello again react</div>
            <button>
                <Link to={"/sender"}>Sender</Link>
            </button>
            <button>
                <Link to={"/receiver"}>Receiver</Link>
            </button>
        </div>
    );
}
