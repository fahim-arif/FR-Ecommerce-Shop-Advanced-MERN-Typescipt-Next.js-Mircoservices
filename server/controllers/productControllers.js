import Product from "../models/productModel.js";

const getProducts = async (req, res, next) => {
  const response = await Product.find();
  res.json(response);
};

const getProduct = async (req, res, next) => {
  const id = req.params.id;
  const response = await Product.findById(id);
  res.json(response);
};

const postProduct = async (req, res, next) => {
  const { name, image, brandImage, description, brand, price, countInStock } =
    req.body;

  const product = new Product({
    name,
    image,
    brandImage,
    description,
    brand,
    price,
    countInStock,
    user: req.user,
  });

  const createProduct = await product.save();
  res.status(201).json(createProduct);
};

export { getProducts, postProduct, getProduct };
