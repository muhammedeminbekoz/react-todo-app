/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Card from "./card";

function Todolist(props) {
  return (
    <div>
      {props.todos.map((value, index) => (
        <Card
          key={index}
          todo={value}
          deleteTodo={props.onDeleteTodo}
          editable={props.onEditable}
          setUpdateContent={props.setUpdateContent}
          setUpdateId={props.setUpdateId}
        />
      ))}
    </div>
  );
}

export default Todolist;
