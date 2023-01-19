import {
  getAllProduct,
  getOneProduct,
  getPublishedProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductReviews,
  upload,
} from "../controllers/productController.js";

import { Router } from "express";

const router = Router();
router.post("/addProduct", upload, addProduct);

router.get("/allProduct/", getAllProduct);

router.get("/published", getPublishedProduct);

// Get product reviews
router.get("/getProductReviews/:id", getProductReviews);

router.get("/:id", getOneProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;
