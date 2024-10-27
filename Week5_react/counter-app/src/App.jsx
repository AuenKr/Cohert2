// hook
import { useState } from "react";
let state = {
  count: 0
}
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CustomBtn count={count} setCount={setCount}></CustomBtn>
    </div>
  )
}

// customBtn takes state variables as input
function CustomBtn(props) {
  function onClickHandler() {
    props.setCount(props.count + 1);
  }
  return (
    <button onClick={onClickHandler}>
      Counter {props.count}
    </button>
  )
}

export default App
