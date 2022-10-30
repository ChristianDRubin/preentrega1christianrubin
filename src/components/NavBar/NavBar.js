import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
  return (
    <Container>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <Navbar.Brand>
                  <br></br>
                  <Link to="/">
                    <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="logo" />
                  </Link>
                </Navbar.Brand>
                <ul className="nav">
                  <li className="scroll-to-section"><Nav.Link as={Link} to="/" className='active'>Home</Nav.Link></li>
                  <li className="scroll-to-section"><Nav.Link as={Link} to="/category/autos">Autos</Nav.Link></li>
                  <li className="scroll-to-section"><Nav.Link as={Link} to="/category/motos">Motos</Nav.Link></li>
                  <li className="scroll-to-section"><CartWidget /></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </Container>
  );
}

export default NavBar;