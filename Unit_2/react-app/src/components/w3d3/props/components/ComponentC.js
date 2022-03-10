import React from "react";
import ComponentD from "./ComponentD";

const ComponentC = (props) => {
  return (
    <>
      <ComponentD one={props.chicken} two={props.duck} three={props.goat} />
    </>
  );
};

export default ComponentC;
