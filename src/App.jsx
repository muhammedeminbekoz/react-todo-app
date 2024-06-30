/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "./components/header";
import Input from "./components/input";
import Card from "./components/card";
import Todolist from "./components/todolist";

function App() {
  let [todos, setTodos] = useState([]);
  const [editable, setEditable] = useState(false);
  const [newContent, setNewContet] = useState(" ");
  const [updateId, setUpdateId] = useState();
  const [updateContent, setUpdateContent] = useState();

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (todo) => {
    setTodos(todos.filter((value) => value.id !== todo.id));
  };

  const onEditable = () => {
    setEditable(editable == false ? true : false);
  };

  const updateTodo = (newContent) => {
    todos.filter((value) => {
      return value.id == updateId ? (value.content = newContent) : updateContent;
    });
  };

  return (
    <div>
      <Header />

      <div>
        <div>
          <Input
            onCreateTodo={createTodo}
            onUpdateTodo={updateTodo}
            editable={editable}
            newContent={newContent}
            setNewContent={setNewContet}
            onEditable={onEditable}
          />
        </div>
        <div className="mt-16">
          <Todolist
            todos={todos}
            onDeleteTodo={deleteTodo}
            onUpdateTodo={updateTodo}
            onEditable={onEditable}
            setUpdateContent={setUpdateContent}
            setUpdateId={setUpdateId}
            // updateContet={updateContent}
            // updateId={updateId}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
