import express from "express";
import { itemsprisma } from "../utils/prisma/itemsIndex.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();


export default router;