import express from "express";
import {
  postProduct,
  getProducts,
  getProduct,
  deleteProduct,
  editProduct,
} from "../controllers/productControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", protect, postProduct);

router.route("/:id").delete(deleteProduct).put(editProduct).get(getProduct);

export default router;
