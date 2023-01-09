import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/detail/:idArticle" element={<ItemDetailContainer />}/>

          </Routes>
        
      </BrowserRouter>
    </>
  );
}
export default App;
