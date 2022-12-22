const express = require("express");

// routes
const routes = express.Router();

// controller
const { getProducts } = require("../controller/products");

routes.get("/", getProducts);

module.exports = routes;
