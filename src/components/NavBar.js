import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import CartWidget from "./CartWidget";
import './CartWidget.css';
const NavBar = () => {
    return (     
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">E-Commerce Coder</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Autos</Nav.Link>
            <Nav.Link href="#pricing">Motos</Nav.Link>
            {/* <NavDropdown title="Categorias" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Ropa Hombre</NavDropdown.Item>              
              <NavDropdown.Item href="#action/3.3">Ropa Mujer</NavDropdown.Item>             
            </NavDropdown> */}
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">Perfil</Nav.Link>             */}
            <NavDropdown title="Perfil" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mi cuenta</NavDropdown.Item>              
              <NavDropdown.Item href="#action/3.2">Ver Carrito<CartWidget /></NavDropdown.Item>             
              <NavDropdown.Item href="#action/3.3">Cerrar Sesion</NavDropdown.Item>             
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>        
      </Container>
    </Navbar>
    );
}

export default NavBar;