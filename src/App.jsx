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

  return (
    <div>
      <Header />

      <div>
        <div>
          <Input onCreateTodo={createTodo} />
        </div>
        <div className="mt-16">
          <Todolist todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
