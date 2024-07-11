import React, { useContext, useEffect, useState } from "react";
import Cartcontext from "../contexts/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(Cartcontext);
  const [hideAddtocart, setHideCart] = useState(false);
  useEffect(() => {
      setHideCart(window.location.pathname === "/cart");
  }, [window.location.pathname]);

  return (
    <div key={product.id} className="bg-white shadow-md p-4">
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <p className="text-gray-60">{product.description}</p>
      <img src={product.image} alt="" className="w-80 h-80 object-contain" />
      <p className="text-gray-800 font-semibold mt-2">
        Price: ${product.price}
      </p>
      <div>
        {!hideAddtocart === true ? (
          <button
            className="bg-blue-600 text-white p-3 rounded hover:bg-blue-400"
            onClick={() => {
              addToCart(product);
            }}
          >
            Add to cart
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
