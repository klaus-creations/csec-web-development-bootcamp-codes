import { Router } from "express";
import upload from "../middlewares/multer.middleware.js";
import {
  uploadFile,
  uploadMultipleFiles,
} from "../controllers/files.controller.js";

const fileRouter = Router();

fileRouter.post("/upload", upload.single("file"), uploadFile);

fileRouter.post("/uploads", upload.array("files", 5), uploadMultipleFiles);

export default fileRouter;
