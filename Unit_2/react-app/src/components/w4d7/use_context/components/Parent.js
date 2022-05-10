import React, { useContext } from "react";
import ChickenContext from "../context/ChickenContext";
import { Row, Col, Button } from "react-bootstrap";

const Parent = () => {
  const chickenCtx = useContext(ChickenContext);
  console.log(chickenCtx);

  const handleButtonClick = () => {
    chickenCtx.setEmail("john.doe@someemail.com");
  };

  return (
    <>
      <Row>
        <Col sm={4}>
          <p>{chickenCtx.email}</p>
        </Col>
        <Col sm={4}>
          <Button onClick={handleButtonClick}>Chicken Me!</Button>
        </Col>
      </Row>
    </>
  );
};

export default Parent;
