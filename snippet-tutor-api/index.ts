import dotenv from "dotenv";
import express from "express";
import OpenAI from "openai";
import cors from "cors";
import routes from "./routes";

dotenv.config({ path: "./.env.local" });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
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
app.use("/", routes);

app.listen(5000, () => {
  console.log("Running on port 5000.");
});
