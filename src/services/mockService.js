const dataProducts = [
  {
    img: "../imgs/play5.jpg",
    id: 1,
    title: "Play Station 5",
    detail: "Consola ultima generacion",
    price: 250000,
    category: "Tecnology",
  },
  {
    img: "../imgs/lavarropas_samsung.jpeg",
    id: 2,
    title: "Lavarropas ELA0F2",
    detail: "Lavarropas 7kg 1000rpm",
    price: 136000,
    category: "Appliances",
  },
 
  {
    img: "../imgs/placard.jpg",
    id: 3,
    title: "Placard Premium",
    detail: "2 Puertas 2m x 1.4m",
    price: 50000,
    category: "Furniture",
  },
  {
    img: "../imgs/play5.jpg",
    id: 4,
    title: "Play Station 5",
    detail: "Consola ultima generacion",
    price: 250000,
    category: "Tecnology",
  },
  {
    img: "../imgs/play5.jpg",
    id: 5,
    title: "Play Station 5",
    detail: "Consola ultima generacion",
    price: 250000,
    category: "Tecnology",
  },
  {
    img: "../imgs/lavarropas_samsung.jpeg",
    id: 6,
    title: "Lavarropas ELA0F2",
    detail: "Lavarropas 7kg 1000rpm",
    price: 136000,
    category: "Appliances",
  },
  {
    img: "../imgs/lavarropas_samsung.jpeg",
    id: 7,
    title: "Lavarropas ELA0F2",
    detail: "Lavarropas 7kg 1000rpm",
    price: 136000,
    category: "Appliances",
  },
];

const obtenerProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (resolve(dataProducts));
    }, 2000);
  });
};

const getSpecificArticle = (idItem) => {
  return new Promise((resolve) =>{
  const reqItem = dataProducts.find((articleItem) => {
    console.log(articleItem.id, idItem)
    return articleItem.id === Number(idItem);
  });
  
    setTimeout(() => {
      if(reqItem)
      resolve(reqItem);
      else alert("Producto no encontrado en la base de datos")
    }, 2000);
  });
};

const getCategory=(segmento)=>{

  return new Promise((resolve,rejected)=>{

    const reqCategory= dataProducts.filter(item=> item.category === segmento);
    setTimeout(()=>{
      resolve(reqCategory);
    },1500)
  },)
};
  
   



export default obtenerProductos;

export { getSpecificArticle, getCategory };
