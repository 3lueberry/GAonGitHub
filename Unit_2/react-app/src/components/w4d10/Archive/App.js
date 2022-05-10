import React from "react";
import Parent from "./components/Parent";
import Other from "./components/Other";

function App() {
  return (
    <div className="container">
      <div className="row">
        <Parent />
      </div>
      <hr />
      <div className="row">
        <Other />
      </div>
    </div>
  );
}

export default App;
