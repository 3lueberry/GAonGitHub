import React from "react";

const Row = ({ className = "", id = "", align = "center", children, ...props }) => {
  switch (align) {
    case "top":
    case "header":
      align = "align-items-start";
      break;

    case "bottom":
    case "footer":
      align = "align-items-end";
      break;

    default:
      align = "align-items-center";
      break;
  }
  return (
    <div className="container" id={id}>
      <div className={`row ${align} ${className}`}>{children}</div>
    </div>
  );
};

const Col = ({
  className = "",
  colSize = "sm",
  col = "1",
  id = "",
  align = "center",
  children,
  ...props
}) => {
  switch (align) {
    case "top":
    case "header":
      align = "align-self-start";
      break;

    case "bottom":
    case "footer":
      align = "align-self-end";
      break;

    default:
      align = "align-self-center";
      break;
  }
  return (
    <div className={`col-${colSize}-${col} ${align} ${className}`} id={id}>
      {children}
    </div>
  );
};

export { Row, Col };
