import React from "react";

const StyledButton = () => {
  return <div></div>;
};

const Button = ({ id = "", styled = false, ...props }) => {
  return styled ? (
    <StyledButton {...props}>{props.children}</StyledButton>
  ) : (
    <button id={id} placeholder={props.placeholder}>
      {props.children}
    </button>
  );
};

export default Button;
