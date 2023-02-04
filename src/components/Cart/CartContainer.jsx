import ButtonAction from "../button/Button";
import { useContext, useState } from "react";
import { cartContext } from "../../storage/cartContext";
import Swal from "sweetalert2";
import { createOrder_WithStockControl } from "../../services/firebase";
import FormCheckout from "../Forms/FormData";
import { createOrder } from "../../services/firebase";


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
    
    const items = cart.map(({ id, price, title, count }) => ({
      id,
      price,
      title,
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
      <div>
        <h1>Gracias por tu compra</h1>
        <p>El id de tu compra {orderId}</p>
      </div>
    );

  return (
    <>
     <div>
      {cart.map(({product})=>(
        <div key={product.title}>
          <h1>{product.title}</h1>
          <h2>{product.price}</h2>
          <img src={product.img} alt={product.title} />
          <h5> Cantidad de este producto: {getCountByItem(product.id)}</h5>
          <ButtonAction onClick={()=>removeItem(product.id)}> Deletle</ButtonAction>
        </div>
      ))}
{getTotalPriceInCart() === 0 ? (
      ""
    ) : (
      <p>El total de tu compra es ${getTotalPriceInCart()}</p>
    )}

    <br />
    <ButtonAction onClick={() => clear()}>Clear all</ButtonAction>


    {getTotalItemsInCart() === 0 ? (
<ButtonAction>Sin Productos</ButtonAction>
) : (
<ButtonAction onClick={handleCheckout}>Finalizar compra</ButtonAction>
)}
<div>
<FormCheckout onCheckout={handleCheckout} />
 
</div>
     </div>
    </>
  );
}

export default CartContainer;



