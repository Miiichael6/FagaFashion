import { Router } from "express";
import { create, deleteOne, findAll, findOne, update } from "../controllers/user.controllers";

const router = Router();

router.post("/", create);
router.get("/", findAll);
router.get("/:id", findOne);
router.patch("/:id", update)
router.delete("/:id", deleteOne)

export default router;
