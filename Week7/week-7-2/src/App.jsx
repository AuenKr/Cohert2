import { RecoilRoot, useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/countAtom";
import { evenSelector } from "./store/selectors/evenSelector";
import { useMemo } from "react";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>

  )
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div >
  )
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  const isEven = useRecoilValue(evenSelector);

  // or

  // const isEven = useMemo(() => {
  //   return count % 2 === 0;
  // }, [count])

  return <div>
    {count}
    {isEven && <div>It is even</div>}
  </div>
}

function Buttons() {
  // const [count, setCount] = useRecoilState(countAtom)
  const setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={() => {
      setCount(prev => prev + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(prev => prev - 1)
    }}>Decrease</button>
  </div>
}

export default App
