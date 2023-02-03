import { createContext, useEffect, useState, useContext } from "react";
import { useDeepCopy } from "../components/hooks/useDeepCopy";


export const cartContext = createContext({ cart: [] });

export function CartProvider(props) {
  // cart tiene elementos con id y cantidad
  const [cart, setCart] = useState([]);
  let newCart = useDeepCopy(cart);

  

  function addToCart(product) {
    const index = cart.findIndex(
      (itemInCart) => itemInCart.product.id === product.id
    );
    if (index === -1) {
      newCart.push({ product, count: 1 });
    } else {
    
      const itemInCart = newCart[0];
      itemInCart.count++;
    }

    setCart(newCart);
  }

  function getTotalItemsInCart() {
    let total = 0;
    for (let i = 0; i < newCart.length; i++) {
      const element = newCart[i];
      total = total + element.count;
    }

    return total;
  }

  function getTotalPriceInCart() {
    let total = 0;
    for (let i = 0; i < newCart.length; i++) {
      const element = newCart[i];
      total = total + element.product.price * element.count;
    }

    return total;
  }

  function removeItem(itemId) {
    const index = newCart.findIndex((item) => item.product.id === itemId);
    if (index !== -1) {
      const item = newCart[index];
      if (item.count === 1) {
        newCart.splice(index, 1);
      } else {
        item.count--;
      }
    }

    setCart(newCart);
  }

  function clear() {
    setCart([]);
  }

  function getCountByItem(itemId) {
    const index = newCart.findIndex((item) => item.product.id === itemId);
    if (index !== -1) {
      const item = newCart[index];
      return item.count
    }
    return 0;
  }

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        getTotalItemsInCart,
        getTotalPriceInCart,
        removeItem,
        clear,
        getCountByItem,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(cartContext);
}
