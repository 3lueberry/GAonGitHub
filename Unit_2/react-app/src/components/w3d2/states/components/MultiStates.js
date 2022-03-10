import React, { useState } from "react";

const MultiStates = () => {
  const [duck, setDuck] = useState();
  const [swan, setSwan] = useState();
  const [dove, setDove] = useState();

  const handleDuckChange = (event) => {
    setDuck(event.target.value);
  };

  const handleSwanChange = (event) => {
    setSwan(event.target.value);
  };

  const handleDoveChange = (event) => {
    setDove(event.target.value);
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

      <h2>{duck}</h2>
      <h2>{swan}</h2>
      <h2>{dove}</h2>
    </div>
  );
};

export default MultiStates;
