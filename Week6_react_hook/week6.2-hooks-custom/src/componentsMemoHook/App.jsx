import { useEffect, useMemo } from "react";
import { useState } from "react"

function App() {
    console.log("App re-render")
    const [counter, setCounter] = useState(0)
    const [n, setN] = useState(0);
    // const [sum, setSum] = useState(0);

    function updateN(event) {
        console.log("SetN called")
        let no = parseInt(event.target.value)
        setN(no);
    }
    function updateCounter() {
        console.log("setCounter called")
        setCounter(counter + 1)
    }

    // useEffect(() => {
    //     let temp = 0;
    //     for (let i = 1; i <= n; i++) {
    //         temp += i;
    //     }
    //     console.log("useEffect sum called")
    //     setSum(temp)
    // }, [n])
    let sum = useMemo(() => {
        let temp = 0;
        for (let i = 1; i <= n; i++) {
            temp += i;
        }
        console.log("useState sum called")
        return temp;
    }, [n])


    return (
        <div>
            <input type="number" onBlur={updateN} placeholder={`${n}`} />
            <br /><br />
            <div id="sum">{`Sum from 1 to ${n} is ${sum}`}</div>
            <br /><br />
            <button onClick={updateCounter}>{`Counter (${counter})`}</button>
        </div>
    )
}

export default App