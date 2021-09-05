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
  const { input } = req.body;
  const { name, image, description, price } = input;
  const product = new Product({
    name: name,
    image: image,
    description: description,
    price: price,
  });
  product.save().then(() => {
    console.log("Product was added to the database");
  });
  res.status(201).json({
    input,
  });
};

export { getProducts, postProduct, getProduct };
