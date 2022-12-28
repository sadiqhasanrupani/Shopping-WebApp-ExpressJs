import express, { Router } from "express";
import { publicPath } from "../utils/path";

// router
const router = Router();

// controller
import shopController from "../controller/shop";

router.use(express.static(publicPath))

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

router.get("/products/:prodId", shopController.getProduct)

router.get("/cart", shopController.getCart);

router.post("/cart", shopController.postCart);

router.get("/order", shopController.getOrder);

router.get("/checkout", shopController.getCheckout);

export default router;
