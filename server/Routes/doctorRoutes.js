import express from "express";
const router = express.Router();

import {protect, admin} from "../middleware/authMiddleware.js";

import {
    getDoctorById, getDoctors, createDoctor
} from "../controllers/doctorControllers.js";


router.get("/", getDoctors);
router.post('/', createDoctor);
router.get('/:id', getDoctorById);

export default router;
