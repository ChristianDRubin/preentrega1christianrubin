import Item from "../Item/Item";
import "./ItemList.css";
const ItemList = ({ products = [] }) => {// setea valores por default

  return (
    <div className="itemList">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;