import { useState, useEffect } from "react";
import Item from "./Item";
import Flex from "../Flex/flex";
import obtenerProductos from "../../services/mockService";
import { useParams } from "react-router-dom";
import { getCategory } from "../../services/mockService";
import Loading from "../Loader/Loading";


function ItemListcontainer() {
  const [articulos, setArticulos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const[alertInfo,setAlertInfo]=useState()



  let { categoryid } = useParams();

  useEffect(() => {
    if (!categoryid) {
      obtenerProductos()
        .then((respuesta) => {
          setArticulos(respuesta);
          setIsLoading(false);
          setAlertInfo({
            text: "Items cargados correctamente"})
        })
        .catch((error)=>{setAlertInfo({
          text: "Items cargados correctamente",
        type:"warning"})})
        .finally(()=>setIsLoading(false))
    
        
    } else {
      getCategory(categoryid).then((respuesta) => {
        setArticulos(respuesta);
        setIsLoading(false);
        
      }) .finally(()=>setIsLoading(false))
    }
  }, [categoryid]);
  //loading.io//skeletor//react spinners
  return (
    <>
      {isLoading ? (<Loading/>
    
      ) : (
       <Flex>
         {alertInfo && <span className="">{alertInfo.text}</span>}
         
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
        </Flex>
      )}
    </>
  );
        }

// 40 min clase 11
export default ItemListcontainer;
