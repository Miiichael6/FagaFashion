import { Router } from "express";
import {
  create,
  seedCategory,
  // deleteOne,
  findAll,
  findOne,
  // update
} from "../controllers/category.controllers";

const router = Router();

router.post("/", create);
router.get("/seed", seedCategory);
router.get("/", findAll);
router.get("/:id", findOne);
// // router.patch("/:id", update)
// router.delete("/:id", deleteOne);

export default router;
