import { getAdmin, loginAdmin } from "../controllers/adminController.js";
import express from "express";

const router = express.Router();

router.get("/:id", getAdmin);
router.post("/admin", loginAdmin);

export default router;
