import { useEffect, useState } from "react";
import {
  useDebounce,
  useDimension,
  useInterval,
  useMousePointer,
  useOnlineStatus,
} from "../hooks/BrowserHooks";

function TestHooks() {
  const isOnline = useOnlineStatus();
  const position = useMousePointer();
  const { width, height } = useDimension();

  return (
    <div>
      <div>User is {isOnline ? "Online" : "Offline"}</div>
      <div>
        Mouse loaction is {position.x} {position.y}
      </div>
      <div>
        Window size is width : {width} and height : {height}
      </div>
      <div>
        <Timer />
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
}

export default TestHooks;

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay
  useEffect(() => {
    console.log(debouncedValue);
  }, [debouncedValue]);

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
  );
};

const Timer = () => {
  const [count, setCount] = useState(0);
  useInterval(() => {
    setCount((c) => c + 1);
  }, 1000);
  return <div>Timer is {count}</div>;
};
