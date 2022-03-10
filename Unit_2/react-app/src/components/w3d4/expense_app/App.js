import React, { useState } from "react";
import Bottom from "./components/Bottom";
import Top from "./components/Top";

const App = () => {
  const [expenseList, setExpenseList] = useState([]);
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="container">
      <div className="row">
        <h3>Add new expense</h3>
        <Top
          desc=""
          price="S$"
          date={today}
          submit={(item) => setExpenseList((prevState) => [...prevState, item])}
        />
      </div>
      <div className="row">
        <Bottom
          expenseList={expenseList}
          edit={(index, item) =>
            setExpenseList((prevState) => {
              prevState.splice(index, 1, item);
              return [...prevState];
            })
          }
          delete={(index) =>
            setExpenseList((prevState) => [...prevState.filter((d, i) => i !== index)])
          }
        />
      </div>
    </div>
  );
};

export default App;
