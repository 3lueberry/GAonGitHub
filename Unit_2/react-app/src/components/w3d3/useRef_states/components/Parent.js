import React, { useState, useRef } from "react";

const Parent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usernameRef = useRef();

  const focus = () => {
    usernameRef.current.focus();
  };

  return (
    <>
      <div>
        <label>username</label>
        <input ref={usernameRef} value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={focus}>Submit</button>
    </>
  );
};

export default Parent;
