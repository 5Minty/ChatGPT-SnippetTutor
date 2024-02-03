import { Router, Request, Response } from "express";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config({ path: "./.env.local" });

const router = Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post("/api/question/text", async (req: Request, res: Response) => {
  const { question } = req.body;

  console.log("Question: ", question);

  if (!question) {
    return res.status(400).send("No question provided");
  }

  const answer = await openai.chat.completions.create({
    messages: [{ role: "system", content: question }],
    model: "gpt-3.5-turbo",
  });

  console.log("Answer: ", answer.choices[0].message.content);

  res.json(answer.choices[0].message.content);
});

export default router;
