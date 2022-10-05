import ItemCount from '../ItemCount';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({ product }) => {
  return (
    <>      
      <Card style={{ width: '18rem' }}>
        <Card.Header>
          <Card.Img variant="top" src={product.pictureUrl} />
        </Card.Header>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            Descripcion : {product.description} <br />
            Precio: $ {product.price} <br />
            Stock: $ {product.stock}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted text-center">
          <ItemCount />
        </Card.Footer>
      </Card>      
    </>
  );
};

export default ItemDetail;