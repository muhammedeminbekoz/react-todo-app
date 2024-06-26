/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";

function Input(props) {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  function handleSubmit() {
    if (inputValue != "") {
      props.onCreateTodo(inputValue.trim());
    }
  }

  return (
    <div className="flex items-center justify-center mt-20 ">
      <input
        type="text"
        className="border ring-1 border-blue-500 p-2 rounded shadow-lg w-1/2 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 "
        placeholder="Enter your text here"
        onChange={handleInput}
      />
      {
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded-2xl h-11 ml-2 active:scale-95"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      }
    </div>
  );
}

export default Input;
