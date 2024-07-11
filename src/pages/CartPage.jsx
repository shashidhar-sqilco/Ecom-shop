import React, { useContext } from "react";
import Cartcontext from "../contexts/CartContext";
import ProductCard from "../components/ProductCard";

export default function CartPage() {
  const { cart,setCart } = useContext(Cartcontext);
  const getTotalPrice = (cart) => {
    if (cart.length > 0) {
      return cart?.reduce((sum, curr) => sum + curr.price, 0);
    } else {
      return 0;
    }
  };
  if(cart.length===0){
    return (
      <div className="text-center flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl text-slate-800 font-semibold">
          There are no items in cart!
        </h1>
        <a href="/men" className="mt-10 text-xl font-semibold bg-slate-900 bg-opacity-50 p-4 rounded-lg ">Shop Now</a>
      </div>
    );
  }
  return (
    <div>
      <div className="grid grid-cols-3 gap-2">
        {cart.map((item) => {
          return <ProductCard product={item} />;
        })}
      </div>
      <div className="flex flex-col items-center justify-center min-h-[300px]">
        <h1 className=" text-4xl font-semibold">Order Summery</h1>
        <div>
          {cart.map((item) => {
            return (
              <p className="flex gap-3 items-center justify-between">
                <span>{item.title}</span>
                <span>------------</span>
                <span>${item.price}</span>
              </p>
            );
          })}
        </div>
        <hr className="border-2 border-gray-400 w-[80%]" />
        <div>
          <p className="flex gap-3 items-center justify-between">
            <span>Total Price</span>
            <span>------------</span>
            <span>${getTotalPrice(cart)}</span>
          </p>
          <button onClick={()=>{
            alert("Order Placed");
            setCart([]);
          }} className=" bg-green-700 text-white p-4 rounded">Buy now!</button>
        </div>
      </div>
    </div>
  );
}
