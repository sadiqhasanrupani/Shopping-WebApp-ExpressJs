import { Request as Req, Response as Res, NextFunction as Next } from "express";

// models
import Product, { RequestBody } from "../model/product";
import { ProductRenderData } from "../utils/shop";

const adminController = {
  getAddProduct: (req: Req, res: Res, next: Next) => {
    res.status(200).render("admin/add-product", {
      pageTitle: "Add Products",
      path: "/admin/add-product",
    });
  },
  postAddProduct: (req: Req, res: Res, next: Next) => {
    const body: RequestBody = req.body as RequestBody;
    const products = new Product(
      body.title,
      body.imageUrl,
      body.description,
      body.price
    );
    products.save();
    res.redirect("/");
  },
  getProducts: (req: Req, res: Res, next: Next) => {
    Product.fetchAll((product: Array<string | number>) => {
      const productData: ProductRenderData = {
        pageTitle: "Admin Product",
        path: "/admin/products",
        prods: product,
      };
      res.status(200).render("admin/products", productData);
    });
  },
};

export default adminController;
