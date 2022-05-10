import React, { useEffect, useRef, useState } from "react";

const StorePreviousVal = () => {
  const [string, setString] = useState("");
  const prevString = useRef("");

  useEffect(() => {
    prevString.current = string;
  });

  return (
    <>
      <input value={string} onChange={(e) => setString(e.target.value)} />
      <div>
        current {string} prevString {prevString.current}
      </div>
    </>
  );
};

export default StorePreviousVal;
