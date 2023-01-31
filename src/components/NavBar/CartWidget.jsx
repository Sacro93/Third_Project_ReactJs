import React, { useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import { CartProvider } from "../../storage/cartContext";





function CartWidget() {
  const contexto = useContext(cartContext);
  return (
    <>
      {contexto.getTotalItemsInCart() >= 1 ? (
        <>
          <span>🛒</span>
          <span>{contexto.getTotalItemsInCart()}</span>
        </>
      ) : (
        <>
          <span>🛒</span>
        </>
      )}
    </>
  );
      }
export default CartWidget;









