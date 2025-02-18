import mongoose from "mongoose";

<<<<<<< HEAD
const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    branch: { type: [String], required: true, default: ["ALL"] },
    criteria: { 
      cgpa: { type: Number, required: true, min: 0, max: 10 },
      backlogs: { type: Number, required: true, default: 0, min: 0 },
    },
    requirements: { type: [String], required: true },
    salary: { type: Number, required: true, min: 0 }, 
    deadline: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now },
  }
);
=======
const jobSchema = new mongoose.Schema({
    title: String,
    description: String,
    location: String,
    salary: Number,
    openings: Number,
    lastDate: Date,
    applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
});
>>>>>>> 0eae3fb47b97a6e46b253770a4338c51d153bdb1

export default mongoose.model("Job", jobSchema);
