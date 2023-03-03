import { Router } from "express";
import {
  create,
  deleteOne,
  findAll,
  findOne,
  update,
  filterProducts,
  productsSeed
} from "../controllers/product.controllers";

const router = Router();

router.post("/", create);
router.get("/filters/:gender", filterProducts);
router.get("/", findAll);
router.get("/:id", findOne);
router.patch("/:id", update);
router.delete("/:id", deleteOne);
router.get("/full/seed", productsSeed)

export default router;
