import express from "express";
<<<<<<< HEAD
import { getSelectedApplicants , getStudentByEnrollmentNo, getStudents, updateStudent, getStudentsByBranch } from "../controllers/studentController.js";
import upload from "../middleware/upload.js";
const router = express.Router();


router.get("/", getStudents)
router.get("/selected",getSelectedApplicants )
router.put('/:enrollmentNo', upload.single('resumeLink'), updateStudent); 
router.get("/:enrollmentNo", getStudentByEnrollmentNo); // Get student by enrollment no.
router.get("/branchcount", getStudentsByBranch);


=======
import { getStudentByEnrollmentNo, updateStudent } from "../controllers/studentController.js";

const router = express.Router();

router.put("/:enrollmentNo", updateStudent); // Update student details
router.get("/:enrollmentNo", getStudentByEnrollmentNo); // Get student by enrollment no.
>>>>>>> 0eae3fb47b97a6e46b253770a4338c51d153bdb1

export default router;
