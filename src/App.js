import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ItemListcontainer from "./components/itemlistContainer/ItemListContainer";
import PageNotFound from "./components/HomePage/PageNotFound";
import { CartProvider } from "./storage/cartContext";
import CartContainer from "./components/Cart/CartContainer";
import FormData from "./components/Forms/FormData";




function App() {
 
  return (
        <BrowserRouter>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/detail/:idArticle"
                element={<ItemDetailContainer />}
              />
              <Route path="/form" element={<FormData/>}/>
              <Route
                path="/category/:categoryid"
                element={<ItemListcontainer />}
              />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="/gracias/:orderid" element={<h1>Gracias por tu compra</h1>}/>
              //ver con useParams llamar al id del producto que compro mostrando la info
            </Routes>
          </CartProvider>
        </BrowserRouter>
    
    
  );
}
export default App;


