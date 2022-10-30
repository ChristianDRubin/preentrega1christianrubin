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
    <div className="container mydiv">
      <div className="row">
        <section className="jumbotron text-center down">
          <div className="container">
            <h1 className="jumbotron-heading">{greeting}</h1>
            <p className="lead text-muted mb-0">From here you can buy your car are you looking for</p>
          </div>
        </section>
        <ItemList products={products} />
      </div>
    </div>

  );
}

export default ItemListContainer;
