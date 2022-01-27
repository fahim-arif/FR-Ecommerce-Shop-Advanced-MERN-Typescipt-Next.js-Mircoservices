import Medicine from "../models/medicineModel.js";
import Store from "../models/storeModel.js";
import asyncHandler from "express-async-handler";
import {pdf} from "../utils/pdfkit/pdfkit.js";
import {mailRegister} from "../utils/nodeMailer.js";


const getStoreById = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const response = await Store.findById(id)
  res.json(response)
})

const getProduct = asyncHandler(async (req, res, next) => {
  const id = req.params.id;

  const response = await Medicine.findById(id);
  res.json(response);
});

const getProducts = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const {name} = await Store.findById(id);
  const keyword = req.query.keyword
    ? {
      name: {
        $regex: name,
        $options: "i",
      },
    }
    : {};

  const response = await Medicine.find({...keyword});
  res.json(response);
});

const allMedicines = asyncHandler(async (req, res, next) => {
  const response = await Medicine.find();
  res.json(response);
})

const getProductCategory = asyncHandler(async (req, res, next) => {
  const category = req.query.category;

  const response = await Product.find({category});

  res.json(response);
});

const getProductByStore = async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await Store.findById(id);
    if (!product) {
      return res.json([])
    } else {
      const response = await Medicine.find({store: product.name});
      res.json(response);
    }
  } catch (error) {
    console.log(error)
  }

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
    res.json({message: "Product Removed"});
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }
});

const editProduct = asyncHandler(async (req, res, next) => {
  const {name, image, brand, price, category, countInStock, description} =
    req.body;
  const productId = req.params.id;
  const product = await Medicine.findById(productId);

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

const createProductReview = asyncHandler(async (req, res, next) => {
  const {rating, comment} = req.body;

  const product = await Product.findById(req.params.id);
  if (product) {
    const alreadyReviewed = product.review.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error("Product already reviewed");
    }
    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
      image: req.user.image,
    };
    product.review.push(review);

    product.numReviews = product.review.length;

    product.rating =
      product.review.reduce((acc, item) => item.rating + acc, 0) /
      product.review.length;

    await product.save();
    res.status(201).json({message: "Review Added"});
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }

  const updateProduct = await product.save();
  res.status(201).json(updateProduct);
});

export {
  getProducts,
  getProduct,
  getProductCategory,
  postProduct,
  getProductByStore,
  editProduct,
  deleteProduct,
  createProductReview,
  allMedicines,
  getStoreById
};
