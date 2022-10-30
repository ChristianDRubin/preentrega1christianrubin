import ItemDetail from "../ItemDetailContainer/ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getProductById } from '../../utils/products';



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
    <div className="container mt-5 mb-5 align-items-center cartContainer">
      <h1>Detalle del producto</h1>
      {product && <ItemDetail product={product} />}
    </div>
  );
}

export default ItemDetailContainer;
