const dataProducts = [
  {
    img: "../imgs/play5.jpg",
    id: 1,
    title: "Play Station 5",
    detail: "Consola ultima generacion",
    price: 250000,
    category: "Tecnology",
    stock: 2,
  },
  {
    img: "../imgs/lavarropas_samsung.jpeg",
    id: 2,
    title: "Lavarropas ELA0F2",
    detail: "Lavarropas 7kg 1000rpm",
    price: 136000,
    category: "Appliances",
    stock: 2,
  },
 
  {
    img: "../imgs/placard.jpg",
    id: 3,
    title: "Placard Premium",
    detail: "2 Puertas 2m x 1.4m",
    price: 50000,
    category: "Furniture",
    stock: 5,
  },
  {
    img: "../imgs/iphone_14.jfif",
    id: 4,
    title: "Iphone 14 Pro Max",
    detail: "Celular Apple",
    price: 420000,
    category: "Tecnology",
    stock: 10,
  },
  {
    img: "../imgs/play5.jpg",
    id: 5,
    title: "Play Station 5",
    detail: "Consola ultima generacion",
    price: 250000,
    category: "Tecnology",
    stock: 10,
  },

  {
    img: "../imgs/xboxSerieX.jpg_1700Wx1700H",
    id: 6,
    title: "Xbox Series X",
    detail: "Consola de Microsoft",
    price: 200000,
    category: "Tecnology",
    stock: 8,
  },
  {
    img: "../imgs/mesa_sillas_exterior.jpg",
    id: 7,
    title: "Juego de Mesa exterior",
    detail: "Juego de Mesa Premium 4 sillas ",
    price: 60000,
    category: "Furniture",
    stock: 5,
  },
  {
    img: "../imgs/s22_ultra.jfif",
    id: 8,
    title: "Samsung Galaxy S22 Ultra White",
    detail: "Tiene ina pantalla Super AMOLED Plus de 4.3. La resolución es de 480 x 800 y una densidad de los píxeles de 217 ppi",
    price: 300000,
    category: "Tecnology",
    stock: 2,
  },
  
];

const obtenerProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (resolve(dataProducts));
    }, 3000);
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
    }, 3000);
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
  
   
// 1.35 hs


export default obtenerProductos;

export { getSpecificArticle, getCategory };
