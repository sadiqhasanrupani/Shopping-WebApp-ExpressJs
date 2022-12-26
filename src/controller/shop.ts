import { Request as Req, Response as Res, NextFunction as Next } from "express";

// models
import Product, { RequestBody } from "../model/product";
import { ProductRenderData, RenderData } from "model/shop";

const shopController = {
  getProducts: (req: Req, res: Res, next: Next) => {
    Product.fetchAll((products: Array<string>) => {
      const ProductData: ProductRenderData = {
        pageTitle: "All Product",
        path: "/products",
        prods: products,
      };
      res.status(200).render("shop/product-list", ProductData);
    });
  },
  getIndex: (req: Req, res: Res, next: Next) => {
    Product.fetchAll((product: Array<string | number>) => {
      const indexData: ProductRenderData = {
        pageTitle: "Shop",
        path: "/",
        prods: product,
      };
      res.status(200).render("shop/index", indexData);
    });
  },
  getCart: (req: Req, res: Res, next: Next) => {
    const cartData: RenderData = {
      pageTitle: "Cart",
      path: "/cart",
    };
    res.status(200).render("shop/cart", cartData);
  },
  getCheckout: (req: Req, res: Res, next: Next) => {
    const checkoutData: RenderData = {
      pageTitle: "Checkout",
      path: "/checkout",
    };
    res.send(200).render("shop/checkout", checkoutData);
  },
};

export default shopController;
