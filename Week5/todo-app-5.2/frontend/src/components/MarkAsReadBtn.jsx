import { useState } from "react"

export function MarkAsDoneBtn({ initialValue, id }) {
    const [completed, setCompleted] = useState(initialValue);

    async function marAsDone() {
        const data = await fetch("http://localhost:3000/completed", {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                "id": id
            })
        })
        if (completed == false) setCompleted(true);
    }
    return (
        <>
            <button onClick={marAsDone}>
                {completed == true ? "Completed" : "Mark as done"}
            </button>
        </>
    )
}