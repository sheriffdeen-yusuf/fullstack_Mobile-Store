import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const EditProduct = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [published, setPublished] = useState(true);

  useEffect(() => {
    const getDataById = async () => {
      const { data } = await axios.get(
        `http://127.0.0.1:8080/api/products/${id}`
      );
      setTitle(data.title);
      setPrice(data.price);
      setDescription(data.description);
      setPublished(data.published);
    };

    getDataById();
  }, [id]);

  const updateHandler = async (e) => {
    e.preventDefault();
    const data = {
      title: title,
      price: price,
      description: description,
      published: published ? true : false,
    };

    await axios.put(`http://127.0.0.1:8080/api/products/${id}`, data);
    console.log("Updated successfully");

    navigate("/products");
  };

  return (
    <>
      <Container className="mt-5 p-3 mb-3">
        <h1>Add Product</h1>
        <hr />
        <Form onSubmit={updateHandler}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Enter title"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Price ($)</Form.Label>
            <Form.Control
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              as="textarea"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="publishCheckedId">
            <Form.Check
              onChange={(e) => setPublished(e.target.checked)}
              type="checkbox"
              label="publish"
            />
            {published ? <small>True</small> : <small>False</small>}
          </Form.Group>

          <Button variant="primary" type="submit">
            Update product
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default EditProduct;
