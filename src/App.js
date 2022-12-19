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
