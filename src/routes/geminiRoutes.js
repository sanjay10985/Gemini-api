import express from "express";
import { getPropmtResult } from "../controllers/geminiController.js";
import geminiClient from "../lib/geminiClient.js";

const router = express.Router();

router.post("/gemini-prompt", geminiClient, getPropmtResult);

export default router;
