//Clase 1 a 4 "APP.JS"

/*

import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
//esto es lo que se renderiza en "index.js" "<App/>"
//no se tiene todo en un mismo archivo , todo por separado y luego se "importa" , webpack lo une

function App() {
  const title = " Bienvenido! Empecemos con  React";
  function hacerAlgo() {
    alert("hola");
  }
  const miEstilo = {
    backgroundColor: "pink",
    margin: "30px",
    border: "outset",
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </header>
      <div style={miEstilo} className="catalogo">
        <Card
          img="/imgs/zapa.jfif"
          title="Zapas"
          price={900}
          detail="Zapatillas"
        />
        <Card
          img="/imgs/REMERA.jpg"
          title="Remera"
          price={600}
          detail="Remera de coder"
        />
        <Card
          img="/imgs/jean.jfif"
          title="jean"
          price={700}
          detail="Pantalon Coder"
        />
      </div>

      <div style={miEstilo}>
        <button color="black" onClick={hacerAlgo}>Click me</button>
      </div>
    </div>
  );
}

export default App;
 /*
*/

//Clase 1 a 4 Button.jsx
/*import"./button.css"

export default function Button(props){
    // console.log(props)
    // Se imprime: {color:"orange", text: "Hola desde props"}
    const styleButton={
        backgroundColor: props.color,
        padding: props.padding,
    };
    return( <button style={styleButton} className="button" >{props.children}</button>)
} */

//clase 1 a 5 CARD.jsx
// import Button from "./button/Button";


// function Card(props) {
//    console.log(props)
  
//     return (
     
//       <div>
//         <h3>{props.title}</h3>
//         <img height="220px" src={props.img}  alt={props.title}/>
//         <h3>$ {props.price}</h3>
//         <small>{props.detail}</small>
//         <br/>
//        <Button padding="10px" color="purple" >
//         Ver Mas
//        </Button>
//        {/* button({text:"hola desde props"}) */}
//       </div>
     
//     );
//   }
//export default Card