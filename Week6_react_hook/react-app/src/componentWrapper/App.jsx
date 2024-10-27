import CardWrapper from "./componentWrapper/CardWrapper"
import Header from "./componentWrapper/Header"

function App() {
  return (
    <>
      <CardWrapper>
        <CardWrapper>
          <CardWrapper>
            <CardWrapper>
              <CardWrapper>
                <Header title={"jlksadf kjsdfl kadslfkj "} />
              </CardWrapper>
            </CardWrapper>
          </CardWrapper>
        </CardWrapper>
      </CardWrapper>
    </>
  )
}

/*
// it is kind of wrapper (not really use) 
function App() {
  return (
    <>
      <CardWrapper innerComponent={<Header title="fjkdsakfjsd dsjkfnasdj" />} />
      <CardWrapper innerComponent={<Header title="fjkdsakfjsd dsjkfnasdj" />} />
    </>
  )
}
*/
export default App