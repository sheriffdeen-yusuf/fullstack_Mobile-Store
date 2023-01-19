import axios from "axios";
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [published, setPublished] = useState("");
  const [image, setImage] = useState("");

  async function addProductHandler(e) {
    e.preventDefault();

    // const data = {
    //   title: title,
    //   price: price,
    //   description: description,
    //   published: true,
    // };

    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("published", published);
    formData.append("image", image);

    await axios
      .post("http://127.0.0.1:8080/api/products/addproduct ", formData)
      .then((d) => console.log("Data was posted successfully"));
    navigate("/products");
  }

  return (
    <>
      <Container className="mt-5 p-3 mb-3">
        <h1>Add Product</h1>
        <hr />
        <Form
          onSubmit={addProductHandler}
          method="POST"
          encType="multipart/form-data"
        >
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
              placeholder="Enter some description.... "
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="publishCheckedId">
            <Form.Check
              onChange={(e) => setPublished(e.target.checked)}
              type="checkbox"
              label="publish"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control
              // File filed does not require value attr
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              size="lg"
              name="image"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add Product
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default AddProduct;
