
import ItemCount from "../itemCount/ItemCount";

import NavItem from "../NavBar/NavItem";
import ButtonAction from "../button/Button";
import "./detail.css"

function DetailContainer({
  id,
  title,
  stockUpdated,
  price,
  img,
  detail,
  onAddToCart,
  isInCart,
}) {
  return (
  <div className="card text-center text-muted mb-4 pb-2">
      <div className="card-body" >
        <div >
        <div >
          <img className="image" src={img}  />
        </div>
        <div className="card-body">
          <div className=" d-flex justify-content-center">
            <div>
              <p className=" text-center text-muted mb-4 pb-2">{title}</p>
              <p className="lead fw-normal mb-0">{detail}</p>
            </div>
          </div>

          <div className=" d-flex justify-content-center">
            <div>
              
              <p className="lead fw-normal mb-3 "> Price : ${price}</p>
            </div>
          
          
          </div>

<div className="d-flex  justify-content-evenly gap-3">
          {isInCart ? (
            <NavItem to="/cart">
              <ButtonAction>Go to cart</ButtonAction>
            </NavItem>
          ) : (
            <div >
            <ItemCount className=" d-flex justify-content-evenly" id={id} stock={stockUpdated} onAddToCart={onAddToCart} />
            </div>
          )}
          </div>
        </div>
        </div>
      </div>
      </div>
   
  );
}

export default DetailContainer;
