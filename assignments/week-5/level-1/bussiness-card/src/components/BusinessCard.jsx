import Button from "./Button";

function BusinessCard(prop) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            border: "1px solid grey",
            borderRadius: "10px",
            boxShadow: "0 0 8px grey",
            padding: "20px",
            margin: "10px",
            color: "#646473",
            maxWidth: "350px"
        }}>
            <h2 style={{ color: "black" }}>{prop.name}</h2>
            <p>{prop.description}</p>
            <h3 style={{ color: "black" }}>{prop.interestsHeader}</h3>
            <ul style={{
                padding: "0px",
            }}>
                {prop.interests.map((interest, index) => <li style={{
                    listStyle: "none",
                }} key={index}>{interest}</li>)}
            </ul>
            <div>
                <Button url={prop.linkedin} text={"LinkedIn"}></Button>
                <Button url={prop.twitter} text={"Twitter"}></Button>
            </div>
            <div style={{
                marginTop: "10px",
            }}>
                {prop.otherSocialMedia.map((url, index) => <a style={{
                    color: "black",
                }} key={index} href={url}>{url}</a>)}
            </div>
        </div>
    )
}

export default BusinessCard;
const data = {
    card: "1",
    name: "Golden Kumar",
    description: "A upcoming best full stack devloper",
    interestsHeader: "Interest",
    interestsList: ["HTML, CSS, JS", "React", "Express", "MongoDb", "Zod/jsonwebtoken"],
    linkedin: "https://www.linkedin.com/in/golden-kumar-32067b22b/",
    twitter: "https://twitter.com/goldenkumar64",
    otherSocialMedia: ["Github"],
}