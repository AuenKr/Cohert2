import React, { useEffect, useState } from "react";

function LifecycleEvent() {
  const [render, setRender] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setRender((prev) => !prev);
    }, 4000);
  });
  return (
    <div>
      {/* <div>{render && <MyComponent />}</div> */}
      <div>{!render && <MyComponentClass />}</div>
    </div>
  );
}

export default LifecycleEvent;

function MyComponent() {
  useEffect(() => {
    console.error("Function Component mounted");
    return () => {
      return console.log("Function Component unMounted");
    };
  }, []);
  return (
    <div>
      LifecycleEvent inside the component <b>Function based Componnent</b>{" "}
      <br />
    </div>
  );
}

class MyComponentClass extends React.Component {
  componentDidMount() {
    // Perform setup or data fetching here
    console.error("Class Component mounted");
  }

  componentWillUnmount() {
    // Clean up (e.g., remove event listeners or cancel subscriptions)
    return console.log("Class Component unMounted");
  }

  render() {
    // Render UI
    return (
      <div>
        LifecycleEvent inside the component <b>Class based Componnent</b> <br />
      </div>
    );
  }
}
