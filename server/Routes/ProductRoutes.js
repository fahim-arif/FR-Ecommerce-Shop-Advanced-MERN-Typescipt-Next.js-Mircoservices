import express from "express";
import {
  postProduct,
  getProducts,
  getProduct,
} from "../controllers/productControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", protect, postProduct);

router.get("/:id", getProduct);

export default router;
