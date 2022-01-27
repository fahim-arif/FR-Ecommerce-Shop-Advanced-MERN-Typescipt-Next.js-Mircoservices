import express from "express";
import {
  postProduct,
  getStoreById,
  deleteProduct,
  editProduct,
  getProductCategory,
  createProductReview,
  allMedicines,
  getProductByStore,
  getProducts,
  getProduct
} from "../controllers/productControllers.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/store/:id", getProducts);
// router.get("/store/:id", getStoreById);

router.get("/all/stores", allMedicines);

router.post("/", protect, postProduct);

router.get("/search", getProductCategory);

router.get("/shop/:id", getProductByStore);

router.get('/:id', getProduct); 

router.route("/:id/reviews").post(protect, createProductReview);

router.delete("/:id", protect, admin, deleteProduct);

router.put("/:id", protect, admin, editProduct);

export default router;
