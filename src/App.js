// src/App.js
import React from "react";
import useCounter from "./Hooks/useCounter";

const App = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Counter: {count}</h1>
      <div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded mr-2"
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;