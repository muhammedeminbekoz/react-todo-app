/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";

function Card() {
  return (
    <div className="flex items-center justify-center mt-5">
      <div className="border-2 rounded border-green-500 w-1/2 p-2 flex  justify-between items-center ">
        <span className="">Merhaba</span>
        <div className="flex space-x-2">
          <button className="p-1 text-xl active:scale-95 ">
            <MdEdit />
          </button>
          <button className="p-1 text-xl active:scale-95 ">
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
