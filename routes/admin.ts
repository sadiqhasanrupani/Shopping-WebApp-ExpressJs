import express, { Router } from "express";

// router
const router = Router();

// path handler inbuilt module
import path from "path";

// utils
import rootDir from "../utils/path";

// controllers
import { getAddProduct, postAddProduct } from "../controller/products";
import { ExpressHandlebars } from "express-handlebars";

router.use(
  express.static(
    path.join(path.dirname(process.mainModule?.filename as string), "./public")
  )
);
// router.use(express.static(path.join(path.dirname(process.mainModule?.filename as string), "public")));

router.get("/add-product", getAddProduct);

router.post("/add-product", postAddProduct);

export default router;
