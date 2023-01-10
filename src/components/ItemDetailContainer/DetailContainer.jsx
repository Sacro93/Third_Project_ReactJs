import Button from "../button/Button";
import ItemCount from "../itemCount/ItemCount";



function DetailContainer({title, price, img,detail}){

 
    return(

        <div className="card mb-3">
  <img src={img} className="card-img-top"  alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">{title}</h5>
    <p className="card-text text-center">{detail}</p>
    <p className="card-text text-center"><small class="text-muted">{price}</small></p>
    <Button >
        Add Cart
      </Button> 
    <ItemCount/>
  </div>
</div>

    )
}

export default DetailContainer