import Button from "../button/Button";
import React from "react";
import { useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import { createOrder } from "../../services/firebase";

function CartContainer() {
  const { cart, removeItem, getTotalPriceincart,getTotalItemsInCart } = useContext(cartContext);

  function handleCheckout(evt){
    const items=cart.map(item=>({id: item.id,price:item.price, count: item.count,title:item.title}))


    const order={
      buyer:{
        name:"Fran",
        EMAIL:"sacro@gmail.com",
        phone:123123123213
      },
      items: cart,//problema en cart no lee el objeto , averiguar que sucede en cartContainer.jsx
    price:getTotalPriceincart(),
    date:new Date()

    }

    console.table(order)
    createOrder(order)
  }

  return (
    <>
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
    <Button onClick={handleCheckout}>Finalizar compra</Button>
    </>
  );
}

export default CartContainer;
//55 firebase