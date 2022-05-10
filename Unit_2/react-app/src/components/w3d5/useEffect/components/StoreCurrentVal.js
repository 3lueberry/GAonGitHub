import React, { useEffect, useRef, useState } from "react";

const StoreCurrentVal = () => {
  const [string, setString] = useState("");
  const renderCountRef = useRef(1);

  useEffect(() => {
    renderCountRef.current = renderCountRef.current + 1;
  });
  return (
    <>
      <input value={string} onChange={(e) => setString(e.target.value)} />
      <div>Render Count {renderCountRef.current}</div>
    </>
  );
};

export default StoreCurrentVal;
