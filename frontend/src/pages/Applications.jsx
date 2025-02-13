import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const Applications = () => {
    const { user } = useAuth();
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                // http://localhost:5000/api/applications/student/aaa
                const response = await fetch(`http://localhost:5000/api/applications/student/${user.enrollmentNo}`);
                if (!response.ok) throw new Error("Failed to fetch applications");

                const data = await response.json();
                setApplications(data);
            } catch (error) {
                console.error("Error fetching applications:", error);
            }
        };

        if (user) fetchApplications();
    }, [user]);

    if (applications.length === 0) {
        return <p className='text-center mt-10'>No applications found.</p>;
    }

    return (
        <div className='max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md'>
            <h2 className='text-2xl font-bold mb-4'>My Applications</h2>
            <div className='grid grid-cols-2 gap-4'>
                {applications.map(({ jobId, status }) => (
                    <div key={jobId._id} className='p-4 border rounded shadow-sm'>
                        <h3 className='text-lg font-semibold'>{jobId.title}</h3>
                        <p className='text-gray-600'>{jobId.location}</p>
                        <p className='text-green-600'>💰 {jobId.salary} INR</p>
                        <p className='text-blue-600'>📌 Openings: {jobId.openings}</p>
                        <p className='text-red-500'>🗓 Last Date: {new Date(jobId.lastDate).toLocaleDateString()}</p>
                        <p
                            className={`mt-2 font-semibold ${
                                status === "applied" ? "text-yellow-600" : status === "selected" ? "text-green-600" : "text-red-600"
                            }`}
                        >
                            Status: {status}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Applications;
