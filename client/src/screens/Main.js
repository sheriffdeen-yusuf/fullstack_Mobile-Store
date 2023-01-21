import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import bgIMG from "../assets/headset.jpg";
import clockIMG from "../assets/time.png";
import customerIMG from "../assets/customre-care.png";
import brandImg from "../assets/brand-logo.png";

const styles = {
  introSection: {
    backgroundColor: "blue",
    minHeight: "30rem",
    marginLeft: "-3rem",
    marginRight: "-3rem",
    backgroundImage: `url(${bgIMG})`,
    backgroundSize: "cover",
    wrapperText: {
      position: "relative",
      paddingTop: "30%",
      paddingBottom: "20%",
    },
  },
};

const Main = () => {
  return (
    <Container className="">
      <div className="Intro-section" style={styles.introSection}>
        <Row>
          <Col md={6}>
            <div className="mt-5" style={styles.introSection.wrapperText}>
              <h1 class="text-center text-white">Gasby Gadgets Online Store</h1>
              <h3 class="text-center text-white ml-2">
                your number trusted plug for gadgest...
              </h3>
              <hr class="text-white"></hr>

              <Link to="/addProduct">
                <button
                  className="btn btn-info btn-lg mr-3 p-2"
                  style={{ textDecoration: "none" }}
                >
                  Add Product{" "}
                </button>{" "}
              </Link>

              <span className="m-2"></span>
              <Link to="/products">
                <button className="btn btn-warning btn-lg mr-sm-3 p-2">
                  Shop Now
                </button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>

      {/* Card */}
      <Row className="mt-5 mb-5">
        <Col md={4} sm={12} className="p-2">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={clockIMG} />
            <Card.Body>
              <Card.Title>24/7 Services</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={12} className="p-2">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={customerIMG} />
            <Card.Body>
              <Card.Title>Customer First</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={12} className="p-2">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={brandImg} />
            <Card.Body>
              <Card.Title>Products Avaliablity</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* jumbo text */}
      <section className="p-3 bg-secondary mb-5 ">
        <div className="text-center mx-auto mt-2">
          <h3>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </h3>
          <h4>Quality Gadgets, Timely Response, and Get Info...</h4>
          <a href="#" className="btn btn-info btn-lg  mt-4">
            Explore more
          </a>
        </div>
      </section>
    </Container>
  );
};

export default Main;
