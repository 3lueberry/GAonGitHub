import React, { useState, useEffect } from "react";
// import { createGlobalStyle } from "styled-components";
import Main from "./components/Main";
import StoreCurrentVal from "./components/StoreCurrentVal";
import StorePreviousVal from "./components/StorePreviousVal";

const App = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const GlobalStyle = createGlobalStyle`
  //   :root,
  //   body {
  //       width:${dimensions.width / 2}px;
  //       height:${dimensions.height / 2}px;
  //       font-size: 10px;
  //       font-family: Helvetica;
  //       line-height: 1.7;
  //       background: rgb(20, 20, 20);
  //       color: rgb(240, 240, 240);
  //   }

  //   * {
  //       margin: 0;
  //       padding: 0;
  //   }

  //   input[type=number]::-webkit-inner-spin-button,
  //   input[type=number]::-webkit-outer-spin-button {
  //       -webkit-appearance: none;
  //       margin: 0;
  // }`;

  return (
    <>
      {/* <GlobalStyle /> */}
      <Main />
      <StoreCurrentVal />
      <StorePreviousVal />
      Rendered at {dimensions.width} x {dimensions.height}
    </>
  );
};

export default App;
