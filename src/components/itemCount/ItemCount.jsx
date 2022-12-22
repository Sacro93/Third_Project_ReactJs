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
    <div className="d-flex wrap m-3">
        <button disabled={count === 1 } onClick={handleDiscount}> - </button>
      <p> {count}</p>
      <button onClick={handleAdd} disabled={count === props.stock} >+</button>
    </div>
  );
}

export default ItemCount;


//