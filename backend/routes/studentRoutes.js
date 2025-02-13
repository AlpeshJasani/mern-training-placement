import express from "express";
import { getStudentByEnrollmentNo, updateStudent } from "../controllers/studentController.js";

const router = express.Router();

router.put("/:enrollmentNo", updateStudent); // Update student details
router.get("/:enrollmentNo", getStudentByEnrollmentNo); // Get student by enrollment no.

export default router;
