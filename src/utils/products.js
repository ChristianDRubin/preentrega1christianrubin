import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
/*const products = [
  { id: 1, title: "Mercedes Benz", category: "autos", description: "Auto Aleman", stock: 10, price:100, pictureUrl: "https://www.cnet.com/a/img/resize/86d2c574284b5195c507cc8fbd97199f33761f1e/hub/2022/07/18/2addf4c5-4792-4bec-99a2-7b0d6a622d32/2022-mercedes-benz-s500-111.jpg?auto=webp&width=1200" },
  { id: 2, title: "Fiat", category: "autos" , description: "Auto Italiano", stock: 30 ,price:100, pictureUrl: "https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2021/08/522672.jpg" },
  { id: 3, title: "Ford", category: "autos" , description: "Auto Norteamericano", stock: 5, price:100, pictureUrl: "https://cdn.nettiauto.com/live/2022/03/21/649394167557e93c-large.jpg" },
  { id: 4, title: "Harley Davidson", category: "motos" , description: "Auto Norteamericano", stock: 5, price:100, pictureUrl: "https://i.pinimg.com/originals/28/6f/2a/286f2a01d1c1e24345e603dfcb3d24c8.jpg" }
];*/

export const getProducts = () => {
 const database = getFirestore();
  const collectionReference = collection(database, 'items');
  
  return getDocs(collectionReference)
    .then(snapshot => {
      const list = snapshot
        .docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log(list);
      return list;
    })
    .catch(error => console.warn(error))
};


export const getProductById  = (id) => {
  const database = getFirestore();
  const itemReference = doc(database, 'items', id);
  return getDoc(itemReference)
    .then(snapshot => {
      if(snapshot.exists()) {
        const item = {
          id: snapshot.id,
          ...snapshot.data()
        };
        return item;
      }
    })
};

export const getProductsByCategory  = (categoryId) => {
  const database = getFirestore();
  const collectionReference = collection(database, 'items');
  const collectionQuery = query(collectionReference, where('category', '==', categoryId))
  return getDocs(collectionQuery)
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