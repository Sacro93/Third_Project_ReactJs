import ButtonAction from "../button/Button";
import { useContext, useState } from "react";
import { cartContext } from "../../storage/cartContext";
import FormCheckout from "../Forms/FormData";
import { createOrder } from "../../services/firebase";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

function CartContainer() {
  const {
    cart,
    getTotalItemsInCart,
    getTotalPriceInCart,
    removeItem,
    clear,
    getCountByItem,
  } = useContext(cartContext);

  const [orderId, setOrderId] = useState();

  function handleCheckout(evt, userData) {
    evt.preventDefault();
    
    const items = cart.map(({ product,count }) => ({
      id:product.id,
      price:product.price,
      title:product.title,
      count,
    }));

    const order = {
      buyer: userData,
      items: items, 
      total: getTotalPriceInCart(),
      date: new Date(),
    };


   
    async function sendOrder(){
      let id= await createOrder(order)
      setOrderId(id)
    }

    sendOrder();
  }

  if (orderId)
    return (

      Swal.fire({
        icon: 'success',
        title: 'Genial! ',
        text: `Solicitud de compra N° ${orderId} procesada con exito! Un asesor va a estar en contacto con vos en menos de 1 hora!`,
        confirmButtonText: 'Volver al menu'
      }).then(function (result) {
        if (result.value) {
          window.location = "/";
        }}
      )
    )

  return (
    <>
     <div>
      {cart.map(({product})=>(
        <div key={product.id}>
          <h1>{product.title}</h1>
          <h2>{product.price}</h2>
          <img src={product.img} alt={product.title} />
          <h5> Cantidad de este producto: {getCountByItem(product.id)}</h5>
          <ButtonAction onClick={()=>removeItem(product.id)}> Deletle</ButtonAction>
        </div>
      ))}

      <p>El total de tu compra es ${getTotalPriceInCart()}</p>
  



   {cart.length === 0  ?  (
      
  Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Sin items en el carrito!',
  confirmButtonText: 'Volver al menu'
}).then(function (result) {
  if (result.value) {
    window.location = "/";
  }}
)
):
 (
  <ButtonAction onClick={() => clear()}>Clear all</ButtonAction>)}


 
<FormCheckout onCheckout={handleCheckout} />
 

     </div>
    </>
  );
}

export default CartContainer;