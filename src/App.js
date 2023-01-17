import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ItemListcontainer from "./components/itemlistContainer/ItemListContainer";
import PageNotFound from "./components/HomePage/PageNotFound";
import { CartProvider } from "./storage/cartContext";

// export const userContext =createContext({user:"anonymus"});


function App() {
  
  return (
    <>
      <BrowserRouter>
      <CartProvider>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/detail/:idArticle" element={<ItemDetailContainer />}/>
          <Route path="/category/:categoryid" element={<ItemListcontainer />}/>
          <Route path="*" element={<PageNotFound />}/>

          </Routes>
        </CartProvider>
      </BrowserRouter>
   
    </>
  );
}
export default App;


// hora 1.25 de eventos