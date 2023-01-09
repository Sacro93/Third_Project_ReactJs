import { useState, useEffect } from "react";
import Item from "./Item";
import Flex from "../Flex/flex";
import obtenerProductos from "../../services/mockService";
import { useParams } from "react-router-dom";
import { getCategory } from "../../services/mockService";
function ItemListcontainer() {
  const [articulos, setArticulos] = useState([]);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/obtener")
  //     .then((res) => res.json()) 
  //     .then((json) => setArticulos(json));
  // }, []);

  let{categoryid} =useParams();

  useEffect(() => {
    if (!categoryid) {
      obtenerProductos()
        .then((respuesta) => {
          setArticulos(respuesta);
        })
        .catch((error) => alert(error));
    } else {
      getCategory(categoryid)
      .then((respuesta) => {
        setArticulos(respuesta);
      });
    }
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
