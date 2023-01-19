import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Card, Button, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [reviews, setReviews] = useState([]);
  const [published, setPublished] = useState(true);
  const [productImage, setProductImage] = useState("");
  //   for raring and escription
  const [rating, setRating] = useState(0);
  const [reviewDescription, setReviewDescription] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getSingleProduct = async () => {
      const { data } = await axios.get(
        `http://127.0.0.1:8080/api/products/getProductReviews/${id}`
      );
      setTitle(data.title);
      setPrice(data.price);
      setDescription(data.description);
      setPublished(data.published);
      setProductImage(data.image);

      //   for reviews
      setReviews(data.reviews);
    };
    getSingleProduct();
  }, [id]);

  // Delete Product
  const handleDelete = async (id) => {
    await axios.delete(`http://127.0.0.1:8080/api/products/${id}`);
    alert("Product has be deleted");
    navigate("/products");
  };

  //   add review
  const addReviewHandler = async (e) => {
    e.preventDefault();

    const data = {
      product_id: id,
      rating: rating,
      description: reviewDescription,
    };
    await axios
      .post(`http://127.0.0.1:8080/api/reviews/addReview/${id}`, data)
      .then(() => alert("Review addeed! "));

    navigate(`/product/${id}`);
  };

  return (
    <>
      <Container>
        <h1> Product Details</h1>
        <hr />
        <Card className="shadow-lg rounded m-2 p-1" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Img src={`http://127.0.0.1:8080/images/${productImage}`} />
            <Card.Title>Title: {title}</Card.Title>
            <Card.Title>Price: {price}</Card.Title>
            <Card.Text>Description: {description}</Card.Text>
            <Card.Text>
              Publishedd:{" "}
              {published ? <small>True</small> : <small>False</small>}
            </Card.Text>
            <br />
            <h3>Reviews: </h3>
            {reviews.length > 0 ? (
              reviews.map((review) => {
                return (
                  <p key={review.id}>
                    Rating: {review.rating}
                    <br />
                    {review.description}
                  </p>
                );
              })
            ) : (
              <p>No review for this product yet</p>
            )}
            <Link to={`/product/edit/${id}`}>
              <Button variant="success" className="p-2 m-1">
                Edit
              </Button>
            </Link>

            <Button
              variant="danger"
              className="p-2 m-1"
              onClick={() => handleDelete(id)}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      </Container>
      {/* section for Add product review */}
      <Container className="mt-5 p-2 mb-3">
        <h2>Add Review </h2>
        <hr />
        <Form onSubmit={addReviewHandler}>
          <Form.Group className="mb-3" controlId="rating">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              type="number"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={reviewDescription}
              onChange={(e) => setReviewDescription(e.target.value)}
              type="text"
              placeholder="Enter review desciption..."
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add Review
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default ProductDetails;
