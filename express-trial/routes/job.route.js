import { Router } from "express";
import { getJobs } from "../controllers/job.controller";
import { postJob } from "../controllers/job.controller";

const jobRouter = Router();

jobRouter.get("/", getJobs);
jobRouter.post("/new", postJob);

export default jobRouter;
