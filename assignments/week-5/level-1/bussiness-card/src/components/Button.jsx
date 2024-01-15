function Button(prop) {
    return (
        <button style={style.button}><a style={style.a} href={prop.url}>{prop.text}</a></button>
    )
}

export default Button;

const style = {
    button: {
        padding: "10px",
        marginRight: "20px",
        backgroundColor: "blue",
        minWidth: "90px",
        minHeight: "40px",
        textAlign: "center",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer"
    },
    a: {
        color: "white",
        textDecoration: "none"
    }
}