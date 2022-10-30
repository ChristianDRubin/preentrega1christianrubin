import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
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
      <div className="container mt-5 mb-5 d-flex justify-content-center align-items-center">
        <h5>
          <span>
            <Button variant="primary" disabled={count <= 0} onClick={handleClickRestar}>-</Button>
          </span>
          {count}
          <span>
            <Button variant="primary" disabled={count >= stock} onClick={handleClickSumar}>+</Button>
          </span>
        </h5>
      </div>
      <div>
        <button className="btn btn-outline-primary px-3 container mt-5 mb-5 d-flex justify-content-center align-items-center" disabled={stock <= 0} onClick={handleClick}>
          Agregar al  Carrito
        </button>
      </div>
    </>
  );
};

export default Counter;