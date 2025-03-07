import express from "express";
import cors from "cors";

import { PORT } from "./config/env.js";
import connectDB from "./database/db.js";

import jobRouter from "./routes/job.route.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/jobs/", jobRouter);

app.listen(PORT, async function () {
  console.log(`Server running on port ${PORT} port`);
  await connectDB();
});
