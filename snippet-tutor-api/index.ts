import dotenv from "dotenv";
import express from "express";
import OpenAI from "openai";
import cors from "cors";
import { Request, Response } from "express";

dotenv.config({ path: "./.env.local" });

const allowedOrigins = [
  "chrome-extension://llpnobaoedhilpgginocfdfafmieefgk",
  // Add other origins as needed
];

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const app = express();

const corsOptions: cors.CorsOptions = {
  origin: [
    "chrome-extension://llpnobaoedhilpgginocfdfafmieefgk", // Replace with your Chrome Extension's ID for local development
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type",
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.get("/", async (req: Request, res: Response) => {
  res.send("hello world from sas /");
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});
