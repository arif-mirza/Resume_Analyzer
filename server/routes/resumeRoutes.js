import express from "express";
import multer from "multer";
import { uploadAndAnalyze } from "../controllers/resumeController.js";

const router = express.Router();

// Multer setup (store files in uploads/)
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("resume"), uploadAndAnalyze);

export default router;
