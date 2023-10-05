import React, { useState } from "react";

const HookCounterTwo = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  //si l'on veut mettre a jour une state en se basant sur la state precedent,
  // nous devons toujours passer une fonction au set

  const incrementfive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevcount) => prevcount + 1); //tres important!!!!
    }
  };
  return (
    <div>
      count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevcount) => prevcount + 1)}>
        Incrementer
      </button>
      <button onClick={() => setCount((prevcount) => prevcount - 1)}>
        Decrementer
      </button>
      <button onClick={incrementfive}>Increment 5</button>
    </div>
  );
};

export default HookCounterTwo;
