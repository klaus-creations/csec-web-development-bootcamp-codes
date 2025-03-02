import jobModel from "../models/job.model";

export const getJobs = async function (req, res) {
  try {
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
};
