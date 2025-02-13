import express from "express";
import { applyJob, getApplicationsByStudent, updateApplicationStatus, getApplicationsByJob } from "../controllers/applicationController.js";

const router = express.Router();

router.post("/apply", applyJob);
router.get("/student/:studentId", getApplicationsByStudent); // Get applications by student
router.get("/job/:jobId", getApplicationsByJob); // ✅ New Route: Get applications for a job
router.put("/updateStatus", updateApplicationStatus); // ✅ Fixed incorrect route

export default router;
