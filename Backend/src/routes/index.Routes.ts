import { Router } from "express";
import userRouter from "./user.route"
import categoryRouter from "./category.route"
import productRouter from "./product.route"

const router = Router();

router.use("/users", userRouter)
router.use("/categories", categoryRouter)
router.use("/products", productRouter)
// 

export default router;