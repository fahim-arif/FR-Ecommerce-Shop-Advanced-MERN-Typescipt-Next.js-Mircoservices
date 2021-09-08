import express from "express";
import env from "dotenv";
import cors from "cors";
import path from "path";
import colors from "colors";
import productRoutes from "./Routes/ProductRoutes.js";
import connectDB from "./config/db.js";
import userRoutes from "./Routes/userRoutes.js";
import uploadRoutes from "./Routes/uploadRoutes.js";

import { notFound, errorPageHandler } from "./middleware/errorMiddleware.js";

env.config();

connectDB();
const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/products", productRoutes);

app.use("/api/user", userRoutes);

app.use("/uploads", uploadRoutes);
// app.get("/", (req, res, next) => {
//   res.json(products);
// });
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(notFound);

app.use(errorPageHandler);

const PORT = process.env.NODE_ENV || 5000;

app.listen(PORT, () => console.log("server is running at 5000"));
