import React from "react";
import UseCompare from "./hooks/UseCompare";

const App = () => {
  const arr1 = "abc".split("");
  const arr2 = "abc".split("");

  const answer = UseCompare(arr1, arr2);
  return <h2>{answer ? "SAME" : "DIFFERENT"}</h2>;
};

export default App;
