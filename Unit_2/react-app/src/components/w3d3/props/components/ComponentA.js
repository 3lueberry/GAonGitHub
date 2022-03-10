import React from "react";
import ComponentC from "./ComponentC";

const ComponentA = () => {
  const donkey = "A",
    horse = "B",
    goat = "C";
  return (
    <>
      <ComponentC chicken={donkey} duck={horse} goat={goat} />
    </>
  );
};

export default ComponentA;
