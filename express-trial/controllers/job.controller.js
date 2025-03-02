import jobModel from "../models/job.model.js";

export const getJobs = async function (req, res) {
  try {
    console.log("hello");
    const jobs = await jobModel.find();
    res.send({
      success: true,
      data: jobs,
    });
  } catch (error) {
    res.send({ success: false, message: error.message || error });
  }
};

export const postJob = async function (req, res) {
  const {
    title,
    type,
    salary,
    description,
    company,
    logo,
    isBookMarked,
    location,
    experienceLevel,
    currency,
  } = req.body;

  if (
    !title ||
    !type ||
    !salary ||
    !description ||
    !company ||
    !logo ||
    !isBookMarked ||
    !location ||
    !experienceLevel ||
    !currency
  ) {
    res.send({
      success: false,
      message: "please enter all the required fields",
    });
    return;
  }

  await jobModel.create({
    title,
    type,
    salary,
    description,
    company,
    logo,
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
