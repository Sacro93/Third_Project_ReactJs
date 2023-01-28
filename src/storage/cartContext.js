import { createContext, useEffect, useState } from "react";
import CartContainer from "../components/Cart/CartContainer";

export const cartContext = createContext({ cart: [] });

function CartProvider(props) {
  const [cart, setCart] = useState([]);
  // let cart=[]
  
  //problemas con cart no lee el objeto al crear un finalizar compra y se consologuea en CartContainer.jsx

  function addToCart(item) {
    let isInCart = cart.findIndex((itemInCart) => itemInCart.id === item.id);
    let newCart = cart.map((item) => item);

    if (isInCart !== -1) {
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
  function getTotalPriceincart() {
    let total=5
    return total;
  }
  return (
  
    <cartContext.Provider
      value={{ cart,  addToCart, getTotalItemsInCart,getTotalPriceincart }}>
      {props.children}
    </cartContext.Provider>
  );
}
export { CartProvider };
