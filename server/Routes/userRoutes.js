import express from "express";
const router = express.Router();

import { protect } from "../middleware/authMiddleware.js";
import {
  authUser,
  getLogin,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js";

router.get("/", getLogin);

router.post("/", authUser);

router
  .route("/profile")
  .get(protect, getUserProfile)
  .patch(protect, updateUserProfile);

router.route("/register").post(registerUser);

export default router;
