import { useState, useEffect } from "react";
import Card from "./Item";
import Flex from "../Flex/flex";
import obtenerProductos from "../../services/mockService";

function ItemListcontainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    obtenerProductos().then((respuesta) => {
      setProducts(respuesta);
    })
  },
  []);

  return (
    <Flex>
      {products.map((itemIterado) => {
        return <Card id={itemIterado.id} key={itemIterado.id} item={itemIterado} />;
      })}
    </Flex>
  );
}
export default ItemListcontainer;
 