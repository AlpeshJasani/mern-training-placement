import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: String,
    description: String,
    location: String,
    salary: Number,
    openings: Number,
    lastDate: Date,
    applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
});

export default mongoose.model("Job", jobSchema);
