import { useState } from "react";
import { useMemo } from "react";

export default function BackgroundColor() {
    const [backgroundColor, setBackgroundColor] = useState("Orange");
    const colors = ["Red", "Yellow", "Black", "Purple", "Blue", "Orange"]
    return (
        <div style={{
            display: "flex",
            height: "80vh",
            justifyContent: "center",
            alignItems : "end",
            position : "sticky"
        }}>
            <div style={{
                backgroundColor: "whitesmoke",
                display: "flex",
                width: "70%",
                justifyContent: "space-evenly",
                alignItems : "center",
                border: "1px solid black",
                borderRadius: "15px",
                boxShadow: "0px 0px 5px grey"
            }}>
                {colors.map((color) => <Button key={color} color={color}></Button>)}
            </div>
        </div>
    )
}

function Button({ color = "Orange" }) {
    let colorName = color === "Orange" ? "Default" : color;
    let textColor = color === "Black" ? "White" : "Black";
    return (
        <button style={{
            color: textColor,
            backgroundColor: color,
            padding: "5px",
            margin: "5px",
            border: "1px solid black",
            borderRadius: "10px",
            width: "4rem",
            boxShadow: "0px 0px 4px grey"
        }} onClick={() => {
            document.body.style.backgroundColor = color;
        }}>{colorName}</button>
    )
}