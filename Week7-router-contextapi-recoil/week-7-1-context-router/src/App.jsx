import { useContext, useState } from "react";
import { CountContext } from "./components/contextApi/context";
function App() {
    const [count, setCount] = useState(0);

    // wrap anyone that wants to use the teleported value inside a provider
    return (
        <div>
            <h1>Not re-render head</h1>
            <h1>Not re-render head</h1>
            <h1>Not re-render head</h1>
            <CountContext.Provider value={{ count, setCount }}>
                <Count />
            </CountContext.Provider >
        </div>
    )
}


function Count({ setCount }) {
    return (
        <div>
            <CountRenderer />
            <div>
                <Buttons />
            </div>
        </div>
    )
}

function CountRenderer() {
    const count = useContext(CountContext.count);
    return (
        <div>
            {count}
        </div>
    )
}

function Buttons() {
    const count = useContext(CountContext.count);
    const setCount = useContext(CountContext.setCount);
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(() => {
            if (count === 0) return count;
            return count - 1;
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