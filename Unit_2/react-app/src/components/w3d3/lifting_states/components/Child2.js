import React from "react";
import Card from "./Card";

const Child2 = (props) => {
  return (
    <>
      <div className="container">
        <h1>Todo List</h1>
        {props.childList.map((item) => (
          <Card word={item.word} number={item.number} key={Math.random()} />
        ))}
      </div>
    </>
  );
};

export default Child2;
