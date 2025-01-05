import Job from "../models/JobModel.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../errors/customerErrors.js";
export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.json({ jobs });
};

export const createJob = async (req, res) => {
  const { company, position } = req.body;

  const job = await Job.create({ company, position });
  res.status(StatusCodes.CREATED).json({ job });
};

export const getSingleJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id);
  if (!job) throw new NotFoundError(`Job ${id} not found`);
  res.status(StatusCodes.OK).json({ job });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;
  const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedJob) {
    return res.status(400).json({ msg: `cannot find job with id ${id}` });
  }

  res.status(StatusCodes.OK).json({ msg: `job modified`, job: updatedJob });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const deletedJob = await Job.findByIdAndDelete(id);
  if (!deleteJob) {
    return res.status(400).json({ msg: `cannot find job with id ${id}` });
  }

  res.status(StatusCodes.OK).json({ msg: `job deleted`, job: deletedJob });
};
