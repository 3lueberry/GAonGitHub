import React, { useState } from "react";
import Button from "./Button";
import ErrorModal from "./ErrorModal";
import { Row, Col, Container, FormLabel, FormControl } from "react-bootstrap";

const AddTask = () => {
  const [error, setError] = useState(false);
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.length === 0) {
      setError(true);
    }
    setTask("");
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleModalOkay = () => {
    setError(false);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title="Error Encountered"
          message="There is an error with your input"
          okayClicked={handleModalOkay}
        ></ErrorModal>
      )}
      <Container>
        <form onSubmit={handleSubmit}>
          <Row className="justify-content-center">
            <Col md={2}>
              <FormLabel md={2} htmlFor="input-task">
                Task
              </FormLabel>
            </Col>
            <Col md={4}>
              <FormControl
                md={4}
                id="input-task"
                value={task}
                type="text"
                onChange={handleChange}
              ></FormControl>
            </Col>
            <Row>
              <Col>
                <Button className="col-md-6" type="submit">
                  Add Task
                </Button>
              </Col>
            </Row>
          </Row>
        </form>
      </Container>
    </>
  );
};

export default AddTask;
