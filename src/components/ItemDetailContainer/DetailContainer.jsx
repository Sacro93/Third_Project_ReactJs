import Button from "../button/Button";
import ItemCount from "../itemCount/ItemCount";
import Flex from "../Flex/flex";
import NavItem from "../NavBar/NavItem";


function DetailContainer({title,stockUpdated, price, img,detail,onAddToCart,isInCart}){

 
    return(
<Flex>
        <div className="card mb-3 ">
  <img src={img}className="card-img-top container"  alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">{title}</h5>
   
    <p className="card-text text-center">{detail}</p>
    <p className="card-text text-center"><small className="text-muted">{price}</small></p>
  
   {
    isInCart? <NavItem to="/cart">
      <Button>Ir al Cart</Button>
    </NavItem>
    :
    <ItemCount stock={stockUpdated} onAddToCart={onAddToCart} />
   }
  </div>
</div>
</Flex>
    )
}

export default DetailContainer