import React, { useReducer, useState } from "react";
import TodoItem from "./TodoItem";

const todosReducer = (todos, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...todos, createTodo(action.payload.name)];
    case "SET_COMPLETE":
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: true };
        }
        return todo;
      });
    case "REMOVE":
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
};

const createTodo = (name) => {
  return { id: Math.random(), name: name, complete: false };
};

const TodoList = () => {
  const [todos, dispatchTodos] = useReducer(todosReducer, []);
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchTodos({ type: "ADD_TODO", payload: { name: name } });
    setName("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleNameChange} />
        <button type="submit">Submit</button>
      </form>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            dispatchTodos={dispatchTodos}
            id={todo.id}
            name={todo.name}
            complete={todo.complete}
          />
        );
      })}
    </>
  );
};

export default TodoList;
