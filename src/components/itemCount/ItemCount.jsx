import { useState } from "react";
import ButtonAction from "../button/Button";


function ItemCount({ onAddToCart, stock }) {
  const [count, setCount] = useState(0);

  function handleAdd() {
    if (count < stock) 
    setCount(count + 1);
  }

  function handleSubstract() {
    
    setCount(count - 1);
  }
  return (
    <div >
     
      <div >
        <ButtonAction onClick={handleSubstract}>-</ButtonAction>
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

