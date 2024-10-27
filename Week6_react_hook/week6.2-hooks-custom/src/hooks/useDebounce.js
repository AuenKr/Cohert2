import { useEffect, useRef } from "react";

export default function useDebounce(dependentValue, functionToCall) {
  const timer = useRef();
  useEffect(() => {
    const x = setTimeout(() => {
      functionToCall();
    }, 200);
    timer.current = x;
    return () => clearTimeout(timer.current);
  }, [dependentValue, functionToCall]);
}
