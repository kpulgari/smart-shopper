import React from "react";

export const Header = () => {
  return (
    <div className="sticky col-span-3 h-20 top-0 left-0 flex justify-between items-center bg-cyan-400">
      <span className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r bg-white mx-4">
        SmartShopper
      </span>
      <div className="h-8 flex items-center col-start-2 col-span-2 rounded-lg m-4 justify-center w-1/2">
        <input
          type="text"
          className="rounded-lg mx-4 px-4 w-3/4 h-full"
          placeholder="Search"
        />
        <button className="bg-cyan-600 rounded-lg m-4 hover:bg-cyan-800 font-bold font-s px-4 h-full">
          🤖
        </button>
      </div>
      <button className="bg-cyan-600 rounded-lg px-2 mx-4 hover:bg-cyan-800 h-8 text-white font-bold">
        Checkout
      </button>
    </div>
  );
};
