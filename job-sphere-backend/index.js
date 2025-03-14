import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { PORT } from "./config/env.js";
import connectDB from "./database/db.js";

import jobRouter from "./routes/job.route.js";
import authRouter from "./routes/auth.route.js";

import errorMiddleware from "./middlewares/error.middleware.js";
import fileRouter from "./routes/files.routes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/jobs/", jobRouter);
app.use("/api/auth/", authRouter);
app.use("/avatars", express.static(path.join(__dirname, "public/avatars")));

app.use("/api/", fileRouter);

app.use(errorMiddleware);

app.listen(PORT, async function () {
  console.log(`Server running on port ${PORT} port`);
  await connectDB();
});
