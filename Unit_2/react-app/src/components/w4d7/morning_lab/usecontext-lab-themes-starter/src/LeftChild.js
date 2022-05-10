import React from "react";
import LeftGrandChild from './LeftGrandChild'

export default function LeftChild() {

  return (
    <div>
      Left Child
      <LeftGrandChild />
    </div>
  );
}
