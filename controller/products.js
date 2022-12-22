// models
const Product = require("../model/product");

exports.getAddProduct = (req, res, next) => {
  res.status(200).render("add-products", {
    pageTitle: "Add Products",
    path: "/admin/add-products",
  });
};

exports.postAddProduct = (req, res, next) => {
  const products = new Product(req.body.product_title);
  products.save();
  res.redirect("/").render;
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.status(200).render("shop", {
      pageTitle: "Shop",
      productTitle: products,
      path: "/shop",
    });
  });
};

// exports.products = product;
