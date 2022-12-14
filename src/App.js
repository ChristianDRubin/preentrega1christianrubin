import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <BrowserRouter basename='/preentrega1christianrubin'>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer greeting={'Welcome to HexaShop'} />}></Route>
          <Route exact path="category/:categoryId" element={<ItemListContainer greeting={'Welcome to HexaShop'} />}></Route>
          <Route exact path="item/:id" element={<ItemDetailContainer />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </CartProvider>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
