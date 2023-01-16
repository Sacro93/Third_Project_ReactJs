import React, { useContext } from "react";
import { cartContext } from "../../storage/cartContext";



function CartWidget  (){

  const contexto= useContext(cartContext)
    return (
      <>
      <button className="nav-item btn btn-outline-danger ">
        <img src="./imgs/cart-check-fill.svg" alt="Logo" />
        {contexto.getTotalitemsInCart()}

      </button>
      </>
    );
  };
  
  export default CartWidget;
  