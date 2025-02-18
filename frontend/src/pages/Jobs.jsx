import { useEffect, useState } from "react";
<<<<<<< HEAD
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Briefcase, MapPin, IndianRupee, Calendar, Building2 } from "lucide-react";

const BASE_URL = import.meta.env.VITE_BASE_URL;
=======
import { useNavigate } from "react-router-dom";
>>>>>>> 0eae3fb47b97a6e46b253770a4338c51d153bdb1

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();
<<<<<<< HEAD
    const { user } = useAuth();
=======
>>>>>>> 0eae3fb47b97a6e46b253770a4338c51d153bdb1

    useEffect(() => {
        const fetchJobs = async () => {
            try {
<<<<<<< HEAD
                const response = await fetch(`${BASE_URL}/jobs`);
=======
                const response = await fetch("http://localhost:5000/api/jobs");
>>>>>>> 0eae3fb47b97a6e46b253770a4338c51d153bdb1
                if (!response.ok) throw new Error("Failed to fetch jobs");
                const data = await response.json();
                setJobs(data);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };

        fetchJobs();
    }, []);

    return (
<<<<<<< HEAD
        <div className='max-w-6xl mx-auto mt-20 p-6'>
            {/* Header Section (for admin only) */}
            {user?.role === "admin" && (
                <div className='flex justify-between items-center mb-6'>
                    <h2 className='text-4xl font-extrabold text-gray-800'>Available Jobs</h2>
                    <button 
                        onClick={() => navigate("/posting")} 
                        className='bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300'
                    >
                        ➕ Post New Job
                    </button>
                </div>
            )}
    
            {/* Job Listings */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {jobs.map((job) => (
                    <div 
                        key={job._id} 
                        className='p-6 border rounded-lg shadow-lg bg-gradient-to-r from-white to-gray-100 hover:shadow-xl transition duration-300 transform hover:-translate-y-1 flex flex-col'
                    >
                        <div className='flex items-center gap-3 mb-3'>
                            <Briefcase className='text-blue-600' size={24} />
                            <h3 className='text-2xl font-semibold text-gray-900'>{job.title}</h3>
                        </div>
                        <div className='flex items-center gap-2 text-gray-700 mb-2'>
                            <Building2 className='text-purple-500' size={20} />
                            <span className='text-lg font-medium'>{job.company}</span>
                        </div>
                        <div className='flex items-center gap-2 text-gray-600 mb-2'>
                            <MapPin className='text-red-500' size={20} />
                            <span>{job.location}</span>
                        </div>
                        <div className='flex items-center gap-2 text-green-600 font-medium mb-2'>
                            <IndianRupee className='text-green-500' size={20} />
                            <span>{job.salary} LPA</span>
                        </div>
                        <div className='flex items-center gap-2 text-red-500 font-medium mb-2'>
                            <Calendar className='text-red-500' size={20} />
                            <span>Deadline: {new Date(job.deadline).toLocaleDateString()}</span>
                        </div>
    
                        {/* Make sure the button stays at the bottom */}
                        <div className='mt-auto'>
                            <button 
                                onClick={() => navigate(`/jobs/${job._id}`)} 
                                className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300'
                            >
                                View Details →
                            </button>
                        </div>
=======
        <div className='max-w-6xl mx-auto mt-10 p-4'>
            <h2 className='text-3xl font-bold mb-6 text-center'>Available Jobs</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {jobs.map((job) => (
                    <div key={job._id} className='p-6 border rounded-lg shadow-md bg-white'>
                        <h3 className='text-xl font-bold'>{job.title}</h3>
                        <p className='text-gray-600'>{job.location}</p>
                        <p className='text-green-600 font-semibold'>💰 Salary: {job.salary} INR</p>
                        <p className='text-blue-600'>📌 Openings: {job.openings}</p>
                        <p className='text-red-500'>🗓 Last Date: {new Date(job.lastDate).toLocaleDateString()}</p>
                        <button onClick={() => navigate(`/jobs/${job._id}`)} className='mt-4 w-full bg-blue-500 text-white p-2 rounded'>
                            Details
                        </button>
>>>>>>> 0eae3fb47b97a6e46b253770a4338c51d153bdb1
                    </div>
                ))}
            </div>
        </div>
    );
<<<<<<< HEAD
    
};

export default Jobs;
=======
};

export default Jobs;

// export default function Jobs() {
//     const { user } = useAuth();
//     const [jobs, setJobs] = useState([]);

//     useEffect(() => {
//         axios.get("http://localhost:5000/api/jobs").then(({ data }) => setJobs(data));
//     }, []);

//     const handleApply = async (jobId) => {
//         await axios.post(
//             "http://localhost:5000/api/applications",
//             { job: jobId },
//             {
//                 headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//             }
//         );
//         alert("Applied successfully!");
//     };

//     return (
//         <div className='p-6 bg-black text-white'>
//             <h2 className='text-2xl mb-4'>Job Listings</h2>
//             {jobs.map((job) => (
//                 <div key={job._id} className='border p-4 mb-4'>
//                     <h3 className='text-lg font-bold'>{job.title}</h3>
//                     <p>{job.company}</p>
//                     {user?.role === "student" && (
//                         <button onClick={() => handleApply(job._id)} className='bg-green-500 text-white p-2 mt-2'>
//                             Apply
//                         </button>
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// }
>>>>>>> 0eae3fb47b97a6e46b253770a4338c51d153bdb1
