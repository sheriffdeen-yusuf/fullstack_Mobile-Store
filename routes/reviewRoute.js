import { addReview, getReviews } from "../controllers/reviewController.js";
import express from "express";

const router = express.Router();

router.post("/addReview/:id", addReview);
router.get("/getReviews", getReviews);

export default router;
