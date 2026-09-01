import { Router } from "express";
import authMiddleware from "../middlewares/authenticate.js";
import userController from "../controllers/user.controller.js";

const router = Router();

router.get("/me", authMiddleware.protect, userController.getMyProfile);
router.get(
  "/",
  authMiddleware.protect,
  authMiddleware.isAdmin,
  userController.getAllUsers
);

export default router;
