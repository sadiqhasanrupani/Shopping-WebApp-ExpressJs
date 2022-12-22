const express = require("express");

// router
const router = express.Router();

// path handler inbuilt module
const path = require("path");

// utils
const rootDir = require("../utils/path");

// controllers
const { getAddProduct, postAddProduct } = require("../controller/products");

router.use(express.static(path.join(rootDir, "public")));

router.get("/add-product", getAddProduct);

router.post("/add-product", postAddProduct);

exports.routes = router;
