import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

export const getProducts = () => {
  const db = getFirestore();
  const collectionReference = collection(db, 'items');

  return getDocs(collectionReference)
    .then(snapshot => {
      const list = snapshot
        .docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
      return list;
    })
    .catch(error => console.warn(error))
};

export const getProductById = (id) => {
  const db = getFirestore();
  const itemReference = doc(db, 'items', id);
  return getDoc(itemReference)
    .then(snapshot => {
      if (snapshot.exists()) {
        const item = {
          id: snapshot.id,
          ...snapshot.data()
        };
        return item;
      }
    })
};

export const getProductsByCategory = (categoryId) => {
  const db = getFirestore();
  const collectionReference = collection(db, 'items');
  const collectionQuery = query(collectionReference, where('category', '==', categoryId))
  return getDocs(collectionQuery)
    .then(snapshot => {
  	  if (snapshot.size === 0)
          return [];
      const list = snapshot
        .docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
      return list;
    })
    .catch(error => console.warn(error))
};

//SE USA PARA INICIALIZAR LA BASE
// const products = [
//   { title: "Fiat", category: "autos" , description: "Auto Italiano", stock: 30 ,price:100, pictureUrl: "https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2021/08/522672.jpg" },
//   { title: "Ford", category: "autos" , description: "Auto Norteamericano", stock: 5, price:100, pictureUrl: "https://cdn.nettiauto.com/live/2022/03/21/649394167557e93c-large.jpg" },
//   { title: "Harley Davidson", category: "motos" , description: "Auto Norteamericano", stock: 5, price:100, pictureUrl: "https://i.pinimg.com/originals/28/6f/2a/286f2a01d1c1e24345e603dfcb3d24c8.jpg" }
// ]

// export const createAllProducts = async () => {
//   try {
//     // obtenemos la basedatos
//     const database = getFirestore(); 

//     // obtenemos la referencia a la collecion
//     const collectionReference = collection(database, 'items');
//     for(let i = 0; i < products.length; i++) {
//       const snapshot = await addDoc(collectionReference, products[i]);
//     }
//   } catch (error) {
//     console.warn(error)
//   }
// }