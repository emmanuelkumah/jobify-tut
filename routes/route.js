import { Router } from "express";

import {
  getAllJobs,
  getSingleJob,
  updateJob,
  deleteJob,
  createJob,
} from "../controllers/jobControllers.js";

const router = Router();

router.route("/").get(getAllJobs).post(createJob);

router.route("/:id").get(getSingleJob).patch(updateJob).delete(deleteJob);

export default router;
