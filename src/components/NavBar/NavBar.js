import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            E-Commerce Coder
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as = {Link} to="/category/autos">Autos</Nav.Link>
            <Nav.Link as = {Link} to="/category/motos">Motos</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Perfil" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/account">Mi cuenta</NavDropdown.Item>
              <NavDropdown.Item as = {Link} to="/cart">Ver Carrito</NavDropdown.Item>
              <NavDropdown.Item as = {Link} to="/">Cerrar Sesion</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;