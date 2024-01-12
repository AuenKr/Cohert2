function CardWrapper({ children }) {
    return (
        <>
            <div style={{
                border: "2px solid black",
                padding: "50px",
                margin: "10px",
                justifyContent: "center",
                textAlign: "center"
            }}>
                {children}
            </div>
        </>
    )
}

/*
// it is kind of wrapper (not really use) 
function CardWrapper({ innerComponent }) {
    return (
        <>
            <div style={{
                "border": "2px solid black",
                "padding": "50px",
                "margin": "10px"
            }}>
                {innerComponent}
            </div>
        </>
    )
}
*/

export default CardWrapper