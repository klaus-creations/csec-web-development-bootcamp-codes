import jobModel from "../models/job.model.js";

export const getJobs = async function (req, res) {
  const { query = "", limit = 10, page = 1 } = req.query;
  const pageNumber = parseInt(page);
  const limitNumber = parseInt(limit);
  const skip = (pageNumber - 1) * limitNumber;

  try {
    let filter = {};

    if (query.trim().length > 0) {
      filter = {
        $or: [
          { title: { $regex: query, $options: "i" } },
          { company: { $regex: query, $options: "i" } },
          { location: { $regex: query, $options: "i" } },
        ],
      };
    }

    const jobs = await jobModel.find(filter).skip(skip).limit(limitNumber);
    res.send({
      success: true,
      data: jobs,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Error happened while getting the jobs" + error.message || error,
    });
  }
};

export const postJob = async function (req, res) {
  console.log(req.file);

  if (!req.file) {
    throw new Error("No file to upload");
  }

  const uploadName = "logo-" + Date.now() + "-" + req.file.originalname;
  const parsedBody = { ...req.body, file: uploadName };
  const {
    title,
    type,
    salary,
    description,
    company,
    file,
    isBookMarked,
    location,
    experienceLevel,
    currency,
  } = parsedBody;

  if (
    !title ||
    !type ||
    !salary ||
    !description ||
    !company ||
    !file ||
    !isBookMarked ||
    !location ||
    !experienceLevel ||
    !currency
  ) {
    throw new Error("Please enter all the required fields");
  }

  if (!req.file) {
    throw new Error("No file to upload");
  }

  await jobModel.create({
    title,
    type,
    salary,
    description,
    company,
    file: req.file.filename,
    isBookMarked,
    location,
    experienceLevel,
    currency,
  });

  res.send({ success: true, message: "new job Posted Successfuly" });
};

export const getSingleJob = async function (req, res) {
  const { jobId } = req.params;

  const job = await jobModel.findById(jobId);

  if (!jobId) {
    res.send({ success: false, message: "No Job with this Id" });
    return;
  }

  res.send({ success: true, data: job });
};

export const deleteJob = async function (req, res) {
  const { jobId } = req.params;

  const job = await jobModel.findById(jobId);

  if (!job) {
    res.send({ success: false, message: "we cant delete non-existing job " });
    return;
  }
  await jobModel.deleteOne(job);

  res.send({
    message: true,
    message: "you successfully delete the job",
  });
};

export const updateJob = async function (req, res) {
  const { jobId } = req.params;
  const updateData = req.body;
  try {
    const updatedJob = await jobModel.findByIdAndUpdate(jobId, updateData, {
      new: true,
    });

    if (!updatedJob) {
      return res.status(404).json({ message: "Job not found" });
    }

    res
      .status(200)
      .json({ message: "Job updated successfully", data: updatedJob });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating job", error: error.message });
  }
};
