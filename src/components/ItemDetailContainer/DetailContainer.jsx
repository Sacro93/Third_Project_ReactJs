import Button from "../button/Button";
import ItemCount from "../itemCount/ItemCount";
import Flex from "../Flex/flex";
import NavItem from "../NavBar/NavItem";

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
  <div className="">
      <div className="container h-100 " >
        <div className="aling-items-center">
        <div className="col-md-5">
          <img className="img-fluid" src={img}  />
        </div>
        <div className="card-body">
          <div className="col-md-5 d-flex justify-content-center">
            <div>
              <p className=" text-center text-muted mb-4 pb-2">{title}</p>
              <p className="lead fw-normal mb-0">{detail}</p>
            </div>
          </div>

          <div className="col-md-5 d-flex justify-content-center">
            <div>
              
              <p className="lead fw-normal mb-0"> Price : ${price}</p>
            </div>
          
          
          </div>
<br />
<div className="d-flex">
          {isInCart ? (
            <NavItem to="/cart">
              <Button>Go to cart</Button>
            </NavItem>
          ) : (
            <div >
            <ItemCount id={id} stock={stockUpdated} onAddToCart={onAddToCart} />
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
