import { Router } from "express";

// router
const router = Router();

// controller
import shopController from "../controller/shop";

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

router.get("/cart", shopController.getCart);

router.get("/checkout", shopController.getCheckout);

export default router;
