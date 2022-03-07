import React from "react";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container-fluid">
      <TodoList start={1} />
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
