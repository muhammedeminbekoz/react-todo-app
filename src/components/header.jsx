/* eslint-disable no-unused-vars */
import React from "react";

function Header() {
  const scrollToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="sticky top-0 bg-blue-500 p-4 shadow-lg " onClick={scrollToUp}>
      <h1 className="text-white text-3xl font-bold flex justify-center m-5 ">
        Muhammed Emin Beköz To Do App
      </h1>
    </div>
  );
}

export default Header;
