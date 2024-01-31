import { Router, Request, Response } from "express";

const router = Router();

router.get("/api/question/text", async (req: Request, res: Response) => {
  res.send("hello world from sas /");
});

export default router;
