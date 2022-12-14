import { useState } from "react";

export const useCounter = (initState) => {
  const [counter, setCounter] = useState(initState);

  const handleSetCounter = (count) => setCounter(count);

  const handleIncrement = () => setCounter((pre) => pre + 1);

  const handleDecrement = () => setCounter(counter - 1);

  return [counter, handleIncrement, handleDecrement, handleSetCounter];
};
