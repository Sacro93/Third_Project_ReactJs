import { useState, useEffect } from "react";
import Item from "./Item";
import Flex from "../Flex/flex";
import obtenerProductos from "../../services/mockService";


function ItemListcontainer() {
  const [articulos, setArticulos] = useState([]);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/obtener")
  //     .then((res) => res.json())
  //     .then((json) => setArticulos(json));
  // }, []);

  useEffect(() => {
    obtenerProductos()
      .then((respuesta) => {
        setArticulos(respuesta);
      })
      // .catch((error) => alert(error));
  }, []);

  return (
    <Flex>
      {articulos.map((itemIterado) => {
        return (
          <Item
            id={itemIterado.id}
            key={itemIterado.id}
            article={itemIterado}
          />
        );
      })}
    </Flex>
  );
}

export default ItemListcontainer;

