import { createContext, useEffect, useState } from "react";



export const cartContext =createContext({cart:[]});



  function CartProvider(props) {

const [cart,setCart]=useState([])
const test =()=> console.log ("test");


function addToCart(item) {
    let isInCart = cart.findIndex((itemInCart) => itemInCart.id === item.id);
    let newCart = cart.map((item) => item);
     if (isInCart !== -1) {
      /* newCart[isInCart] */
      alert("Cuidado! item ya agregado");
    } else {
      newCart.push(item);
      setCart(newCart);
    }

}
    return (
    <cartContext.Provider value={{cart, test, addToCart}}>
        {props.children}</cartContext.Provider>
  );
}
export {CartProvider}


// function addToCart(item) {
//     let descriptionCart = cart.findIndex(
//       (articleInCart) => articleInCart.id === item.id
//     );
//     let newCart = cart.map((item) => item);
//     if (descriptionCart !== -1) {
//     } else {
//       newCart.push(item);
//       setCart(newCart);
//     }
//   }