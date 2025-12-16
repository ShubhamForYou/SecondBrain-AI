import express from "express";
const router = express.Router();
import authRoutes from "./auth.route.js";
import contentRoutes from "./content.route.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import shareBrainRoutes from "./shareBrain.route.js";
router.use("/auth", authRoutes);
router.use("/content", authMiddleware, contentRoutes);
router.use("/brain", shareBrainRoutes);

export default router;
