import { createContext, useEffect, useState } from "react";

export const cartContext = createContext({ cart: [] });

function CartProvider(props) {

  const [cart, setCart] = useState([]);
// let cart=[]
  const test = () => console.log("test");

  function addToCart(item) {
    let isInCart = cart.findIndex((itemInCart) => itemInCart.id === item.id);
    let newCart = cart.map((item) => item);
    // let cart([...cart,item])
    if (isInCart !== -1) {
      /* newCart[isInCart] */
      alert("Cuidado! item ya agregado");
    } else {
      newCart.push(item);
      setCart(newCart);
    }
  }
   function getTotalItemsInCart() {
    // reduce 👌

    let total = 5;
    // por Cada producto(for, forEach) -> total += producto.count
    return cart.length;
  }
//1.46 clase 10 
  return (
    //3. Retornamos el Provider del context con un value personalizado
    <cartContext.Provider
      value={{ cart, test, addToCart, getTotalItemsInCart }}
    >
      {/* 4. Renderizamos los children */}
      {props.children}
    </cartContext.Provider>
  );
}
export { CartProvider };
