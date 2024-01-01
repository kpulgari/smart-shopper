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
  const { getCartData } = useSearchContext();

  useEffect(() => {
    setCartData(getCartData());
  }, [getCartData]);

  return (
    <div className="bg-black rounded-2xl shadow-2xl shadow-black ml-8 lg:h-[50vh] h-[45vh] overflow-x-hidden">
      <div className="flex flex-col gap-4 m-4">
        <span className="text-white font-bold lg:text-xl text-base mt-2 justify-center text-center">
          Cart
        </span>
        {cartData.length === 0 ? (
          <div className="flex lg:h-60 h-48 justify-center items-center">
            <span className="text-black text-center rounded-xl text-sm lg:text-lg bg-white p-4 font-bold">
              Cart is empty. Add items by clicking on them.
            </span>
          </div>
        ) : (
          <div className="cart-scroll flex flex-col gap-y-4 mb-2 p-2 justify-center items-center rounded-xl overflow-y-auto overflow-x-auto">
            {cartData.map((cartItem, index) => (
              <div
                key={index}
                className="w-full text-sm lg:text-base bg-white p-2 flex justify-between items-center rounded-xl"
              >
                <span className="font-bold"> {cartItem.name}</span>
                <span> ({cartItem.quantity})</span>
                <span> ${cartItem.totalPrice}</span>
                <img
                  className="w-12 h-12 object-cover rounded-xl"
                  src={cartItem.image}
                  alt={`Image ${index}`}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
