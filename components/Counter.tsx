import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => setCounter((prevCounter) => prevCounter + 1);
  const decrementCounter = () => setCounter((prevCounter) => prevCounter - 1);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px",
        border: "1px solid #eee",
      }}
    >
      <button data-testid="increment" onClick={incrementCounter}>
        +
      </button>

      <p data-testid="counter">{counter}</p>

      <button disabled data-testid="decrement" onClick={decrementCounter}>
        -
      </button>
    </div>
  );
};
