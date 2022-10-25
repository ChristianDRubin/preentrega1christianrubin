// import { useState } from "react";
import { Alert, Button, Form, Modal, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Checkout.css';

const Checkout = ({ showModal, onClose, onBuy, orderId }) => {
    // const { order, setOrder} = useState();
    // function newOrder (){
    //     const order = {
    //         name: 'coderhouse',
    //         phone: '1122334455',
    //         email: 'coderhouse@mail.com'
    //       };
    // }
   
    return (
        <Container>
            <Modal show={showModal} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Finalizar comprar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="Email" type="email" placeholder="Ingrese email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Reingresar Email</Form.Label>
                        <Form.Control name="remail" type="email" placeholder="Re ingrese email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control name="Nombre" type="text" placeholder="Ingrese nombre" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control name="Telefono" type="text" placeholder="Ingrese telefono" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    {!orderId && (
                        <>
                            <Button variant="secondary" onClick={onClose}>
                                Cancelar
                            </Button>
                            <Button variant="primary" onClick={onBuy}>
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