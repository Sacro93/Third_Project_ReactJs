import React from "react"
import DetailContainer from "./DetailContainer"
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { getSpecificArticle } from "../../services/mockService";




function ItemDetailContainer(){



    const [specificArticle, setDetailArticle] = useState([]);

let params= useParams()


useEffect(()=>{
  getSpecificArticle(params.idArticle)
    .then((res)=>{
        setDetailArticle(res)
    })

},[])


    return(
      
       <DetailContainer
       img={specificArticle.img}
       id={specificArticle.id}
       title={specificArticle.title}
       detail={specificArticle.detail}
       price={specificArticle.price}
      />
    )
}

export default ItemDetailContainer