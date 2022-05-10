import React, { useState, useEffect } from "react";
// import { createGlobalStyle } from "styled-components";

const Main = () => {
  const [clicked, setClicked] = useState(0);

  const handleClick = () => {
    setClicked(clicked + 1);
    console.log("clicked");
  };

  useEffect(() => {
    console.log("useEffect Render");
  });

  useEffect(() => {
    console.log("useEffect On mount & unmount");
  }, []);

  useEffect(() => {
    console.log("useEffect on State Change");

    return () => {
      if (clicked >= 10) setClicked(0);
    };
  }, [clicked]);

  return (
    <>
      <button onClick={handleClick}>Click!</button>
      <h2>{clicked}</h2>
    </>
  );
};

export default Main;
