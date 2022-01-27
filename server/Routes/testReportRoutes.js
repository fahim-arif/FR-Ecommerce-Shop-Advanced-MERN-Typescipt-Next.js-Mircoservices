import express from "express";
import { createReport } from "../controllers/testReportControllers.js";

const router = express.Router();

router.post("/", createReport);

export default router;
