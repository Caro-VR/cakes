import { Link } from 'react-router-dom'

import { Container, Navbar, Nav } from 'react-bootstrap'

export default function Navigation() {
  return (
    <div>
      <Navbar bg="danger" variant="light">
        <Container>
          <Nav>
            <Link to="/" className="text-light text-decoration-none">
            🏠 Home
            </Link>
            <Link to="/contacto" className="text-light pl-4 ms-4 text-decoration-none">
            📒 Contacto
            </Link>
          </Nav>
          <Nav>
            <Navbar.Brand className="text-light">Happy Cake 🍰</Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>
    </div>
    
  );
}
