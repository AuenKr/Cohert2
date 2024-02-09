import { useEffect, useState } from "react";

export function useDebounce(inputValue, duration) {
  const [value, setValue] = useState(inputValue);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setValue(inputValue);
    }, duration);
    return () => clearTimeout(timerId);
  }, [inputValue, duration]);

  return value;
}

export function useInterval(callbackFunc, time) {
  useEffect(() => {
    let x = setInterval(callbackFunc, time);
    return () => {
      clearInterval(x);
    };
  }, []);
}

export function useDimension() {
  const [dimension, setDimension] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const resizeHandler = () => {
    const size = { height: window.innerHeight, width: window.innerWidth };
    setDimension(size);
  };
  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);
  return dimension;
}

export function useMousePointer() {
  const [position, setPosition] = useState({});
  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return position;
}

export function useOnlineStatus() {
  const [state, setState] = useState(window.navigator.onLine);
  const handleOnline = () => setState(true);
  const handleOffline = () => setState(false);
  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // clean up
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return state;
}
