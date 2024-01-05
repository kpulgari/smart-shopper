import React, { useEffect, useState } from "react";
import { useSearchContext } from "../contexts/SearchContext";
import "../styles/Cart.css";

interface CartItem {
  name: string;
  quantity: number;
  totalPrice: number;
  image: string;
}

export const Cart = () => {
  const [cartData, setCartData] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [itemAdded, setItemAdded] = useState(false);
  const { getCartData, removeCartItem } = useSearchContext();

  useEffect(() => {
    setCartData(getCartData());
  }, [getCartData]);

  useEffect(() => {
    if (getCartData().length > 0) {
      setItemAdded(true);
    } else {
      setItemAdded(false);
    }
  }, [getCartData().length]);

  const handleCartClick = () => {
    setCartOpen(!cartOpen);
  };

  const handleItemClick = (item: CartItem) => {
    removeCartItem(item);
  };

  return !cartOpen ? (
    <div
      className="bg-black transition-all duration-200 ease-in-out rounded-2xl items-center justify-center shadow-2xl shadow-black ml-8 lg:w-20 lg:h-20 h-12 w-12 flex cursor-pointer relative"
      onClick={() => handleCartClick()}
    >
      {" "}
      {!itemAdded ? null : (
        <span className="absolute lg:top-6 lg:right-8 right-5 top-4">
          <span className="animate-ping absolute inline-block h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-sky-400 opacity-75"></span>
          <span className="inline-block absolute rounded-full h-2 w-2 lg:h-3 lg:w-3 bg-sky-500"></span>
        </span>
      )}
      <img className="lg:w-8 lg:h-8 w-4 h-4 object-cover" src={"/cart.png"} />
    </div>
  ) : (
    <div className="transition-all duration-200 ease-in-out bg-black rounded-2xl shadow-2xl shadow-black ml-8 lg:h-[50vh] h-[45vh] overflow-y-hidden overflow-x-hidden">
      <div className="flex flex-col gap-4 m-4">
        <div className="flex items-center overflow-x-auto">
          <button
            className="bg-white h-6 w-6 rounded-md text-center font-bold items-center justify-center flex hover:bg-slate-200 "
            onClick={() => handleCartClick()}
          >
            <img src="/minimize.png" className="h-4 w-4"></img>
          </button>
          <span className="text-white font-bold lg:text-xl text-base flex-grow mr-4 text-center">
            Cart
          </span>
        </div>
        <div className="overflow-y-scroll lg:h-[38vh] h-[35vh]">
          {cartData.length === 0 ? (
            <div className="flex lg:h-60 h-48 justify-center items-center">
              <span className="text-black text-center rounded-xl text-sm lg:text-lg bg-white p-4 font-bold">
                Cart is empty. Add items by clicking on them.
              </span>
            </div>
          ) : (
            <div className="cart-scroll flex flex-col gap-y-4 mb-2 p-2 justify-center rounded-xl overflow-y-auto overflow-x-auto">
              {cartData.map((cartItem, index) => (
                <div
                  key={index}
                  className="w-full grid grid-cols-4 gap-2 text-sm lg:text-base bg-white p-2 rounded-xl items-center"
                  onClick={() =>
                    handleItemClick({
                      name: cartItem.name,
                      quantity: cartItem.quantity,
                      totalPrice: cartItem.totalPrice,
                      image: cartItem.image,
                    })
                  }
                >
                  <span className="col-span-1 font-bold">{cartItem.name}</span>
                  <span className="col-span-1 flex justify-center">
                    ({cartItem.quantity})
                  </span>
                  <span className="col-span-1 flex justify-center">
                    ${cartItem.totalPrice}
                  </span>
                  <div className="col-span-1 flex justify-end">
                    <img
                      className="w-12 h-12 object-cover rounded-xl"
                      src={cartItem.image}
                      alt={`Image ${index}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
