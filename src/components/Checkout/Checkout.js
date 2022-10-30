import { Alert, Button, Form, Modal, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Checkout.css';

const Checkout = ({ showModal, onClose, handleBuy, orderId }) => {
    const buyer = {
        name: '',
        phone: '',
        email: ''
    }
    const handleChange = (e) => {
        switch (e.target.name) {
            case "Email": buyer.email = e.target.value;
                break;
            case "Telefono": buyer.phone = e.target.value;
                break;
            case "Nombre": buyer.name = e.target.value;
                break;
            default:
                break;
        }      
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        e.target = '';
    }

    return (
        <Container>
            <Modal show={showModal} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Finalizar comprar, ingresar datos:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => handleSubmit(e, buyer)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="Email" type="email" placeholder="Ingrese email" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Reingresar Email</Form.Label>
                            <Form.Control name="validEmail" type="email" placeholder="Re ingrese email" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control name="Nombre" type="text" placeholder="Ingrese nombre" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control name="Telefono" type="text" placeholder="Ingrese telefono" onChange={handleChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    {!orderId && (
                        <>
                            <Button variant="secondary" onClick={onClose}>
                                Cancelar
                            </Button>
                            <Button variant="primary" onClick={event => handleBuy(buyer)} onSubmit={handleSubmit}>
                                Comprar
                            </Button>
                        </>
                    )}
                    {orderId && (
                        <div className='footerOrderSuccess'>
                            <Alert key='success' variant='success'>
                                Numero de orden: {orderId}
                            </Alert>
                            <Link to='/'>
                                <Button variant="success">
                                    Comprar nuevamente
                                </Button>
                            </Link>
                        </div>
                    )}
                </Modal.Footer>
            </Modal>
        </Container>
    )
}
export default Checkout;