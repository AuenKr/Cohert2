import { useState } from "react";

export function HeaderWithButton() {
    const [text, setText] = useState("Test text 1");
    function updateTitle() {
        const random = Math.floor(Math.random() * 10) + 1;
        setText(random)
    }
    return (
        <>
            <button onClick={updateTitle}>
                Click to change text
            </button >
            <h1>{text}</h1>
        </>
    )
}