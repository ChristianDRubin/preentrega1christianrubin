import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
const Counter = () => {
  const [count, setCount] = useState(0);
  const stock = 10; // obtendremos de base esto..
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

  return (
    <div>
      Agregar al carrito: <Button onClick={handleClickSumar} variant="primary"> + </Button><br/>
      Eliminar seleccion: <Button onClick={handleClickRestar} variant="warning"> - </Button><br/>
      <p>Cantidad a agregar: {count}</p>
    </div>
  );
};

export default Counter;