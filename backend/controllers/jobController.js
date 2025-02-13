import Job from "../models/Job.js";

export const createJob = async (req, res) => {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json({ message: "Job created successfully" });
};

export const getJobs = async (req, res) => {
    try {
        const jobs = await Job.find().sort({ _id: -1 }); // Sort by _id in descending order (latest first)
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: "Error fetching jobs", error });
    }
};

export const getJobById = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }
        res.json(job);
    } catch (error) {
        res.status(500).json({ message: "Error fetching job", error });
    }
};

export const deleteJob = async (req, res) => {
    // we can delete all application also, that we didn't
    try {
        const job = await Job.findByIdAndDelete(req.params.id);
        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }
        res.json({ message: "Job deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting job", error });
    }
};
