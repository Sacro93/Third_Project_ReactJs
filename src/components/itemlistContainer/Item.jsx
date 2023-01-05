import Button from "../button/Button";
import ItemCount from "../itemCount/ItemCount";

function Item(props) {
  const { title, price, img, detail } = props.item;
  
  return (
    <div className="flexCard">
      <img height="220px" src={img} alt={title} />
      <h3>{title}</h3>
      <small>{detail}</small>
      <h3>$ {price}</h3>
      <br />
      <Button padding="20px" >
        Add to cart
      </Button>
      <ItemCount stock={5} />
    </div>
  );
}

export default Item;
