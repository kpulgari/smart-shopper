import React from "react";
import { SearchBar } from "./SearchBar";

export const Header: React.FC = () => {
  const handleCheckout = () => {
    console.log("Checkout clicked");
  };

  return (
    <div className="sticky col-span-3 h-20 top-0 left-0 flex justify-between items-center bg-cyan-400">
      <span className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r bg-white mx-4">
        SmartShopper
      </span>
      <SearchBar></SearchBar>
      <button
        className="bg-cyan-600 rounded-lg px-2 mx-4 hover:bg-cyan-800 h-8 text-white font-bold"
        onClick={handleCheckout}
      >
        Checkout
      </button>
    </div>
  );
};
