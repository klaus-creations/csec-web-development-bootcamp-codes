import { Router } from "express";

import { authorize } from "../middlewares/auth.middleware.js";
import { checkAdmin } from "../middlewares/check-admin.middleware.js";
import upload from "../middlewares/multer.middleware.js";

import {
  deleteJob,
  getJobs,
  getSingleJob,
  postJob,
  updateJob,
} from "../controllers/job.controller.js";

import {
  handleValidationErrors,
  validateJob,
  validateUpdateJob,
} from "../middlewares/validator.js";

const jobRouter = Router();

jobRouter.get("/", getJobs);
jobRouter.get("/:jobId", getSingleJob);
jobRouter.post(
  "/new",
  // validateJob,
  // handleValidationErrors,
  authorize,
  upload.single("file"),
  postJob
);
jobRouter.delete("/delete/:jobId", deleteJob);
jobRouter.put(
  "/update/:jobId",
  validateUpdateJob,
  handleValidationErrors,
  updateJob
);

export default jobRouter;
