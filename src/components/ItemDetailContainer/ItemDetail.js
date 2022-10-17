// import './ItemDetail.css'; 
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from '../ItemCount';
import Card from 'react-bootstrap/Card';
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
      <Card style={{ width: '18rem' }}>
        <Card.Header>
          <Card.Img variant="top" src={product.pictureUrl} />
        </Card.Header>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            Descripcion : {product.description} <br />
            Precio: $ {product.price} <br />
            Stock:{product.stock}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted text-center">
          {showItemCount && <ItemCount initial={0} stock={product.stock} onAdd={handleAdd} />}
          {!showItemCount && (
            <Link to='/cart'>
              <Button variant="success">
                Ir al Carrito
              </Button>
            </Link>
          )}
        </Card.Footer>
      </Card>
    </>
  );
};

export default ItemDetail;