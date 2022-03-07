import React from "react";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <ComponentA />
        </div>
        <div className="col-sm-8">
          <ComponentB />
        </div>
      </div>
    </div>
  );
}

export default App;

// class ReactClass extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>GA SEI-35</h2>
//       </div>
//     );
//   }
// }
