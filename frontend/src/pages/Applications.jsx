import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

<<<<<<< HEAD
const BASE_URL = import.meta.env.VITE_BASE_URL;

const Applications = () => {
    const { user } = useAuth();
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
=======
const Applications = () => {
    const { user } = useAuth();
    const [applications, setApplications] = useState([]);
>>>>>>> 0eae3fb47b97a6e46b253770a4338c51d153bdb1

    useEffect(() => {
        const fetchApplications = async () => {
            try {
<<<<<<< HEAD
                if (!user?.enrollmentNo) return; // Prevent API call if user is undefined
                
                const response = await fetch(`${BASE_URL}/applications/student/${user.enrollmentNo}`);
                if (!response.ok) throw new Error("Failed to fetch applications");

                const data = await response.json();
                console.log("API Response Data:", data); // Debugging
                setApplications(data);
            } catch (error) {
                console.error("Error fetching applications:", error);
            } finally {
                setLoading(false); // Stop loading indicator
            }
        };

        fetchApplications();
    }, [user]);

    if (loading) {
        return <p className="text-center mt-10 text-gray-500">Loading applications...</p>;
    }

    return (
        <div className="max-w-4xl mx-auto mt-20 p-6">
            <h2 className="text-3xl font-bold text-purple-700 mb-6">My Applications</h2>

            {applications.length === 0 ? (
                <p className="text-center text-gray-500">No applications found.</p>
            ) : (
                <div className="grid grid-cols-1 gap-6">
                    {applications.map((app) => (
                        <div key={app.jobId?._id} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-all">
                            <div className="flex justify-between items-center">
                                <h3 className="text-2xl font-semibold text-gray-800">{app.jobId?.title || "N/A"}</h3>
                                <span className={`px-4 py-1 text-sm font-semibold rounded-full ${
                                    app.status === "applied" ? "bg-yellow-100 text-yellow-700" :
                                    app.status === "selected" ? "bg-green-100 text-green-700" :
                                    "bg-red-100 text-red-700"
                                }`}>
                                    {app.status || "N/A"}
                                </span>
                            </div>

                            <p className="text-lg text-gray-600 mt-2">{app.jobId?.company || "N/A"}</p>

                            <div className="flex items-center gap-6 mt-3">
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-500">📍</span>
                                    <p className="text-gray-700">{app.jobId?.location || "N/A"}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-500">💰</span>
                                    <p className="text-green-700 font-semibold">{app.jobId?.salary ? `${app.jobId.salary} LPA` : "N/A"}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
=======
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
>>>>>>> 0eae3fb47b97a6e46b253770a4338c51d153bdb1
        </div>
    );
};

export default Applications;
