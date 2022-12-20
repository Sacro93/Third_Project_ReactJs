import Button from "./button/Button";


function Card(props) {
   console.log(props)
  
    return (
     
      <div className= "m-5 text-center gap-3">
        
        <img height="220px" src={props.img}  alt={props.title}/>
        <h3>{props.title}</h3>
        <small>{props.detail}</small>
        <h3>$ {props.price}</h3>
        <br/>
       <Button padding="15px" color="purple" >
      Comprar
       </Button>
     
      </div>
     
    );
  }

  export default Card;

