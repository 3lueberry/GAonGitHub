import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import ReactApp from "./App";
import store from "./components/w4d9/redux/store/main";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";

// ReactDOM.render(
//   <React.StrictMode>
//     <ReactApp />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <BrowserRouter>
//     <ReactApp />
//   </BrowserRouter>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ReactApp />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
