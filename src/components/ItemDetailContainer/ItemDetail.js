import './ItemDetail.css';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from '../ItemCount';
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";

const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const [count, setCount] = useState(0);
  const [showItemCount, setShowItemCount] = useState(true);


  const handleAdd = (value) => {
    setCount(value);
    setShowItemCount(false);
    addItem(product, value);
  };

  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-center align-items-center">
        <div className="card">
          <div className="inner-card">
            <img src={product.pictureUrl} className="img-fluid rounded" alt="" />
            <div className="d-flex justify-content-between align-items-center mt-3 px-2">
              <h4>{product.title} </h4>
              <div className="ribbon ribbon-top-right">
                <span><small className="cross">x </small>{product.stock}</span>
              </div>
            </div>
            <div className="mt-2 px-2">
              <h3>
                Descripcion:{product.description}
              </h3>
            </div>
            <div className="mt-2 px-2">
              <h3>Precio: $ {product.price}</h3>
            </div>
            <div className="mt-2 px-2">
              <small>Stock: {product.stock}</small>
            </div>
            <div className="px-2 mt-3">
              {showItemCount && <ItemCount initial={0} stock={product.stock} onAdd={handleAdd} />}
              {!showItemCount && (
                <Link to='/cart'>
                  <Button variant="success">
                    Ir al Carrito
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;