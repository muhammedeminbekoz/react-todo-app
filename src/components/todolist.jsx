/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Card from "./card";

function Todolist(props) {
  console.log(props.todos);

  return (
    <div>
      {props.todos.map((value, index) => (
        <Card key={index} todo={value} />
      ))}
    </div>
  );
}

export default Todolist;
