import { useState } from "react"



export default function ParaGenrator() {
    const [input, setInput] = useState(0);
    const [output, setOutput] = useState("");

    const inputHandler = (e) => {
        setInput(parseInt(e.target.value));
    }

    const generateRandomWords = () => {
        let lorem = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur rerum consectetur recusandae. Commodi minima, saepe corporis nulla praesentium eius quasi accusantium impedit sapiente, aspernatur, excepturi animi placeat. Fuga, earum delectus!";
        lorem = lorem.split(" ");
        let randomLorem = "";
        for (let i = 0; i < input; i++) {
            randomLorem += lorem[Math.floor(Math.random() * lorem.length)] + " ";
        }
        setOutput(randomLorem);
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <h1>Paragraph Generator</h1>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <input type="number" placeholder="Enter number of words" onBlur={inputHandler} style={{
                    width: "600px",
                    margin: "10px",
                    padding: "10px",
                    borderRadius: "10px",
                }} />
                <button onClick={generateRandomWords} style={{
                    width: "200px",
                    padding: "10px",
                    borderRadius: "10px",
                    color: "white",
                    backgroundColor: "black",
                }}> Generate </button>
            </div>
            <div style={{
                display: "flex",
                maxWidth: "80vw",
                textWrap: "wrap",
                textAlign: "justify"
            }}>{output}
            </div>
        </div>
    )
}

