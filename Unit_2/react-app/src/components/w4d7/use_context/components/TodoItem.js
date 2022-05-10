import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const TodoItem = (props) => {
  const handleComplete = () => {
    props.dispatchTodos({ type: "SET_COMPLETE", payload: { id: props.id } });
  };

  const handleRemove = () => {
    props.dispatchTodos({ type: "REMOVE", payload: { id: props.id } });
  };
  return (
    <Container>
      <Row>
        <Col md={2}>{props.name}</Col>
        <Col md={2}>{props.complete ? "complete" : "incomplete"}</Col>
        <Col md={2}>
          <button onClick={handleComplete}>Complete</button>
        </Col>
        <Col md={2}>
          <button onClick={handleRemove}>Remove</button>
        </Col>
      </Row>
    </Container>
  );
};

export default TodoItem;
