import React from "react";
import Card from "./Card";

const TodoList = (props) => {
  let i = props.start;
  return (
    <>
      <div className="container">
        <div>This is the todo list.</div>
        <Card activity={`${i++}. Buy Groceries`} time="14:00" />
        <Card activity={`${i++}. Bathe the Dog`} time="15:30" />
        <Card activity={`${i++}. Buy Charger`} time="18:00" />
        <Card activity={`${i++}. Goto Bed`} time="21:00" />
      </div>
    </>
  );
};

export default TodoList;
