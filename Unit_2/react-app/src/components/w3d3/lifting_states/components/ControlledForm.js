import React, { Children, useState } from "react";
import Child2 from "./Child2.js";

const ControlledForm = () => {
  const initChildList = [
    { word: "Apple", number: 1 },
    { word: "Banana", number: 2 },
    { word: "Carrot", number: 3 },
  ];

  const [word, setWord] = useState("");
  const [number, setNumber] = useState("");
  const [childList, setChildList] = useState(initChildList);

  const handleWordChange = (e) => {
    setWord(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { word, number };

    setChildList((prevState) => {
      return [...prevState, newItem];
    });
    setWord("");
    setNumber("");
  };

  return (
    <>
      <form className="container" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-4">
            <label htmlFor="">Word</label>
          </div>
          <div className="col-sm-4">
            <input value={word} type="text" onChange={handleWordChange} />
          </div>

          <div className="col-sm-4">{word}</div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <label htmlFor="">Number</label>
          </div>
          <div className="col-sm-4">
            <input value={number} type="text" onChange={handleNumberChange} />
          </div>
          <div className="col-sm-4">{number}</div>
        </div>
        <button type="submit">Submit</button>
      </form>

      <Child2 childList={childList} />
    </>
  );
};

export default ControlledForm;
