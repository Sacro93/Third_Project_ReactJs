import Button from "../button/Button";
import ItemCount from "../itemCount/ItemCount";
import Flex from "../Flex/flex";


function DetailContainer({title, price, img,detail,onAddToCart}){

 
    return(
<Flex>
        <div className="card mb-3 ">
  <img src={img}className="card-img-top container"  alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">{title}</h5>
   
    <p className="card-text text-center">{detail}</p>
    <p className="card-text text-center"><small class="text-muted">{price}</small></p>
  
    <ItemCount onAddToCart={onAddToCart}/>
    <Button >Add to cart</Button>
  </div>
</div>
</Flex>
    )
}

export default DetailContainer