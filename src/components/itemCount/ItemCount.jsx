import  { useState } from "react";
import Button from "../button/Button";

function ItemCount({ onAddToCart })  {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }
  function handleDiscount() {
    setCount(count - 1);
  }

  return (
    <div class="  ">
      <div class="d-flex wrap btn justify-content-center">
        <Button
          class="badge text-bg-primary"
          disabled={count <= 1}
          onClick={handleDiscount}
        >
          {" "}
          -{" "}
        </Button>

        <span class="badge text-bg-secondary d-flex align-items-center">
          {" "}
          {count}{" "}
        </span>
        <Button
          class="badge text-bg-primary"
          onClick={handleAdd}
          
        >
          +
        </Button>
        <div >
        <Button onClick={() => onAddToCart(count)}>Agregar al carrito</Button>
      </div>
        
       
      </div>
      
    </div>

  );
}

export default ItemCount;


