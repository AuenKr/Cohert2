// import BusinessCard from "./components/BusinessCard";
import BusinessCard from "./components/BusinessCard";

function App() {
  return (
    <div>
      <BusinessCard {...data}></BusinessCard>
    </div>
  )
}

export default App;

const data = {
  card: "fds",
  name: "fjdsf",
  description: "jflskafj",
  interestsHeader: "fadsjfksd",
  interests: ["fdkjsfnakjfn", "fkjasdf fdsa", "fjsaknfdn"],
  linkedin: "fjdksafs.com",
  twitter: "fjdskfanjfasn",
  otherSocialMedia: ["fjdskfsdjkafn"],
}