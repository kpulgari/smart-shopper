import React from "react";
import { SearchBar } from "./SearchBar";

export const Header: React.FC = () => {
  const handleCheckout = () => {
    console.log("Checkout clicked");
  };

  return (
    <div className="sticky top-0 z-50 h-20 flex justify-between items-center bg-black ">
      <span className="font-bold text-3xl mx-4 bg-clip-text text-transparent bg-white">
        SmartShopper
      </span>
      <SearchBar></SearchBar>
      <button
        className="bg-white rounded-xl px-2 mx-4 h-8 text-black font-bold"
        onClick={handleCheckout}
      >
        Checkout
      </button>
    </div>
  );
};
