import React, { useEffect, useState } from "react";
import "../styles/Filter.css";
import { useSearchContext } from "../contexts/SearchContext";

export const Filter = () => {
  const [orderByAsc, setOrderByAsc] = useState(false);
  const [orderByDesc, setOrderByDesc] = useState(false);
  const [orderByPriceAsc, setOrderByPriceAsc] = useState(false);
  const [orderByPriceDesc, setOrderByPriceDesc] = useState(false);
  const {
    sortByName,
    sortByPrice,
    applyResetFilter,
    sortByNameAndPrice,
    sortByPriceAndName,
    checkIsSearching,
  } = useSearchContext();

  const isSearching = checkIsSearching();

  useEffect(() => {
    if (isSearching) {
      setOrderByAsc(false);
      setOrderByDesc(false);
      setOrderByPriceAsc(false);
      setOrderByPriceDesc(false);
    }
  }, [isSearching]);

  const buttons = [
    {
      label: "A-Z",
      state: orderByAsc,
      oppositeState: orderByDesc,
      onClick: () => {
        if (!orderByDesc && !orderByAsc) {
          setOrderByAsc(true);
          if (orderByPriceAsc || orderByPriceDesc) {
            sortByPriceAndName(orderByPriceAsc, true);
          } else {
            sortByName(true);
          }
        } else if (orderByAsc) {
          setOrderByAsc(false);
          if (!orderByPriceAsc && !orderByPriceDesc) {
            applyResetFilter();
          } else if (orderByPriceAsc) {
            sortByPrice(true);
          } else {
            sortByPrice(false);
          }
        } else if (orderByDesc) {
          setOrderByAsc(true);
          setOrderByDesc(false);
          if (orderByPriceAsc || orderByPriceDesc) {
            sortByPriceAndName(orderByPriceAsc, true);
          } else {
            sortByName(true);
          }
        }
      },
    },
    {
      label: "Z-A",
      state: orderByDesc,
      oppositeState: orderByAsc,
      onClick: () => {
        if (!orderByDesc && !orderByAsc) {
          setOrderByDesc(true);
          if (orderByPriceAsc || orderByPriceDesc) {
            sortByPriceAndName(orderByPriceAsc, false);
          } else {
            sortByName(false);
          }
        } else if (orderByDesc) {
          setOrderByDesc(false);
          if (!orderByPriceAsc && !orderByPriceDesc) {
            applyResetFilter();
          } else if (orderByPriceAsc) {
            sortByPrice(true);
          } else {
            sortByPrice(false);
          }
        } else if (orderByAsc) {
          setOrderByAsc(false);
          setOrderByDesc(true);
          if (orderByPriceAsc || orderByPriceDesc) {
            sortByPriceAndName(orderByPriceAsc, false);
          } else {
            sortByName(false);
          }
        }
      },
    },
    {
      label: "Cheapest",
      state: orderByPriceAsc,
      oppositeState: orderByPriceDesc,
      onClick: () => {
        if (!orderByPriceDesc && !orderByPriceAsc) {
          setOrderByPriceAsc(true);
          if (orderByAsc || orderByDesc) {
            sortByNameAndPrice(true, orderByAsc);
          } else {
            sortByPrice(true);
          }
        } else if (orderByPriceAsc) {
          setOrderByPriceAsc(false);
          if (!orderByAsc && !orderByDesc) {
            applyResetFilter();
          } else if (orderByAsc) {
            sortByName(true);
          } else {
            sortByName(false);
          }
        } else if (orderByPriceDesc) {
          setOrderByPriceAsc(true);
          setOrderByPriceDesc(false);
          if (orderByAsc || orderByDesc) {
            sortByNameAndPrice(true, orderByAsc);
          } else {
            sortByPrice(true);
          }
        }
      },
    },
    {
      label: "Priciest",
      state: orderByPriceDesc,
      oppositeState: orderByPriceAsc,
      onClick: () => {
        if (!orderByPriceDesc && !orderByPriceAsc) {
          setOrderByPriceDesc(true);
          if (orderByAsc || orderByDesc) {
            sortByNameAndPrice(false, orderByAsc);
          } else {
            sortByPrice(false);
          }
        } else if (orderByPriceDesc) {
          setOrderByPriceDesc(false);
          if (!orderByAsc && !orderByDesc) {
            applyResetFilter();
          } else if (orderByAsc) {
            sortByName(true);
          } else {
            sortByName(false);
          }
        } else if (orderByPriceAsc) {
          setOrderByPriceAsc(false);
          setOrderByPriceDesc(true);
          if (orderByAsc || orderByDesc) {
            sortByNameAndPrice(false, orderByAsc);
          } else {
            sortByPrice(false);
          }
        }
      },
    },
  ];

  return (
    <div className="bg-black rounded-2xl shadow-2xl shadow-black ml-8 mb-4 overflow-x-hidden">
      <div className="flex flex-col gap-4 m-4">
        <div className="text-white flex justify-center items-center w-full h-fit font-bold lg:text-xl text-base ">
          Filters
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-4 gap-3 mb-4 overflow-hidden px-2 justify-center ">
          {buttons.map((button, index) => (
            <div
              key={index}
              className={`h-fit w-full lg:text-lg text-sm flex justify-center items-center cursor-pointer rounded-2xl transition duration-200 ease-in-out ${
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
