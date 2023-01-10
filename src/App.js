import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ItemListcontainer from "./components/itemlistContainer/ItemListContainer";
import PageNotFound from "./components/HomePage/PageNotFound";




function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/detail/:idArticle" element={<ItemDetailContainer />}/>
          <Route path="/category/:categoryid" element={<ItemListcontainer />}/>
          <Route path="*" element={<PageNotFound />}/>

          </Routes>
        
      </BrowserRouter>
    </>
  );
}
export default App;
