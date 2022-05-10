import React from "react";
import { Col, Row } from "./components/bootstraps/Layout";

const App = () => {
  return (
    <>
      <Row className="row-component" id="row-1">
        <Col col="3" className="column" id="row1-col1">
          Row 1 - Col 1 | Size SM-3
        </Col>
        <Col col="4" className="column" id="row1-col2">
          Row 1 - Col 2 | Size SM-4
        </Col>
        <Col col="5" className="column" id="row1-col3">
          Row 1 - Col 3 | Size SM-5
        </Col>
      </Row>

      <Row className="row-component" id="row-2">
        <Col col="5" colSize="xl" className="column" id="row2-col1">
          Row 2 - Col 1 | Size XL-5
        </Col>
        <Col col="7" colSize="xl" className="column" id="row2-col2">
          Row 2 - Col 2 | Size XL-7
        </Col>
      </Row>
    </>
  );
};

export default App;
