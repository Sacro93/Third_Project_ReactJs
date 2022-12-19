import Button from "./button/Button";



// function Card() {
//   const producto = {
//     precio: 500,
//     nombre: "Pantalon",
//     descripcion: "La remera de Coder",
//   };

//   return (
   
//     <div>
//       <h3>{producto.nombre}</h3>
//       <h3>$ {producto.precio}</h3>
//       <small>{producto.descripcion}</small>
//       <br/>
//      <Button color="orange" text="Hola desde props"/>
//      {/* button({text:"hola desde props"}) */}
//     </div>
   
//   );
// }

function Card(props) {
   console.log(props)
  
    return (
     
      <div>
        <h3>{props.title}</h3>
        <img height="220px" src={props.img}  alt={props.title}/>
        <h3>$ {props.price}</h3>
        <small>{props.detail}</small>
        <br/>
       <Button padding="10px" color="purple" >
        Ver Mas
       </Button>
       {/* button({text:"hola desde props"}) */}
      </div>
     
    );
  }
export default Card
