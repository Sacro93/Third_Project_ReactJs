import { useState, useEffect } from "react";
import Item from "./Item";
import Flex from "../Flex/flex";
import { getProducts } from "../../services/firebase";
import { useParams } from "react-router-dom";
import { getCategory } from "../../services/firebase";
import Loading from "../Loader/Loading";


function ItemListcontainer() {
  const [articulos, setArticulos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const[alertInfo,setAlertInfo]=useState()



  let { categoryid } = useParams();

  useEffect(() => {
    if (!categoryid) {
      getProducts()
        .then((respuesta) => {
          setArticulos(respuesta);
          setAlertInfo({
            text: "Items Cargados Correctamente",
            type: "default",
          });
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
  
  // if (isLoading) {
  //   return <Loader size={120} color="orange" />;
  // } else {
  //   return (
  //     <>
  //       <Flex>
  //         {alertText && (
  //           <div className="alert_container">
  //             <span className={`alert alert_${alertText.type}`}>
  //               {alertText.text}
  //             </span>
  //           </div>
  //         )}
  //         <Flex>
  //           {articulos.map((itemIterado) => {
  //             return <Item key={itemIterado.id} item={itemIterado} />;
  //           })}
  //         </Flex>
  //       </Flex>
  //     </>
  //   );
  // }



  return (
    <>
      {isLoading ? (<Loading/>
    
      ) : (
       <Flex>
         
         
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
