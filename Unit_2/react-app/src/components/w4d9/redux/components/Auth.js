import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../store/user"; //"../store/main";
import { otherActions } from "../store/other";
import { Container, Row, Col, FormLabel, FormControl, Button } from "react-bootstrap";

const Auth = () => {
  const dispatch = useDispatch();
  const storeAuth = useSelector((state) => state.user.auth);
  const storeUsername = useSelector((state) => state.user.username);

  const [username, setUsername] = useState();

  const loginUser = () => {
    dispatch(userActions.login(username));
  };

  const logoutUser = () => {
    dispatch(userActions.logout());
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  return (
    <Container>
      <Row>
        <Col md={4}>
          <FormLabel htmlFor="username">Username</FormLabel>
        </Col>
        <Col md={8}>
          <FormControl id="username" type="text" onChange={handleUsernameChange} />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Button onClick={loginUser} type="submit">
            Login
          </Button>
        </Col>
        <Col md={12}>
          <Button onClick={logoutUser} type="submit" variant="danger">
            Logout
          </Button>
        </Col>
      </Row>
      {storeAuth ? "logged in" : "logged out"}
      <br />
      {storeUsername}
    </Container>
  );
};

export default Auth;
