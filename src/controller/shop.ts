import { Request as Req, Response as Res, NextFunction as Next } from "express";

// models
import Product, { RequestBody } from "../model/product";
import { ProductRenderData, RenderData, bodyValues} from "model/shop";
import Cart from "../model/cart";

const shopController = {
  getProducts: (req: Req, res: Res, next: Next) => {
    Product.fetchAll((products: Array<string>) => {
      const ProductDatas: ProductRenderData = {
        pageTitle: "All Product",
        path: "/products",
        prods: products,
      };
      res.status(200).render("shop/product-list", ProductDatas);
    });
  },
  getProduct: (req: Req, res: Res, next: Next) => {
    const prodId: string = req.params.prodId;
    Product.findId(prodId, (product: Array<any>) => {
      const productData: ProductRenderData = {
        pageTitle: "Product Detail",
        path: "/products",
        prods: product,
      };
      res.status(201).render("shop/product-detail", productData);
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
  postCart: (req: Req, res: Res, next: Next) => {
    const body: bodyValues = req.body;
    const prodId = body.productId;
  

    Product.findId(prodId, (product: any) => {
      Cart.addProduct(prodId, product.price)
    })
    res.redirect("/cart");
  },
  getOrder: (req: Req, res: Res, next: Next) => {
    const orderData: RenderData = {
      pageTitle: "Orders",
      path: "/order",
    };
    res.status(200).render("shop/order", orderData);
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
