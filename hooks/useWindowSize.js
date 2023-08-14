/**
 * useWindowSize
 * Hook that allows a component to keep track of the current size of the browser window
 */
import { useState } from "react";
import useEventListener from "../hooks/useEventListener";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEventListener("resize", () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  });

  return windowSize;
};
export default useWindowSize;
