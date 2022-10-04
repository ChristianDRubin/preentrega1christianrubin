import Container from 'react-bootstrap/Container';
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../utils/products";



const ItemListContainer = ({ greeting }) => {

  const { categoryId } = useParams();

  //SIEMPRE QUE OBTENGO LOS DATOS DE UN API SE TIENEN QUE GUARDAR EN UN ESTADO
  const [products, setProducts] = useState([]);

  //Se usa un useEffect para traer los datos cuando ya se monta el componente
  useEffect(() => {
    if (categoryId) {
      getProductsByCategory(categoryId)
        .then((data) => setProducts(data))
        .catch(error => console.warn(error));
    }
    else {
      getProducts()
        .then((data) => setProducts(data))
        .catch(error => console.warn(error));
    }

  }, [categoryId]);

  return (
    <Container>
      <h3 className="greeting">{greeting}</h3>
      <ItemList products={products} />
    </Container>
  );
}

export default ItemListContainer;
