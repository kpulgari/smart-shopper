import React, { useState } from "react";
import "../styles/Filter.css";

export const Filter = () => {
  const [orderByAsc, setOrderByAsc] = useState(false);
  const [orderByDesc, setOrderByDesc] = useState(false);
  const [orderByPriceAsc, setOrderByPriceAsc] = useState(false);
  const [orderByPriceDesc, setOrderByPriceDesc] = useState(false);

  const handleOrderByAscClick = () => {
    if (!orderByDesc) {
      setOrderByAsc(!orderByAsc);
    }
  };

  const handleOrderByDescClick = () => {
    if (!orderByAsc) {
      setOrderByDesc(!orderByDesc);
    }
  };

  const handleOrderByPriceAscClick = () => {
    if (!orderByPriceDesc) {
      setOrderByPriceAsc(!orderByPriceAsc);
    }
  };

  const handleOrderByPriceDescClick = () => {
    if (!orderByPriceAsc) {
      setOrderByPriceDesc(!orderByPriceDesc);
    }
  };

  return (
    <div className="bg-cyan-100 rounded-lg ml-4 mb-4 overflow-x-hidden">
      <div className="flex flex-col gap-4 m-4">
        <div className="bg-white h-12 flex justify-center items-center w-full rounded-lg font-bold text-xl">
          Filters
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 overflow-hidden px-2 justify-center ">
          <div
            className={`bg-white h-16 w-full flex justify-center items-center rounded-lg p-4 font-bold m-0 transition duration-200 ease-in-out cursor-pointer ${
              orderByAsc
                ? "bg-cyan-500 text-white"
                : "hover:bg-cyan-300 hover:text-white"
            } ${
              orderByDesc ? "bg-slate-200 text-slate-400 cursor-default " : ""
            }`}
            onClick={handleOrderByAscClick}
          >
            <label
              htmlFor="orderByPriceDesc"
              className={`m-2 cursor-pointer ${
                orderByDesc ? "cursor-default " : ""
              }`}
            >
              A-Z
            </label>
          </div>
          <div
            className={`bg-white h-16 w-full flex justify-center items-center rounded-lg p-4 font-bold m-0 transition duration-200 ease-in-out cursor-pointer ${
              orderByDesc
                ? "bg-cyan-500 text-white"
                : "hover:bg-cyan-300 hover:text-white"
            } ${
              orderByAsc ? "bg-slate-200 text-slate-400 cursor-default " : ""
            }`}
            onClick={handleOrderByDescClick}
          >
            <label
              htmlFor="orderByPriceDesc"
              className={`m-2 cursor-pointer ${
                orderByAsc ? "cursor-default " : ""
              }`}
            >
              Z-A
            </label>
          </div>
          <div
            className={`bg-white h-16 w-full flex justify-center items-center rounded-lg p-4 font-bold m-0 transition duration-200 ease-in-out cursor-pointer ${
              orderByPriceAsc
                ? "bg-cyan-500 text-white"
                : "hover:bg-cyan-300 hover:text-white"
            } ${
              orderByPriceDesc
                ? "bg-slate-200 text-slate-400 cursor-default "
                : ""
            }`}
            onClick={handleOrderByPriceAscClick}
          >
            <label
              htmlFor="orderByPriceDesc"
              className={`m-2 cursor-pointer ${
                orderByPriceDesc ? "cursor-default " : ""
              }`}
            >
              Cheapest
            </label>
          </div>
          <div
            className={`bg-white h-16 w-full flex justify-center items-center rounded-lg p-4 font-bold m-0 transition duration-200 ease-in-out cursor-pointer ${
              orderByPriceDesc
                ? "bg-cyan-500 text-white"
                : "hover:bg-cyan-300 hover:text-white"
            } ${
              orderByPriceAsc
                ? "bg-slate-200 text-slate-400 cursor-default "
                : ""
            }`}
            onClick={handleOrderByPriceDescClick}
          >
            <label
              htmlFor="orderByPriceDesc"
              className={`m-2 cursor-pointer ${
                orderByPriceAsc ? "cursor-default " : ""
              }`}
            >
              Priciest
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
