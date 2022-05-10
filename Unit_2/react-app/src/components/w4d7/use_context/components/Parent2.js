import React, { useReducer, useState } from "react";

const countReducer = (countState, action) => {
  switch (action.type) {
    case "INCREASE":
      return { count: countState.count + 1 };

    case "DECREASE":
      return { count: countState.count - 1 };
  }
};

const Parent2 = () => {
  const [countState, dispatchCountState] = useReducer(countReducer, { count: 0 });
  //   const [count, setCount] = useState(0);
  const increase = () => {
    // setCount(count + 1);
    dispatchCountState({ type: "INCREASE" });
  };

  const decrease = () => {
    // setCount(count - 1);
    dispatchCountState({ type: "DECREASE" });
  };

  const tryingToBeFunny = () => {
    countReducer({ count: countState.count }, { type: "INCREASE" });
  };

  return (
    <>
      <h1 className="centered">{countState.count}</h1>
      <div className="centered">
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>

        <button onClick={tryingToBeFunny}>Be Funny</button>
      </div>
    </>
  );
};

export default Parent2;
