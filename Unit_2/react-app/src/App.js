import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import { Row, Col, Button } from "react-bootstrap";
// import logo from "./logo.svg";
// import App from "./components/w3d1/first-react/src/App";
// import App from "./components/w3d1/starter-code/src/App";
// import App from "./components/w3d1/todo-react/src/App";
// import App from "./components/w3d1/morning_lab/src/App";
// import App from "./components/w3d1/afternoon_lab/src/App";
// import App from "./components/w3d2/states/App";
// import App from "./components/w3d2/morning_lab/App";
// import App from "./components/w3d3/props/App";
// import App from "./components/w3d3/lifting_states/App";
// import App from "./components/w3d3/useRef_states/App";
// import App from "./components/w3d4/expense_app/App";
// import App from "./components/w3d5/useEffect/App";
// import App from "./components/w3d5/form_validation/App";
// import App from "./components/w3d5/expense_app/App";
// import App from "./components/w4d6/conditional_render/App";
// import App from "./components/w4d6/loading_spinner/App";
// import App from "./components/w4d7/use_context/App";
import App from "./components/w4d8/react_router/App";
// import App from "./components/w4d9/redux/App";
// import App from "./components/w4d10/Archive/App";

const GlobalStyle = createGlobalStyle`
:root,
body {
    /*font-size: 10px;
    font-family: Helvetica;
    line-height: 1.7;
    background: rgb(20, 20, 20);
    color: rgb(240, 240, 240);*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    height:${({ height }) => height}px;
    width:${({ width }) => width}px;
}

* {
    margin: 0;
    padding: 0;
}

#root{
  width:100%;
  height:100%;
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
}`;

function ReactApp() {
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

  return (
    <>
      <GlobalStyle height={dimensions.height} width={dimensions.width} />
      <App />
      {/* <Button id="test" placeholder="Place Holder">
        Test Button
      </Button> */}
      {/* <Row className="mx-0">
        <Button as={Col} variant="primary">
          Button #1
        </Button>
        <Button as={Col} variant="secondary" className="mx-2">
          Button #2
        </Button>
        <Button as={Col} variant="success">
          Button #3
        </Button>
      </Row> */}
    </>
  );
}

export default ReactApp;
