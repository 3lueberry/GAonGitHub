import React from "react";

const Card = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-5">{props.word}</div>
        <div className="col-sm-5">{props.number}</div>
      </div>
    </div>
  );
};

export default Card;
