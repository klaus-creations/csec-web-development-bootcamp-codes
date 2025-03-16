import mongoose from "mongoose";

const jobSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required "],
    },
    type: {
      type: String,
      required: true,
      enum: ["Full-time", "Part-time", "Contract", "Internship"],
    },
    salary: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
    isBookMarked: {
      type: Boolean,
      default: false,
    },
    location: {
      type: String,
      required: true,
    },
    experienceLevel: {
      type: String,
      required: true,
      enum: ["Entry Level", "Mid Level", "Senior Level"],
    },
    currency: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const jobModel = mongoose.model("Job", jobSchema);

export default jobModel;
