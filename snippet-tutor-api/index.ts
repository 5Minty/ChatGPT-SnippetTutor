import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

const corsOptions: cors.CorsOptions = {
  origin: [
    "chrome-extension://llpnobaoedhilpgginocfdfafmieefgk",
    "chrome-extension://idpgdiojcldbnigchifgfbcfiocbfhdo" // Replace with your Chrome Extension's ID for local development
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type",
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use("/", routes);

app.listen(5000, () => {
  console.log("Running on port 5000.");
});
