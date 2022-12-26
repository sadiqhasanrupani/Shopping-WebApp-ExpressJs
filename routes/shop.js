"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// router
const router = (0, express_1.Router)();
// controller
const products_1 = require("../controller/products");
router.get("/", products_1.getProducts);
exports.default = router;
