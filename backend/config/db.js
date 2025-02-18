import mongoose from "mongoose";

const connectDB = async () => {
    try {
<<<<<<< HEAD
        await mongoose.connect(process.env.MONGO_URI); 
=======
        await mongoose.connect(process.env.MONGO_URI); // ✅ Just pass the URI
>>>>>>> 0eae3fb47b97a6e46b253770a4338c51d153bdb1
        console.log("✅ MongoDB Connected");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        process.exit(1);
    }
};

export default connectDB;
