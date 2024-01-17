import React, { useState, useCallback } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
    const [count, setCount] = useState(0);

    // Your code starts here

    function Increment() {
        setCount(prev => prev + 1);
    }
    const handleIncrement = useCallback(Increment, []);
    function Decrement() {
        setCount(prev => prev - 1)
    }
    const handleDecrement = useCallback(Decrement, []);
    // Your code ends here

    return (
        <div>
            <p>Count: {count}</p>
            <br />
            <br />
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
};

const CounterButtons = React.memo(({ onIncrement, onDecrement }) => (
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
));
