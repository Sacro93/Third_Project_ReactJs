// const dataProducts = [
//   {
//     img: "https://th.bing.com/th/id/OIP.YN69VohVBcl2yFCGUWjGRAHaHa?w=192&h=192&c=7&r=0&o=5&dpr=1.1&pid=1.7",
//     id: 1,
//     title: "Play Station 5",
//     detail: "Consola ultima generacion",
//     price: 250000,
//     category: "Tecnology",
//     stock: 2,
//     discount: 25,
//   },
//   {
//     img: "https://images.samsung.com/is/image/samsung/p5/ar/microsite/bluedays/eoy/images/productos/lavarropas-automatico-frontal-7kg-WW70M2WEUU.jpg?$ORIGIN_JPG$",
//     id: 2,
//     title: "Lavarropas ELA0F2",
//     detail: "Lavarropas 7kg 1000rpm",
//     price: 180000,
//     category: "Appliances",
//     stock: 4,
//   },
 
//   {
//     img: "https://i.pinimg.com/736x/2e/06/27/2e06274a55a0900bb1ff41a9da91c48c--ideas-para.jpg",
//     id: 3,
//     title: "Placard Premium",
//     detail: "2 Puertas 2m x 2m",
//     price: 70000,
//     category: "Furniture",
//     stock: 5,
//   },
//   {
//     img: "https://th.bing.com/th/id/OIP.BwwkwpHMnsr_0dMEqYDKFAHaFB?w=293&h=199&c=7&r=0&o=5&dpr=1.1&pid=1.7",
//     id: 4,
//     title: "Iphone 14 Pro Max",
//     detail: "Celular Apple",
//     price: 420000,
//     category: "Tecnology",
//     stock: 10,
//   },
//   {
//     img: "https://th.bing.com/th/id/OIP.gjhI34bY_lZXJZejmcK38AHaFO?pid=ImgDet&rs=1",
//     id: 5,
//     title: "Nvidia, Geforce rtx 3060",
//     detail: " Built on the 8 nm process, and based on the GA102 graphics processor, in its GA102-200-KD-A1 variant, the card supports DirectX 12 Ultimate.",
//     price: 250000,
//     category: "Tecnology",
//     stock: 10,
//   },

//   {
//     img: "https://th.bing.com/th/id/OIP.ffc9A_ZPTJPNtDUJTmdJOAHaEs?pid=ImgDet&rs=1",
//     id: 6,
//     title: "Xbox Series X",
//     detail: "Consola de Microsoft",
//     price: 200000,
//     category: "Tecnology",
//     stock: 8,
//   },
//   {
//     img: "https://th.bing.com/th/id/R.1c157178b276248b2776ed9cd83f0c9d?rik=yHw6zySMQlVC9g&pid=ImgRaw&r=0",
//     id: 7,
//     title: "Juego de Mesa exterior",
//     detail: "Juego de Mesa Premium 4 sillas ",
//     price: 60000,
//     category: "Furniture",
//     stock: 5,
//   },
//   {
//     img: "https://th.bing.com/th/id/OIP.cFbOVhAUv_Wz-oFR88l4vgHaEK?pid=ImgDet&rs=1",
//     id: 8,
//     title: "Samsung Galaxy S22 Ultra White",
//     detail: "Tiene ina pantalla Super AMOLED Plus de 4.3. La resolución es de 480 x 800 y una densidad de los píxeles de 217 ppi",
//     price: 300000,
//     category: "Tecnology",
//     stock: 12,
//   },
  
// ];

// const obtenerProductos = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       if (resolve(dataProducts));
//     }, 3000);
//   });
// };

// const getSpecificArticle = (idItem) => {
//   return new Promise((resolve) =>{
//   const reqItem = dataProducts.find((articleItem) => {
//     console.log(articleItem.id, idItem)
//     return articleItem.id === Number(idItem);
//   });
  
//     setTimeout(() => {
//       if(reqItem)
//       resolve(reqItem);
//       else alert("Producto no encontrado en la base de datos")
//     }, 3000);
//   });
// };

// const getCategory=(segmento)=>{

//   return new Promise((resolve,rejected)=>{

//     const reqCategory= dataProducts.filter(item=> item.category === segmento);
//     setTimeout(()=>{
//       resolve(reqCategory);
//     },1500)
//   },)
// };
  
   



// export default obtenerProductos;

// export { getSpecificArticle, getCategory };