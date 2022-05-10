import React, { useState } from "react";
import Parent from "./components/Parent";
import Child from "./components/Child";
import ChickenContext from "./context/ChickenContext";
import { Container } from "react-bootstrap";
import Parent2 from "./components/Parent2";
import TodoList from "./components/TodoList";

const App = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();

  return (
    <>
      <ChickenContext.Provider value={{ username, setUsername, email, setEmail }}>
        <Container>
          <h2>Parent:</h2>
          <Parent />
          <h2>Child:</h2>
          <Child />
        </Container>
      </ChickenContext.Provider>

      <Container>
        <Parent2 />
      </Container>

      <Container>
        <TodoList />
      </Container>
    </>
  );
};

export default App;
