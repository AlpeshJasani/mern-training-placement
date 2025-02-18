import express from "express";
<<<<<<< HEAD
import { createJob, getJobs, getJobById, deleteJob ,updateJob} from "../controllers/jobController.js";

const router = express.Router();

router.post("/post", createJob);
router.get("/", getJobs);
router.get("/:id", getJobById);
router.delete("/:id", deleteJob);
router.put("/:id", updateJob);
=======
import { createJob, getJobs, getJobById, deleteJob } from "../controllers/jobController.js";

const router = express.Router();

router.post("/", createJob);
router.get("/", getJobs);
router.get("/:id", getJobById);
router.delete("/:id", deleteJob);
>>>>>>> 0eae3fb47b97a6e46b253770a4338c51d153bdb1

export default router;
