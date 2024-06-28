/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";

function Card({ todo, deleteTodo }) {
  const [textState, setTextState] = useState("");

  function handleDoneClick() {
    textState == "" ? setTextState("line-through") : setTextState("");
  }
  function handleDeleteClick() {
    deleteTodo(todo);
  }

  return (
    <div className="flex items-center justify-center mt-5">
      <div className="border-2 rounded border-green-500 w-1/2 p-2 flex  justify-between items-center ">
        <span className={textState}> {todo.content} </span>
        <div className="flex space-x-2">
          <button className="p-1 text-xl active:scale-95 ">
            <MdEdit />
          </button>
          <button className="p-1 text-xl active:scale-95" onClick={handleDeleteClick}>
            <MdDelete />
          </button>
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded-2xl h-11 ml-2 active:scale-95"
        onClick={handleDoneClick}
      >
        Done
      </button>
    </div>
  );
}

export default Card;
