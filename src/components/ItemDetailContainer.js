import Container from 'react-bootstrap/Container';
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getProductById } from '../utils/products';


const ItemDetailContainer = () => {  

  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    getProductById(id)
      .then((data) => {
        setProduct(data);
      })
      .catch(error => console.warn(error));
  }, [id]);

  return (
    <Container>
      <h1>Detalle del producto</h1>
      {product && <ItemDetail product={product} />}
    </Container>
  );
}

export default ItemDetailContainer;
