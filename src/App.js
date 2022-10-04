import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer greeting={'Welcome to the ReactStore'} />}></Route>
        <Route exact path="category/:categoryId" element={<ItemListContainer greeting={'Welcome to the ReactStore'}/>}></Route>
        <Route exact path="item/:id" element={<ItemDetailContainer />}></Route>
        <Route exact path="/cart" element={<Cart/>}></Route>
        <Route exact path="/checkout" element={<Checkout/>}></Route>
        <Route exact path="/account" element={<Checkout/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
