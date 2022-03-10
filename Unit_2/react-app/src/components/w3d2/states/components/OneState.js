import React, { useState } from "react";

const MultiStates = () => {
  const [inputs, setInputs] = useState({ duck: "", swan: "", dove: "" });

  const handleDuckChange = (event) => {
    setInputs((prevDuck) => {
      return { ...prevDuck, duck: event.target.value };
    });
  };

  const handleSwanChange = (event) => {
    setInputs((prevSwan) => {
      return { ...prevSwan, swan: event.target.value };
    });
  };

  const handleDoveChange = (event) => {
    setInputs((prevDove) => {
      return { ...prevDove, dove: event.target.value };
    });
  };

  return (
    <div className="container">
      <h1>Input Form</h1>
      <div className="row">
        <label htmlFor="duck-input" className="col-sm-4">
          Duck
        </label>
        <input id="duck-input" onChange={handleDuckChange} className="col-sm-8" type="text" />
      </div>
      <div className="row">
        <label htmlFor="swan-input" className="col-sm-4">
          Swan
        </label>
        <input id="swan-input" onChange={handleSwanChange} className="col-sm-8" type="text" />
      </div>
      <div className="row">
        <label htmlFor="dove-input" className="col-sm-4">
          Dove
        </label>
        <input id="dove-input" onChange={handleDoveChange} className="col-sm-8" type="text" />
      </div>

      <h2>{`${[...inputs]}`}</h2>
    </div>
  );
};

export default MultiStates;
