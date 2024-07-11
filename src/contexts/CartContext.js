import { useNavigate } from "react-router-dom";

const { createContext, useState } = require("react");

const Cartcontext=createContext();

export const CartContextProvider=({children})=>{
    const [cart,setCart]=useState([]);
    const addToCart=(product)=>{
        setCart([...cart,product]);
        alert(`${product?.title} added to cart successfully!`)
    }
    return (
      <Cartcontext.Provider value={{ cart, setCart, addToCart }}>
        {children}
      </Cartcontext.Provider>
    );
}

export default Cartcontext;