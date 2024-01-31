import { Router, Request, Response } from "express";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config({ path: "./.env.local" });

const router = Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.get("/api/question/text", async (req: Request, res: Response) => {
  res.send("you requested an answer to a question");
});

export default router;
