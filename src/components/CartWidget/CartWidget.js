import './CartWidget.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from "../../context/CartContext";
import { Badge } from 'react-bootstrap';

const CartWidget = () => {
  const { totalquantity } = useContext(CartContext);
  return (
    <>
      <Link to="/cart">
        <AiOutlineShoppingCart />{totalquantity > 0 && (
          <Badge pill bg="danger">{totalquantity}</Badge>
        )}
      </Link>
    </>
  );
}

export default CartWidget;
