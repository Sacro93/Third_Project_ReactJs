import { useState, useEffect } from "react";
import Card from "./Item";
import Flex from "../Flex/flex";
// import obtenerProductos from "../../services/mockService";

function ItemListcontainer() {
  // const [products, setProducts] = useState([]);
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setArticulos(json));
  }, []);
console.log(articulos)
  return (
    <Flex>
      {articulos.map((itemIterado) => {
        return <Card id={itemIterado.id} key={itemIterado.id} item={itemIterado} />;
      })}
    </Flex>
  );
}
export default ItemListcontainer;

// useEffect(() => {
//   obtenerProductos().then((respuesta) => {
//     setProducts(respuesta);
//   })
// },
// []);
