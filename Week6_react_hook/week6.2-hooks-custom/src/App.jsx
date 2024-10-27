import { useCallback, useState } from "react";
import Button from "./componentsCallbackHook/Button";
import useFetch from "./hooks/useFetch";
import useIsOnline from "./hooks/useIsOnline";
import usePrev from "./hooks/usePrev";
import useDebounce from "./hooks/useDebounce";
function App() {
    const [count, setCount] = useState(0);
    /*
        Button component should not re-render as using React.memo and props are not changing
        But still it re-render because fucntion, array, object are check by refrence equity, means
        there memory location should not change.
        But as App re-render btnResponse re-allocated
        => Button get re-render.
    */
    // function btnResponse() {
    //     console.log("Btn Response is called");
    // }

    /*
        To remove this unnecessary render we define useCallback hook to define a function.
        And prevent unnecessaty re-render
    */
    const btnResponse = useCallback(() => {
        console.log("Btn Response is called");
    }, [])

    const { loading, data } = useFetch("https://jsonplaceholder.typicode.com/posts/1");
    const onlineState = useIsOnline();
    const prev = usePrev(count);

    const [inputValue, setInputValue] = useState("");
    const [finalValue, setFinalValue] = useState("");

    function updateFinalValue() {
        console.log("Final value run");
        setFinalValue(inputValue);
    }
    useDebounce(inputValue, updateFinalValue);
    
    return (
        <div>
            <div>
                <div>
                    <Button innerFunc={btnResponse}></Button>
                    <br /><br />
                </div>
                <div>
                    <Button innerFunc={btnResponse}></Button>
                    <br /><br />
                </div>
                <div>
                    <Button innerFunc={btnResponse}></Button>
                    <br /><br />
                </div>
            </div>

            <div style={{ background: "red", display: "flex", flexDirection: "column", alignItems: "center", padding: "1rem" }}>
                <div>
                    <button onClick={() => setCount(count + 1)}>{`Increment`}</button>
                </div>
                <div>{count}</div>
                <div><button onClick={() => setCount(prev)}>Set prev value</button></div>
            </div>

            <div>
                {loading ? "Loading..." : data.title}
            </div>

            <div>
                <div>User state</div>
                <div>{onlineState ? "online" : "offline"}</div>
            </div>

            <div>
                <div>Input debounce</div>
                <div>
                    <input type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
                    <div>Value: {finalValue}</div>
                </div>
            </div>
        </div>
    )
}
export default App;
