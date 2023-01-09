import React, { useState } from "react";



function ItemCount(props) {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }
  function handleDiscount(){
    setCount(count - 1);

  }

  return (
    <div class="  ">
    <div class="d-flex wrap btn justify-content-center">
        <button class="badge text-bg-primary" disabled={count <= 0 } onClick={handleDiscount}> - </button>
     
     <span class="badge text-bg-secondary d-flex align-items-center"> {count} </span>
    
      <button class="badge text-bg-primary" onClick={handleAdd} disabled={count === props.stock} >+</button>
    </div>
    </div>
  );
}

export default ItemCount;


//