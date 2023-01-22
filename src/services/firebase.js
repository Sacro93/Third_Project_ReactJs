import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
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
  return snapshot.data();
}

export async function getCategory(categoryUrl) {

  const productsReference = collection(dataBaseFirestore, "products");
//comparador de la consulta
  const q = query(productsReference, where("category", "==", categoryUrl));
  
  const snapshot =await getDocs(q)
  
  const getArticles = snapshot.docs.map((element) => {
    //leo el id y la data de los elementos
    let article = element.data();
    article.id = element.id;
    return article;
  });
  return getArticles
}

export default dataBaseFirestore;
