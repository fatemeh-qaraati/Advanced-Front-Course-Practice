import { useState } from "react";

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((previousValue) => previousValue + 1);
  const decrement = () => setCount((previousValue) => previousValue - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
};

export default useCounter;

// Instead of lines 6, 7, and 8, the following three lines can also be used as a replacement:

//   const increment = useCallback(() => setCount((previousValue) => previousValue + 1), []);
//   const decrement = useCallback(() => setCount((previousValue) => previousValue - 1), []);
//   const reset = useCallback(() => setCount(initialValue), [initialValue]);