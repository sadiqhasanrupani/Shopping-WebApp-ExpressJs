"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = exports.postAddProduct = exports.getAddProduct = void 0;
// models
const product_1 = __importDefault(require("../model/product"));
const getAddProduct = (req, res, next) => {
    res.status(200).render("add-products", {
        pageTitle: "Add Products",
        path: "/admin/add-products",
    });
};
exports.getAddProduct = getAddProduct;
const postAddProduct = (req, res, next) => {
    const body = req.body;
    const products = new product_1.default(body.text);
    products.save();
    res.redirect("/");
};
exports.postAddProduct = postAddProduct;
const getProducts = (req, res, next) => {
    product_1.default.fetchAll((products) => {
        res.status(200).render("shop", {
            pageTitle: "Shop",
            productTitle: products,
            path: "/shop",
        });
    });
};
exports.getProducts = getProducts;
