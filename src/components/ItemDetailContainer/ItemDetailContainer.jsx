import React from "react";
import DetailContainer from "./DetailContainer";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getSpecificArticle } from "../../services/firebase";
import { cartContext } from "../../storage/cartContext";

function ItemDetailContainer() {
  const [specificArticle, setDetailArticle] = useState({
    title: "loading",
    price: "--,--",
  });
  const [isInCart, setIsInCart] = useState(false);

  let params = useParams();

  const { cart, addToCart } = useContext(cartContext)

  function handleAddToCart(count) {
    setIsInCart(true);
    addToCart(specificArticle, count);
  }
  function checkStock() {
    let itemInCart = cart.find((item) => item.id === specificArticle.id);

    let stockUpdated = specificArticle.stock;

    if (itemInCart) {
      stockUpdated = specificArticle.stock - itemInCart.count;
    }
    return stockUpdated;
  }
  useEffect(() => {
    getSpecificArticle(params.idArticle).then((res) => {
      setDetailArticle(res);
    });
  }, []);

  return (
    <DetailContainer
      isInCart={isInCart}
      onAddToCart={handleAddToCart}
      img={specificArticle.img}
      id={specificArticle.id}
      title={specificArticle.title}
      detail={specificArticle.detail}
      price={specificArticle.price}
      stockUpdated={checkStock()}
    />
  );
}

export default ItemDetailContainer;