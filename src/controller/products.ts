import { Request as Req, Response as Res, NextFunction as Next } from "express";

// models
import Product, { RequestBody } from "../model/product";

export const getAddProduct = (req: Req, res: Res, next: Next) => {
  res.status(200).render("add-products", {
    pageTitle: "Add Products",
    path: "/admin/add-products",
  });
};

export const postAddProduct = (req: Req, res: Res, next: Next) => {
  const body: RequestBody = req.body as RequestBody;
  const products = new Product(body.product_title);
  products.save();
  res.redirect("/");
};

export const getProducts = (req: Req, res: Res, next: Next) => {
  Product.fetchAll((products: Array<string>) => {
    res.status(200).render("shop", {
      pageTitle: "Shop",
      productTitle: products,
      path: "/shop",
    });
  });
};
