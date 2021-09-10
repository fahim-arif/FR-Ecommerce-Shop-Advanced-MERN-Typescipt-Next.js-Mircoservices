import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";
const getProducts = async (req, res, next) => {
  const response = await Product.find();
  res.json(response);
};

const getProduct = async (req, res, next) => {
  const id = req.params.id;
  const response = await Product.findById(id);
  res.json(response);
};

const postProduct = asyncHandler(async (req, res, next) => {
  const {
    name,
    brandImage,
    image,
    brand,
    price,
    category,
    description,
    countInStock,
  } = req.body;

  console.log(
    name,
    brandImage,
    image,
    brand,
    price,
    category,
    description,
    countInStock
  );

  const product = new Product({
    name,
    brandImage,
    image,
    brand,
    price,
    category,
    description,
    countInStock,
    user: req.user,
  });

  const createProduct = await product.save();
  res.status(201).json(createProduct);
});

export { getProducts, postProduct, getProduct };
