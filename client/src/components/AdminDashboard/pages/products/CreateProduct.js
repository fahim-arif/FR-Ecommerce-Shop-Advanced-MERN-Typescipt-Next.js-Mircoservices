import React, { useState } from "react";
import "../users/userCreate.css";
import "./createProduct.css";
const CreateProduct = () => {
  const [productName, setProductName] = useState("");
  const [brand, setBrand] = useState("");
  const [image, setImage] = useState("");
  const [brandImage, setBrandImage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [uploading, setUploading] = useState(false);

  const uploadFileHandler = () => {};
  return (
    <div className='admin_product_create'>
      <div className='admin_product_create_title text-center mb-5 mt-3'>
        Create Product
      </div>
      <form className='admin_create_product_form'>
        <div className='admin_create_product_item'>
          <label>Product Name </label>
          <input
            type='text'
            className='admin_input_field'
            style={{ display: "block" }}
            required
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className='admin_create_product_item'>
          <label>Brand Name</label>
          <input
            className='admin_input_field'
            required
            type='text'
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
        <div className='admin_create_product_item'>
          <label>Brand Image</label>
          <input
            className='admin_input_field'
            onChange={uploadFileHandler}
            type='file'
          />
        </div>
        <div className='admin_create_product_item'>
          <label>Product Price</label>
          <input
            className='admin_input_field'
            onChange={uploadFileHandler}
            required
            type='number'
          />
        </div>
        <div className='admin_create_product_item'>
          <label>Product Image</label>
          <input className='admin_input_field' required type='file' />
        </div>
        <div className='admin_create_product_item'>
          <label>Product Category</label>
          <input
            className='admin_input_field'
            onChange={(e) => setCategory(e.target.value)}
            required
            type='text'
          />
        </div>
        <div className='admin_create_product_item'>
          <label>Product Description</label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            className='admin_textarea'
            required
            type='text'
          />
        </div>
        <div className='admin_create_product_item'>
          <label>Count In Stock</label>
          <input
            onChange={(e) => setCountInStock(e.target.value)}
            className='admin_input_field'
            required
            type='number'
          />
        </div>

        <button type='submit' className='admin_create_new_user_btn'>
          Create Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
