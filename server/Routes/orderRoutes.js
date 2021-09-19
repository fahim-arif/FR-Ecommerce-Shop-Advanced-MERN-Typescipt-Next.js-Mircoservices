import express from "express";
const router = express.Router();

import {
  getMyOrders,
  addOrder,
  getMyOrder,
} from "../controllers/orderControllers.js";

import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(protect, addOrder);

router.route("/myorder").get(protect, getMyOrders);

router.route("/myorder/:id").get(protect, getMyOrder);

export default router;
