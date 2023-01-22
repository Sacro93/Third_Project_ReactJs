import { Button } from "bootstrap";
import React from "react";
import { useContext } from "react";
import { cartContext } from "../../storage/cartContext";

function CartContainer() {
  const { cart, removeItem, getTotalPriceincart,getTotalItemsInCart } = useContext(cartContext);

  return (
    <div>
      {cart.map((itemInCart) => (
        <div>
          <h1>{itemInCart.title}</h1>
          <h2>{itemInCart.price}</h2>
          <h4>{itemInCart.img}</h4>
      <button>X</button>
        </div>
      ))}
      <p>El total de tu compra es ${getTotalPriceincart()}</p>
    </div>
  );
}

export default CartContainer;
