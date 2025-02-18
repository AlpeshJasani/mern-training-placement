import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./backend/config/db.js";
import userRoutes from "./backend/routes/userRoutes.js";
import jobRoutes from "./backend/routes/jobRoutes.js";
import applicationRoutes from "./backend/routes/applicationRoutes.js";
import studentRoutes from "./backend/routes/studentRoutes.js";
<<<<<<< HEAD
import AnalyticsRoutes from "./backend/routes/analyticsRoutes.js";
=======
>>>>>>> 0eae3fb47b97a6e46b253770a4338c51d153bdb1

dotenv.config();
connectDB();

const app = express();
<<<<<<< HEAD


=======
>>>>>>> 0eae3fb47b97a6e46b253770a4338c51d153bdb1
app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/student", studentRoutes);
<<<<<<< HEAD
app.use("/api/analytics", AnalyticsRoutes);
=======
>>>>>>> 0eae3fb47b97a6e46b253770a4338c51d153bdb1

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
