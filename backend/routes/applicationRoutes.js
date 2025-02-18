import express from "express";
<<<<<<< HEAD
import {getApplication, applyJob, getApplicationsByStudent, updateApplicationStatus, getApplicationsByJob } from "../controllers/applicationController.js";

const router = express.Router();

router.get("/", getApplication)
router.post("/apply", applyJob);
router.get("/student/:studentId", getApplicationsByStudent); // Get applications by student
router.get("/job/:jobId", getApplicationsByJob); // New Route: Get applications for a job
router.put("/updateStatus", updateApplicationStatus); //  Fixed incorrect route
=======
import { applyJob, getApplicationsByStudent, updateApplicationStatus, getApplicationsByJob } from "../controllers/applicationController.js";

const router = express.Router();

router.post("/apply", applyJob);
router.get("/student/:studentId", getApplicationsByStudent); // Get applications by student
router.get("/job/:jobId", getApplicationsByJob); // ✅ New Route: Get applications for a job
router.put("/updateStatus", updateApplicationStatus); // ✅ Fixed incorrect route
>>>>>>> 0eae3fb47b97a6e46b253770a4338c51d153bdb1

export default router;
