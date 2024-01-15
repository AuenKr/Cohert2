import { useCallback, useState } from "react";
import Button from "./Button";
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

    return (
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
            <div>
                <button onClick={() => setCount(count + 1)}>{`Counter ${count}`}</button>
            </div>
        </div>
    )
}
export default App;
