import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
// import './ItemCount.css';
const Counter = ({ initial, stock, onAdd }) => {

  const [count, setCount] = useState(parseInt(initial));

  const handleClickSumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const handleClickRestar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleClick = () => onAdd(count);

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial])


  return (
    <>
      <div>
        <h5>
          <span>
            <Button variant="danger" disabled={count <= 0} onClick={handleClickRestar}>-</Button>
          </span>
          Cantidad: {count}
          <span>
            <Button variant="success" disabled={count >= stock} onClick={handleClickSumar}>+</Button>
          </span>
        </h5>
      </div>
      <div>
        <Button variant="primary" disabled={stock <= 0} onClick={handleClick}>
          Agregar al  Carrito
        </Button>
      </div>
    </>
  );
};

export default Counter;