import express from "express";
import env from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import productRoutes from "./Routes/ProductRoutes.js";
import connectDB from "./config/db.js";
import userRoutes from "./Routes/userRoutes.js";

import { notFound, errorPageHandler } from "./middleware/errorMiddleware.js";

env.config();

connectDB();
const app = express();

app.use(express.json());

app.use(cors());

app.use("/products", productRoutes);

app.use("/user", userRoutes);
// app.get("/", (req, res, next) => {
//   res.json(products);
// });

app.use(notFound);

app.use(errorPageHandler);

const PORT = process.env.NODE_ENV || 5000;

app.listen(PORT, () => console.log("server is running at 5000"));
