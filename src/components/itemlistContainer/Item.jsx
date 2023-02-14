 import { Link } from "react-router-dom";
import Button from "../button/Button";


function Item(props) {
  const { title, price, img,id,stock } = props.article;
  
  return (

<>

  
    <div className="flexCard ">
      
      <div className="card-body " >
      <h5 className="card-title mb-5">{title}</h5>
      {stock <=2 && <h4 >Ultimas Unidades! </h4>}
      <img className="image" src={img} alt={title} />
      <h4 className="mt-3">$ {price}</h4>
     
      <Link to={`/detail/${id} `}>
      <Button >
        Ver mas
      </Button>
      </Link>
      
      </div>
    </div>
    </>
  ); 
}

export default Item;
