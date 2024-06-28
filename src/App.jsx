/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "./components/header";
import Input from "./components/input";
import Card from "./components/card";
import Todolist from "./components/todolist";

function App() {
  let [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (todo) => {
    console.log(todo);
    setTodos(todos.filter((value) => value.id !== todo.id));
  };

  return (
    <div>
      <Header />

      <div>
        <div>
          <Input onCreateTodo={createTodo} />
        </div>
        <div className="mt-16">
          <Todolist todos={todos} onDeleteTodo={deleteTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
