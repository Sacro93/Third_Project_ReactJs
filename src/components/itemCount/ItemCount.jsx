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
    <div className="  ">
    <div className="d-flex wrap btn justify-content-center">
        <button className="badge text-bg-primary" disabled={count <= 0 } onClick={handleDiscount}> - </button>
     
     <span className="badge text-bg-secondary d-flex align-items-center"> {count} </span>
    
      <button className="badge text-bg-primary" onClick={handleAdd} disabled={count === props.stock} >+</button>
    </div>
    </div>
  );
}

export default ItemCount;


//