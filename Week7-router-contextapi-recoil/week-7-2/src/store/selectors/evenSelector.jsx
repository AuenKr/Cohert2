import { selector } from "recoil";
import { countAtom } from "./../atoms/countAtom";

export const evenSelector = selector({
  key: "evenSelector",
  get: ({ get }) => {
    const count = get(countAtom);
    return count % 2 === 0;
  }
})

{/* 
const evenSelector = useMemo(()=>{
  return count%2==0;
}, [count])
*/}

