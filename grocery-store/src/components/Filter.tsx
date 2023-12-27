import React, { useState } from "react";
import "../styles/Filter.css";

export const Filter = () => {
  const [orderByAsc, setOrderByAsc] = useState(false);
  const [orderByDesc, setOrderByDesc] = useState(false);
  const [orderByPriceAsc, setOrderByPriceAsc] = useState(false);
  const [orderByPriceDesc, setOrderByPriceDesc] = useState(false);

  const handleOrderByAscClick = () => {
    console.log(orderByAsc, orderByDesc, orderByPriceAsc, orderByPriceDesc);
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
            className={`h-16 w-full flex justify-center items-center rounded-lg p-4 font-bold m-0 transition duration-200 ease-in-out ${
              orderByAsc ? "bg-cyan-500 text-white cursor-pointer" : ""
            } ${
              orderByDesc ? "bg-slate-200 text-slate-400 cursor-default " : ""
            } ${
              !orderByAsc && !orderByDesc
                ? "bg-white hover:bg-cyan-300 cursor-pointer"
                : ""
            }`}
            onClick={handleOrderByAscClick}
          >
            <label
              htmlFor="orderByPriceDesc"
              className={`m-2 ${
                orderByDesc ? "cursor-default " : "cursor-pointer"
              }`}
            >
              A-Z
            </label>
          </div>
          <div
            className={`h-16 w-full flex justify-center items-center rounded-lg p-4 font-bold m-0 transition duration-200 ease-in-out ${
              orderByDesc ? "bg-cyan-500 text-white cursor-pointer" : ""
            } ${
              orderByAsc ? "bg-slate-200 text-slate-400 cursor-default " : ""
            } ${
              !orderByAsc && !orderByDesc
                ? "bg-white hover:bg-cyan-300 cursor-pointer"
                : ""
            }`}
            onClick={handleOrderByDescClick}
          >
            <label
              htmlFor="orderByPriceDesc"
              className={`m-2 ${
                orderByAsc ? "cursor-default " : "cursor-pointer"
              }`}
            >
              Z-A
            </label>
          </div>
          <div
            className={`h-16 w-full flex justify-center items-center rounded-lg p-4 font-bold m-0 transition duration-200 ease-in-out ${
              orderByPriceAsc ? "bg-cyan-500 text-white cursor-pointer" : ""
            } ${
              orderByPriceDesc
                ? "bg-slate-200 text-slate-400 cursor-default "
                : ""
            } ${
              !orderByPriceAsc && !orderByPriceDesc
                ? "bg-white hover:bg-cyan-300 cursor-pointer"
                : ""
            }`}
            onClick={handleOrderByPriceAscClick}
          >
            <label
              htmlFor="orderByPriceDesc"
              className={`m-2 ${
                orderByPriceDesc ? "cursor-default " : "cursor-pointer"
              }`}
            >
              Cheapest
            </label>
          </div>
          <div
            className={`h-16 w-full flex justify-center items-center rounded-lg p-4 font-bold m-0 transition duration-200 ease-in-out ${
              orderByPriceDesc ? "bg-cyan-500 text-white cursor-pointer" : ""
            } ${
              orderByPriceAsc
                ? "bg-slate-200 text-slate-400 cursor-default "
                : ""
            } ${
              !orderByPriceDesc && !orderByPriceAsc
                ? "bg-white hover:bg-cyan-300 cursor-pointer"
                : ""
            }`}
            onClick={handleOrderByPriceDescClick}
          >
            <label
              htmlFor="orderByPriceDesc"
              className={`m-2 ${
                orderByPriceAsc ? "cursor-default " : "cursor-pointer"
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
