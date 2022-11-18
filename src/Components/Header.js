import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
function Header() {
  return (
    


 
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Services</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Contacts</Nav.Link>
            <Nav.Link href="#link">Company</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <NavDropdown title="Hire" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Developers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Developers
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Developers Master</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Developers link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Header;
