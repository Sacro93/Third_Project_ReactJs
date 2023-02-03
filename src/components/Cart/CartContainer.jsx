import Button from "../button/Button";
import { useContext, useState } from "react";
import { cartContext } from "../../storage/cartContext";
import { createOrder } from "../../services/firebase";
import { useNavigate } from "react-router-dom";


function CartContainer() {
  const { cart, removeItem, getTotalPriceInCart,getTotalItemsInCart,getCountByItem,clear } = useContext(cartContext);


  
  const navigate = useNavigate();
const[orderId,setOrderId]=useState();



  function handleCheckout(evt){
    const items=cart.map(({id,price,title,count})=>({id,price,title,count}))

    const order={
      buyer:{
        name:"Fran",
        email:"sacro@gmail.com",
        phone:123123123213
      },
      items: cart,
    price:getTotalPriceInCart(),
    date:new Date()

    }

async function sendOrder(){
  let id= await createOrder(order)
  setOrderId(id)
  
}
sendOrder()
  }


if(orderId){
return(

  <div>
  <h1>Gracias por tu compra</h1>
  <h1>El id de tu compra es : {orderId}</h1>
  <p>//ver que se redireccione a otra Route, salir del cart//e1</p>
  </div>

  
)
}

  return (
    <>
    <div>
      {cart.map((itemInCart) => (
        <div>
          <h1>{itemInCart.title}</h1>
          <h2>{itemInCart.price}</h2>
          <h4>{itemInCart.img}</h4>
     <h5>Cantidad de este producto {getCountByItem()}</h5>
        </div>
      ))}
      <h4>Total de Articulos {getTotalItemsInCart()}</h4>
      <button onClick={clear()}>Deletle items</button>
      <p>El total de tu compra es ${getTotalPriceInCart()}</p>
    </div>
    <Button onClick={handleCheckout}>Finalizar compra</Button>

    
    </>
  );
}

export default CartContainer;
//55 firebase