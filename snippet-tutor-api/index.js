var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import dotenv from "dotenv";
import express from "express";
import OpenAI from "openai";
dotenv.config({ path: "./.env.local" });
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});
const app = express();
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("req", req);
    //   const answer = await openai.chat.completions.create({
    //     messages: [{ role: "system", content: question }],
    //     model: "gpt-3.5-turbo",
    //   });
    //   return answer.choices[0].message.content;
    return "hello world from /";
}));
app.listen(5000, () => {
    console.log("Running on port 5000.");
});
