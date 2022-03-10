import React from "react";
import Button from "./Button";
import Expenses from "./Expenses";

const Bottom = (props) => {
  return (
    <>
      <h3>Expenses List</h3>
      <ul className="container">
        {props.expenseList.map((exp, i) => (
          <li className="row" key={i}>
            <Expenses {...exp} clicked={(item) => props.edit(i, item)} />
            <Button label="Delete" clicked={() => props.delete(i)} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Bottom;
