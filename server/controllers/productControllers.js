import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";
import { mail } from "../utils/nodeMailer.js";
import { pdf } from "../utils/pdfkit/pdfkit.js";


const getProducts = async (req, res, next) => {
  const response = await Product.find();


  res.json(response);
};

const getProduct = async (req, res, next) => {
  const id = req.params.id;
  mail(id);
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

const deleteProduct = asyncHandler(async (req, res, next) => {
  const productId = await Product.findById(req.params.id);
  if (productId) {
    await productId.remove();
    res.json({ message: "Product Removed" });
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }
});

const editProduct = asyncHandler(async (req, res, next) => {
  const { name, image, brand, price, category, countInStock, description } =
    req.body;
  const productId = req.params.id;
  const product = await Product.findById(productId);

  if (product) {
    product.name = name;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.price = price;
    product.countInStock = countInStock;
    product.description = description;
  } else {
    res.status(404);
    throw new Erorr("Product Not Found");
  }
  const updatedProduct = await product.save();
  // const prod = await Product.findByIdAndUpdate(productId, {
  //   name: req.body.name,
  // });
  res.status(201).json(updatedProduct);
});
export { getProducts, postProduct, getProduct, editProduct, deleteProduct };
