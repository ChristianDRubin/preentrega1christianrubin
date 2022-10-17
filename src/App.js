import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { CartProvider } from './context/CartContext';
import Loader from './components/Loader';
import { useState, useEffect } from 'react';
import { doc, getFirestore, getDoc } from 'firebase/firestore';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getFirestore();

    const itemReference = doc(db, "items", "ghX3z61aOtBEXmetDIbJ");

    //Obtiene el doc firebase
    getDoc(itemReference)
      .then((snapshot) => {

        const item = {
          id: snapshot.id,
          ...snapshot.data()
        };
        console.log(item)

      })
      .catch(error => console.warn(error));
    setLoading(true);
  }, []);

  return (
    <BrowserRouter basename='/preentrega1christianrubin'>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer greeting={'Welcome to the ReactStore'} />}></Route>
          <Route exact path="category/:categoryId" element={<ItemListContainer greeting={'Welcome to the ReactStore'} />}></Route>
          <Route exact path="item/:id" element={<ItemDetailContainer />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/checkout" element={<Checkout />}></Route>
          <Route exact path="/account" element={<Checkout />}></Route>
        </Routes>
      </CartProvider>
      <Loader loading={loading} />
    </BrowserRouter>
  );
}

export default App;
