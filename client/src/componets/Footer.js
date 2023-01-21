import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import brandImg from "../assets/logo192.png";

const Footer = () => {
  return (
    <div style={{ marginTop: "10rem" }}>
      <Navbar bg="dark" variant="dark" fixed="bottom">
        <Container className="p-1 text-white">
          <Row>
            <Col md={8} sm={12}>
              <Nav className="me-auto" style={{ justifyContent: "left" }}>
                <h6>Social Links</h6>
                <Nav.Link href="/">Github</Nav.Link>
                <Nav.Link href="/products">Linkdin</Nav.Link>
                {/* href reloads the page, Link wouuld have handlw the nav react way, 
                but courrently shows error, check it out later */}
                <Nav.Link href="#features">Twitter</Nav.Link>
                <Nav.Link href="#pricing">Facebook</Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
