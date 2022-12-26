import { Router } from "express";

// router
const router = Router();

// controller
import { getProducts } from "../controller/products";

router.get("/", getProducts);

export default router;