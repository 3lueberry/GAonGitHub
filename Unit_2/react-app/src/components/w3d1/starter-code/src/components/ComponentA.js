import React from "react";
import PropTypes from "prop-types";
import ComponentD from "./ComponentD";
import ComponentE from "./ComponentE";

const ComponentA = (props) => {
  return (
    <>
      <div className="div-border container">
        <h1>Component A</h1>
        <div className="row">
          <div className="col-sm-6">
            <ComponentD />
          </div>
          <div className="col-sm-6">
            <ComponentE />
          </div>
        </div>
      </div>
    </>
  );
};

ComponentA.propTypes = {};

export default ComponentA;
