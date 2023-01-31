import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSpMVs4PfP2EtGzZSX9agJBhslJS1CjXY",
  authDomain: "proyect-reactjs-sacroisky.firebaseapp.com",
  projectId: "proyect-reactjs-sacroisky",
  storageBucket: "proyect-reactjs-sacroisky.appspot.com",
  messagingSenderId: "267701398868",
  appId: "1:267701398868:web:66c19820f2f306230eecc1",
};

const app = initializeApp(firebaseConfig);
const dataBaseFirestore = getFirestore(app);

//transformo en una promise async
export async function getProducts() {
  const productsReference = collection(dataBaseFirestore, "products");
  const snapshot = await getDocs(productsReference);

  const getArticles = snapshot.docs.map((element) => {
    //leo el id y la data de los elementos
    let article = element.data();
    article.id = element.id;
    //version sugarSyntax
    //const getArticles= snapshot.docs.map((element)=>{...element.data(, id: element.id})

    return article;
  });

  return getArticles;
}

export async function getSpecificArticle(idUrl) {
  const productsReference = collection(dataBaseFirestore, "products");
  const docRef = doc(productsReference, idUrl);
  const snapshot = await getDoc(docRef);
  return { ...snapshot.data(), id: snapshot.id };
}

export async function getCategory(categoryUrl) {

  const productsReference = collection(dataBaseFirestore, "products");
//comparador de la consulta
  const q = query(productsReference, where("category", "==", categoryUrl));
  
  const snapshot =await getDocs(q)
  
  const getArticles = snapshot.docs.map((element) => {
    let article = element.data();
    article.id = element.id;
    return article; 
  });
  return getArticles
}

export async function createOrder(order){

  const orderRef=collection( dataBaseFirestore,"order")
  let respuesta = await addDoc(orderRef,order)
  console.log(respuesta,respuesta.id)
  return respuesta.id

}

//Stock no es obligatorio pero se puede hacer, la funcion esta en la clase 13 1.40horas


//subir productos a firebase ejemplo. se puede realizar con una API?
/*
export async function exportArray(){
  const products=[{},{},{},{},{},{}....]

  for (let item of products){
    delete item.id(por si tiene id)
    addDoc(collection(dataBaseFirestore,"products"),item).then((respuesta)=>
    console.log("item creado:",respuesta.id));

  }
  1.50hs se pueden crear batch ejemplo de profe
}


*/

export default dataBaseFirestore;
