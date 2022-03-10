import React from "react";
import Parent from "./components/Parent";
import ControlledForm from "./components/ControlledForm";

const App = () => {
  return (
    <div className="container">
      <Parent />
      <ControlledForm />
    </div>
  );
};

export default App;
