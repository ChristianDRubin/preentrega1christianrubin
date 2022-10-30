import { useContext, useState } from "react";
import { Button, Table } from "react-bootstrap";
import './Cart.css';
import { FaTrashAlt } from "react-icons/fa";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import { createOrder } from "../../utils/orders";
import Checkout from "../Checkout/Checkout";

const Cart = () => {
  const { cart, total, removeItem, clear } = useContext(CartContext);
  const [client, setClient] = useState();
  const [showModal, setShowModal] = useState(false);
  const [orderId, setOrderId] = useState();

  const handleRemove = (itemId) => {
    removeItem(itemId);
  }

  const handleOpen = () => setShowModal(true);

  const handleClose = () => setShowModal(false);

  const handleBuy = async (client) => {

    setClient(client);
    const newOrder = {
      buyer: client,
      items: cart,
      total
    };

    const newOrderId = await createOrder(newOrder);
    setOrderId(newOrderId);
    clear();
  }

  const showTable = cart.length > 0

  return (
    <>
      {showTable && (
        <>
          <div className="container mt-5 mb-5 align-items-center cartContainer">
            <h1>Mis Compras</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Titulo</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Accion</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td><FaTrashAlt onClick={() => handleRemove(item.id)} /></td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <h3>Total: $ {total}</h3>
            <Button variant="success" onClick={handleOpen}>Finalizar compra</Button>
          </div>
        </>

      )}
      {!showTable && (
        <div className="container mt-5 mb-5 align-items-center cartContainer">
          <h3>Sin compras realizadas</h3>
          <div>
            <Link to='/'>
              <Button variant="success">Ver catalogo</Button>
            </Link>
          </div>
        </div>
      )}
      <Checkout
        showModal={showModal}
        onClose={handleClose}
        handleBuy={handleBuy}
        setClient={setClient}
        orderId={orderId}
      />
    </>
  );
}

export default Cart;