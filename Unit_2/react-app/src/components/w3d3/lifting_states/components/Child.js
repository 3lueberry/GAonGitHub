import React from "react";

const Child = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const childData = { country: "Singapore" };
    props.onSave(childData);
  };
  return (
    <>
      <form className="container" onSubmit={handleSubmit}>
        <button type="submit">Lift State</button>
        <button type="button" value='{"country":"Asia"}' onClick={props.clicked}>
          Lift State 2
        </button>
      </form>
    </>
  );
};

export default Child;
