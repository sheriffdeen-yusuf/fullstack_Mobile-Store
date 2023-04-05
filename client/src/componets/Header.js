import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import brandImg from "../assets/brand-logo.png";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <img
          src={brandImg}
          width="30"
          height="30"
          className="d-inline-block align-top m-1"
          alt="React Bootstrap logo"
        />
        <Navbar.Brand href="#home">Lekenz-Gadgets</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">products</Nav.Link>
            {/* href reloads the page, Link wouuld have handlw the nav react way, 
            but courrently shows error, check it out later */}
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
