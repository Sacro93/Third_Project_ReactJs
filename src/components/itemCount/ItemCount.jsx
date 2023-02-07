import { useState } from "react";
import { useCartContext } from "../../storage/cartContext";
import ButtonAction from "../button/Button";


function ItemCount({ id, onAddToCart, stock }) {
  const cart = useCartContext();
  const [count, setCount] = useState(0);

  function handleAdd() {
    if ((count + cart.getCountByItem(id)) < stock) 
    setCount(count + 1);
  }

  function handleSubstract() { 
    setCount(count - 1);
  }
  
  return (
    <div >
     
      <div >
        <ButtonAction disabled={count <= 1} onClick={handleSubstract}>-</ButtonAction>
        <span>{count}</span>
        <ButtonAction onClick={handleAdd}>+</ButtonAction>
      </div>

      <div className="itemcount_btns">
        <ButtonAction onClick={() => onAddToCart(count)}>Agregar al carrito</ButtonAction>
      </div>
    </div>
  );
}

export default ItemCount;