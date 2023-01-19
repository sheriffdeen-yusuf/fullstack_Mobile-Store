import db from "../models/index.js";

const Review = db.reviews;

// creating functionality

const addReview = async (req, res) => {
  let id = req.params.id;
  let info = {
    product_id: id,
    rating: req.body.rating,
    description: req.body.description,
  };

  const review = await Review.create(info);
  res.status(200).send(review);
};

const getReviews = async (req, res) => {
  const review = await Review.findAll({});
  res.status(200).send(review);
};

export { addReview, getReviews };
