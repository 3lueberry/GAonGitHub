import React from "react";
import "./Card.css";

const Card = (props) => {
  console.log(props);
  return (
    <>
      <div className="container">
        <div className="row div-border">
          <div className="col-sm-5">{props.activity}</div>
          <div className="col-sm-5">{props.time}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
