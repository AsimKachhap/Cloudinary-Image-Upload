import express from "express";
import { registerUser } from "../controllers/userController.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = express.Router();

router.post("/register", upload.single("avtar"), registerUser);

export default router;
