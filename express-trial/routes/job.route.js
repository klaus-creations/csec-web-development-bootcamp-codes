import { Router } from "express";
import {
  deleteJob,
  getJobs,
  getSingleJob,
} from "../controllers/job.controller.js";
import { postJob } from "../controllers/job.controller.js";

const jobRouter = Router();

jobRouter.get("/", getJobs);
jobRouter.get("/:jobId", getSingleJob);
jobRouter.post("/new", postJob);
jobRouter.delete("/delete/:jobId", deleteJob);

export default jobRouter;
