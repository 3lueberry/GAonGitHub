import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [theData, setTheData] = useState("");

  const handleChildData = (enteredData) => {
    console.log(JSON.stringify(enteredData));
    setTheData(enteredData);
  };

  const handleOnSubmit = (e) => {
    console.log(e.target.value);
    setTheData(JSON.parse(e.target.value));
  };

  return (
    <>
      <h1>{theData.country}</h1>
      <Child onSave={handleChildData} clicked={handleOnSubmit} />
    </>
  );
};

export default Parent;
