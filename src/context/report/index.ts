import express from "express";
const router = express.Router();
import { ProductController } from "./controller";
import { validateAdmin } from "../../middlewares/validateAdmin";
const controller = new ProductController();

router.post("/", validateAdmin, (req, res, next) => {
  controller.getProductReport(req, res, next);
});


export default router;