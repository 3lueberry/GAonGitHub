import React, { useState } from "react";

const Parent = () => {
  const [text, setText] = useState(false);

  const handleClick = () => {
    setText(true);
  };

  return (
    <div className="container">
      <h2>Parent Component</h2>
      {!text && <p>Original text</p>}
      {text && <p>After button click</p>}

      <button onClick={handleClick}>Change text</button>
    </div>
  );
};

export default Parent;
