const express = require("express");
const Product = require("../models/product.model.js");
const app = express();

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
    console.log(products);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "error.message" });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
    console.log(product);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

const addProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res
      .status(201)
      .json({ message: "product created successfully!", newProduct });
    console.log("product created successfully!");
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
    
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).json({ message: "this product doesn't exist" });
    }
    const updatedProduct = await Product.findById(id);
    res
      .status(200)
      .json({ message: "product updated successfully!", updatedProduct });
    console.log("product updated successfully!");
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
   
  }
};
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "we can't delete inexistent product! " });
    }
    const products = await Product.find({});
    res
      .status(200)
      .json({ message: "product deleted successfully!", products });
    console.log("product deleted successfully!");
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
    
  }
};

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  deleteProduct,
  updateProduct,
};
