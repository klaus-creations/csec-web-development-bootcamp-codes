import { Router } from "express";

const jobRouter = Router();

jobRouter.get("/", (req, res) => res.send("get jobs"));

export default jobRouter;
