import Button from "../button/Button";
import { useContext, useState } from "react";
import { cartContext } from "../../storage/cartContext";
import { createOrder } from "../../services/firebase";
import { useNavigate } from "react-router-dom";

function CartContainer() {
  const { cart, removeItem, getTotalPriceincart,getTotalItemsInCart } = useContext(cartContext);
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
    price:getTotalPriceincart(),
    date:new Date()

    }

    
 //option A
  //  createOrder(order).then(id=>alert(`Compraste x items, tu id es : ${id}`))

  //option B
    // createOrder(order).then(id=>{navigate(`/gracias/${id}`)})
//ver sweet alert
//vaciar el carrito

//option C
async function sendOrder(){
  let id= await createOrder(order)
  setOrderId(id)
  
}
sendOrder()
  }

//sin condicional ternario 

if(orderId)
return(

  <div>
  <h1>Gracias por tu compra</h1>
  <h1>El id de tu compra es : {orderId}</h1>
  <p>//ver que se redireccione a otra Route, salir del cart//e1</p>
  </div>

  
)


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
    //no mostrar boton finalizar compra ni precio total en carrito cuando el mismo este vacio
    //vaciar el cart una vez finalizada la compra
    </>
  );
}

export default CartContainer;
//55 firebase