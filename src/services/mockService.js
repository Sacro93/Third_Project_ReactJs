const dataProducts = [
  {
    img: "../imgs/play5.jpg",
    id: 1,
    title: "Play Station 5",
    detail: "Consola ultima generacion",
    price: 250000,
  },
  {
    img: "../imgs/lavarropas_samsung.jpeg",
    id: 2,
    title: "Lavarropas ELA0F2",
    detail: "Lavarropas 7kg 1000rpm",
    price: 136000,
  },
  {
    img: "../imgs/placard.jpg",
    id: 3,
    title: "Placard Premium",
    detail: "2 Puertas 2m x 1.4m",
    price: 50000,
  },
  {
    img: "../imgs/play5.jpg",
    id: 4,
    title: "Play Station 5",
    detail: "Consola ultima generacion",
    price: 250000,
  },
  {
    img: "../imgs/play5.jpg",
    id: 5,
    title: "Play Station 5",
    detail: "Consola ultima generacion",
    price: 250000,
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
      resolve(reqItem);
    }, 2000);
  });
};

export default obtenerProductos;

export { getSpecificArticle };
