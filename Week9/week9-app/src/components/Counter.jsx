import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const countPlus1 = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={countPlus1}>Increament</button>
      </div>
    </div>
  );
}

export class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

