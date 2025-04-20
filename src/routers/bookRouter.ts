// routers/bookRouter.ts
import { Router } from "express";
import { BookController } from "../controllers/bookController";
import { validateBook } from "../middlewares/validateBook";
import { asyncHandler } from "../utils/asyncHandler"; // Adicione essa importação

const router = Router();
const controller = new BookController();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", validateBook, controller.create);
router.patch("/:id", controller.update);
router.delete("/:id", controller.delete);
router.post("/:id/borrow", controller.borrow);
router.post("/:id/devolve", controller.devolve);
router.post("/:id/lastloan", asyncHandler(controller.lastLoan));



export default router;
