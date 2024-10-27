import React from "react";

const Button = React.memo(({ innerFunc }) => {
    console.log("Btn re-renderd")
    return (
        <button onClick={innerFunc}>Test Button</button>
    )
})

export default Button;