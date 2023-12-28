import React, { useState } from "react";
import "../styles/Filter.css";

export const Filter = () => {
  const [orderByAsc, setOrderByAsc] = useState(false);
  const [orderByDesc, setOrderByDesc] = useState(false);
  const [orderByPriceAsc, setOrderByPriceAsc] = useState(false);
  const [orderByPriceDesc, setOrderByPriceDesc] = useState(false);

  const buttons = [
    {
      label: "A-Z",
      state: orderByAsc,
      oppositeState: orderByDesc,
      onClick: () => {
        if (!orderByDesc || orderByAsc) {
          setOrderByAsc(!orderByAsc);
          setOrderByDesc(false);
        } else {
          setOrderByDesc(false);
          setOrderByAsc(true);
        }
      },
    },
    {
      label: "Z-A",
      state: orderByDesc,
      oppositeState: orderByAsc,
      onClick: () => {
        if (!orderByAsc || orderByDesc) {
          setOrderByDesc(!orderByDesc);
          setOrderByAsc(false);
        } else {
          setOrderByAsc(false);
          setOrderByDesc(true);
        }
      },
    },
    {
      label: "Cheapest",
      state: orderByPriceAsc,
      oppositeState: orderByPriceDesc,
      onClick: () => {
        if (!orderByPriceDesc || orderByPriceAsc) {
          setOrderByPriceAsc(!orderByPriceAsc);
          setOrderByPriceDesc(false);
        } else {
          setOrderByPriceDesc(false);
          setOrderByPriceAsc(true);
        }
      },
    },
    {
      label: "Priciest",
      state: orderByPriceDesc,
      oppositeState: orderByPriceAsc,
      onClick: () => {
        if (!orderByPriceAsc || orderByPriceDesc) {
          setOrderByPriceDesc(!orderByPriceDesc);
          setOrderByPriceAsc(false);
        } else {
          setOrderByPriceAsc(false);
          setOrderByPriceDesc(true);
        }
      },
    },
  ];

  return (
    <div className="bg-black rounded-2xl shadow-2xl shadow-black ml-4 mb-4 overflow-x-hidden">
      <div className="flex flex-col gap-4 m-4">
        <div className="text-white flex justify-center items-center w-full h-fit font-bold text-xl">
          Filters
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mb-4 overflow-hidden px-2 justify-center ">
          {buttons.map((button, index) => (
            <div
              key={index}
              className={`h-12 w-full flex justify-center items-center cursor-pointer rounded-2xl font-bold transition duration-200 ease-in-out ${
                button.state ? "bg-slate-500 text-white " : ""
              } ${
                button.oppositeState ? "bg-slate-200 text-slate-400  " : ""
              } ${
                !button.state && !button.oppositeState
                  ? "bg-white hover:bg-slate-300 "
                  : ""
              }`}
              onClick={button.onClick}
            >
              <label
                htmlFor={`orderByPriceDesc-${index}`}
                className="m-2 cursor-pointer"
              >
                {button.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
