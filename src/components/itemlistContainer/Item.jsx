 import Button from "../button/Button";
import ItemCount from "../itemCount/ItemCount";

function Item(props) {
  const { title, price, image, description } = props.item;
  
  return (
    <div className="flexCard ">
      <div  className="card" ></div>
      <div className="card-body " >
      <h5 className="card-title mb-5">{title}</h5>
      <img className="image" src={image} alt={title} />
     
      {/* <p className="mt-3">{description}</p> */}
      <h4 className="mt-3">$ {price}</h4>
      <br />
      <Button >
        Ver mas
      </Button>
      <ItemCount  stock={5} />
      </div>
    </div>
  );
}

export default Item;
