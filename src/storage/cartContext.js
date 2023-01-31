import { createContext, useEffect, useState, useContext } from "react";
import  {useDeepCopy}  from "../components/hooks/useDeepCopy";

export const cartContext = createContext({ cart: [] });

export function CartProvider(props) {
  const [cart, setCart] = useState([]);
  let newCart = useDeepCopy(cart)
  
  //problemas con cart no lee el objeto al crear un finalizar compra y se consologuea en CartContainer.jsx

  function addToCart(item) {
    let isInCart = cart.findIndex((itemInCart) => itemInCart.id === item.id);
    // let newCart = cart.map((item) => item);

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
  function removeItem(itemid) {}

  function clear() {
    //
  }
  return (
  
    <cartContext.Provider
      value={{ cart,  addToCart, getTotalItemsInCart,getTotalPriceincart,removeItem }}>
      {props.children}
    </cartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(cartContext);
}