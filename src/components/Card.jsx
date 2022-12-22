import Button from "./button/Button";
import ItemCount from "./itemCount/ItemCount";

function Card(props) {
  return (
    <div className="m-5 text-center gap-3">
      <img height="220px" src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <small>{props.detail}</small>
      <h3>$ {props.price}</h3>
      <br />
      <Button padding="20px" color="purple">
        Add to cart
      </Button>
      <ItemCount stock={5} />
    </div>
  );
}

export default Card;
