import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <>
      <Col className="mb-3" md={6} lg={4} sm={12} key={product.id}>
        <Card className="shadow-lg rounded m-2 p-1" style={{ width: "18rem" }}>
          <Card.Img src={`http://127.0.0.1:8080/images/${product.image}`} />
          <Card.Body>
            <Card.Title>Title: {product.title}</Card.Title>
            <Card.Title>Price: {product.price}</Card.Title>
            <Card.Text>Description: {product.description}</Card.Text>
            <Link to={`/product/${product.id}`}>
              <Button variant="secondary">Details</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ProductCard;
