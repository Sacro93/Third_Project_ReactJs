import React from "react";
import DetailContainer from "./DetailContainer";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getSpecificArticle } from "../../services/mockService";
import { cartContext } from "../../storage/cartContext";


function ItemDetailContainer() {
  const [specificArticle, setDetailArticle] = useState({title: "loading", price: "---"});

  let params = useParams();
  // const context=useContext(cartContext)
 const{addToCart} =useContext(cartContext)

  function handleAddToCart(count){
  const articleCount ={...specificArticle, count: count};
  addToCart(articleCount)
  }

  useEffect(() => {
    getSpecificArticle(params.idArticle).then((res) => {
      setDetailArticle(res);
    });
  }, []);

  return (
    <DetailContainer
    onAddToCart={handleAddToCart}
      img={specificArticle.img}
      id={specificArticle.id}
      title={specificArticle.title}
      detail={specificArticle.detail}
      price={specificArticle.price}
    />
  );
}

export default ItemDetailContainer;
