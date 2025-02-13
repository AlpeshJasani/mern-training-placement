import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const JobDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [job, setJob] = useState(null);
    const [appliedStudents, setAppliedStudents] = useState([]);
    const { user } = useAuth(); // Get logged-in user info

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/jobs/${id}`);
                if (!response.ok) throw new Error("Failed to fetch job details");
                const data = await response.json();
                setJob(data);
            } catch (error) {
                console.error("Error fetching job details:", error);
            }
        };

        const fetchApplications = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/applications/job/${id}`);
                if (!response.ok) throw new Error("Failed to fetch applications");
                const data = await response.json();
                setAppliedStudents(data);
            } catch (error) {
                console.error("Error fetching applications:", error);
            }
        };

        fetchJob();
        fetchApplications();
    }, [id]);

    const handleApply = async () => {
        if (!user) {
            alert("You need to log in first!");
            return;
        }

        const applicationData = { jobId: id, studentId: user.enrollmentNo };
        console.log("Sending Application Data:", applicationData);

        try {
            const response = await fetch("http://localhost:5000/api/applications/apply", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(applicationData),
            });

            const data = await response.json();
            console.log("Server Response:", data);
            alert(data.message);
        } catch (error) {
            console.error("Error applying for job:", error);
        }
    };

    const handleDelete = async () => {
        if (!window.confirm("Are you sure you want to delete this job?")) return;

        try {
            const response = await fetch(`http://localhost:5000/api/jobs/${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                alert("Job deleted successfully!");
                navigate("/jobs"); // Redirect to jobs list
            } else {
                alert("Error deleting job.");
            }
        } catch (error) {
            console.error("Error deleting job:", error);
        }
    };

    const handleStatusChange = async (studentId, newStatus) => {
        try {
            const response = await fetch(`http://localhost:5000/api/applications/updateStatus`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ jobId: id, studentId, status: newStatus }),
            });

            if (response.ok) {
                alert("Status updated successfully!");
                setAppliedStudents((prev) => prev.map((app) => (app.studentId === studentId ? { ...app, status: newStatus } : app)));
            } else {
                alert("Error updating status.");
            }
        } catch (error) {
            console.error("Error updating application status:", error);
        }
    };

    if (!job) return <p className='text-center mt-10'>Loading job details...</p>;

    return (
        <div className='max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md'>
            <h2 className='text-3xl font-bold'>{job.title}</h2>
            <p className='text-gray-600'>{job.location}</p>
            <p className='text-green-600 font-semibold'>💰 Salary: {job.salary} INR</p>
            <p className='text-blue-600'>📌 Openings: {job.openings}</p>
            <p className='text-red-500'>🗓 Last Date: {new Date(job.lastDate).toLocaleDateString()}</p>
            <p className='mt-4'>{job.description}</p>

            {/* Show Apply button for Students, Delete button for Admin */}
            {user?.role === "admin" ? (
                <button onClick={handleDelete} className='mt-6 w-full bg-red-500 text-white p-2 rounded'>
                    Delete Job
                </button>
            ) : (
                <button onClick={handleApply} className='mt-6 w-full bg-green-500 text-white p-2 rounded'>
                    Apply Now
                </button>
            )}

            {/* List of Applied Students */}
            <h3 className='mt-8 text-2xl font-semibold'>Applied Students</h3>
            {appliedStudents.length > 0 ? (
                <table className='w-full mt-4 border-collapse border border-gray-300'>
                    <thead>
                        <tr className='bg-gray-100'>
                            <th className='border p-2'>Enrollment No</th>
                            <th className='border p-2'>Status</th>
                            {user?.role === "admin" && <th className='border p-2'>Change Status</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {appliedStudents.map((student) => (
                            <tr key={student.studentId} className='text-center'>
                                <td className='border p-2'>{student.studentId}</td>
                                <td className='border p-2'>{student.status}</td>
                                {user?.role === "admin" && (
                                    <td className='border p-2'>
                                        <select
                                            value={student.status}
                                            onChange={(e) => handleStatusChange(student.studentId, e.target.value)}
                                            className='p-1 border rounded'
                                        >
                                            <option value='applied'>Applied</option>
                                            <option value='shortlisted'>Shortlisted</option>
                                            <option value='selected'>Selected</option>
                                            <option value='rejected'>Rejected</option>
                                        </select>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className='text-center mt-4 text-gray-500'>No applications yet.</p>
            )}
        </div>
    );
};

export default JobDetails;
