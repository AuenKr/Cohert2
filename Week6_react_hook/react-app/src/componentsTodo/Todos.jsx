import React from "react";

const Todos = React.memo(({ title, description }) => {
    return (
        <>
            <h3>{title}</h3>
            <p>{description}</p>
        </>
    )
})

export default Todos

