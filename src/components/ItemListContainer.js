import ItemCount from "./ItemCount";
import Container from 'react-bootstrap/Container';
const ItemListContainer = ({ greeting }) => {  
  return (    
      <Container>
        <h1>Productos</h1>
        <h3 className="greeting">{greeting}</h3>
        <ItemCount/>
      </Container>
  );
}

export default ItemListContainer;
