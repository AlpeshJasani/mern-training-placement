import Student from "../models/Student.js";

// Update student details
export const updateStudent = async (req, res) => {
    try {
        const student = await Student.findOneAndUpdate({ enrollmentNo: req.params.enrollmentNo }, req.body, { new: true });
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.json({ message: "Student updated successfully", student });
    } catch (error) {
        res.status(500).json({ message: "Error updating student", error });
    }
};

// Get a specific student by enrollment number
export const getStudentByEnrollmentNo = async (req, res) => {
    try {
        const student = await Student.findOne({ enrollmentNo: req.params.enrollmentNo });
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.json(student);
    } catch (error) {
        res.status(500).json({ message: "Error fetching student", error });
    }
};
