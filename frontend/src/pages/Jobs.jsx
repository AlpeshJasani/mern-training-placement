import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/jobs");
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
                    </div>
                ))}
            </div>
        </div>
    );
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
