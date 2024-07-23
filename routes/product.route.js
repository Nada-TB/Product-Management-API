const express = require("express");
const {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProduct,
} = require("../controllers/product.controller.js");
const Router = express.Router();

Router.get("/all", getProducts);
Router.post("/", addProduct);
Router.get("/:id", getProduct);
Router.put("/:id", updateProduct);
Router.delete("/:id", deleteProduct);

module.exports = Router;
