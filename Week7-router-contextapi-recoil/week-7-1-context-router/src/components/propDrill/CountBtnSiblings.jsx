import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>This also re-render head</h1>
            <h1>This also re-render head</h1>
            <h1>This also re-render head</h1>
            <Count count={count} />
            <Buttons setCount={setCount} />
        </div>
    )
}

function Count({ count }) {
    return (
        <div>
            {count}
        </div>
    )
}

function Buttons({ setCount }) {
    const increment = () => {
        setCount(prev => prev + 1)
    }
    const decrement = () => {
        setCount(prev => {
            if (prev === 0) return prev;
            return prev - 1;
        })
    }
    return (
        <div>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </div>
    )
}
export default App;