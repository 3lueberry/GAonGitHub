import React, { useState } from "react";

const FormInput = (props) => {
  //   const [value, setValue] = useState(props.value);

  //   const focus = (e) => {
  //     props.inputRef.current.focus();
  //   };

  return (
    <input
      type="text"
      name={props.name}
      placeholder={props.placeHolder}
      ref={props.inputRef}
      value={props.value}
      //   onChange={(e) => setValue(e.target.value)}
      //   onBlur={props.handleChange}
      //   onFocus={focus}
      onChange={props.handleChange}
      style={{ width: "100%" }}
    />
  );
};

export default FormInput;
