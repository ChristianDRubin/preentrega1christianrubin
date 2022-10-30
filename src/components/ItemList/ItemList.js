import Item from "../Item/Item";
import "./ItemList.css";
const ItemList = ({ products = [] }) => {// setea valores por default

  return (
    <>
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </>
  );
};

export default ItemList;