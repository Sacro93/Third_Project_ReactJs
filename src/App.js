import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ItemListcontainer from "./components/itemlistContainer/ItemListContainer";
import PageNotFound from "./components/HomePage/PageNotFound";
import { CartProvider } from "./storage/cartContext";
import { SkeletonTheme } from "react-loading-skeleton";
import CartContainer from "./components/Cart/CartContainer";
// export const userContext =createContext({user:"anonymus"});

function App() {
  return (
    <>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <BrowserRouter>
          <CartProvider>
            <NavBar />

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/detail/:idArticle"
                element={<ItemDetailContainer />}
              />
              <Route
                path="/category/:categoryid"
                element={<ItemListcontainer />}
              />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </CartProvider>
        </BrowserRouter>
      </SkeletonTheme>
    </>
  );
}
export default App;

// hora 1.25 de eventos
