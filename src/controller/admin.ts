import { Request as Req, Response as Res, NextFunction as Next } from "express";

// models
import Product, { RequestBody } from "../model/product";
import { ProductRenderData } from "../utils/shop";
import { AddProduct, EditProduct } from "utils/admin";

const adminController = {
  getAddProduct: (req: Req, res: Res, next: Next) => {
    const renderData: AddProduct = {
      pageTitle: "Add Product",
      path: "/admin/add-product",
      edit: "false",
    };
    res.status(200).render("admin/edit-product", renderData);
  },
  getEditProduct: (req: Req, res: Res, next: Next) => {
    const editMode: string = req.query.edit as string;

    if (editMode === "false") {
      return res.redirect("/");
    }

    const prodId: string = req.params.prodId;
    Product.findId(prodId, (products: any) => {
      const renderData: EditProduct = {
        pageTitle: "Edit Product",
        path: "/admin/edit-product",
        edit: editMode,
        product: products,
      };
      res.status(200).render("admin/edit-product", renderData);
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
