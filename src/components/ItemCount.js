import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);  
  const stock = 10; // obtendremos de base esto..
  const handleClickSumar = () => {
    if(count < stock){
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
      <button onClick={handleClickSumar}>+</button>
      <button onClick={handleClickRestar}>-</button>      
      <p>Cantidad de productos en el carrito {count}</p>    
    </div>
  );
};

export default Counter;