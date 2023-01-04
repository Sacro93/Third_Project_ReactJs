import "./App.css";

import NavBar from "./components/NavBar/NavBar";

import ItemListcontainer from "./components/itemlistContainer/ItemListContainer";

//esto es lo que se renderiza en "index.js" "<App/>"
//no se tiene todo en un mismo archivo , todo por separado y luego se "importa" , webpack lo une

function App() {
  return (
    <>
      <NavBar />

      <ItemListcontainer />
    </>
  );
}
export default App;
