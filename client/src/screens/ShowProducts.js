import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../componets/ProductCard";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductData = async () => {
      const { data } = await axios.get(
        "http://127.0.0.1:8080/api/products/allProduct "
      );
      setProducts(data);
      console.log("Data retrived", data);
    };
    getProductData();
  }, []);

  return (
    <Container className="justify-content-center mt-3 mb-3 p-3">
      <h1 className="text-center"> Show All Product</h1>
      <hr />
      {products.length === 0 ? (
        <h4>The stoke is empty at the moment</h4>
      ) : (
        <Row>
          {products.map((product) => {
            return (
              <>
                <ProductCard product={product} />
              </>
            );
          })}
        </Row>
      )}
    </Container>
  );
};

export default ShowProducts;
