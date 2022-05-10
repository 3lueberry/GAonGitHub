import React, { useContext } from "react";
import ChickenContext from "../context/ChickenContext";

const Child = () => {
  const chickenCtx = useContext(ChickenContext);
  return (
    <>
      <p>{chickenCtx.email}</p>
    </>
  );
};

export default Child;
