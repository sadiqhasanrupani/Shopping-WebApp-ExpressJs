import express, { Router } from "express";

// router
const router = Router();

// path handler inbuilt module
import path from "path";

// utils
import { publicPath } from "../utils/path";

// controllers
import adminController from "../controller/admin";
// router.use(express.static(path.join(path.dirname(process.mainModule?.filename as string), "public")));
router.use(express.static(publicPath));

// /admin/add-product/ => GET
router.get("/add-product", adminController.getAddProduct);

// /admin/products/ => GET
router.get("/products", adminController.getProducts);

// /admin/products/ => POST
router.post("/add-product", adminController.postAddProduct);

export default router;
