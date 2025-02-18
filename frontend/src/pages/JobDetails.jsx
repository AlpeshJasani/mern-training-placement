import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
<<<<<<< HEAD
import { IndianRupee, Briefcase, Calendar, Users, MapPin, BookOpen } from "lucide-react";


const BASE_URL = import.meta.env.VITE_BASE_URL;
=======
>>>>>>> 0eae3fb47b97a6e46b253770a4338c51d153bdb1

const JobDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [job, setJob] = useState(null);
    const [appliedStudents, setAppliedStudents] = useState([]);
<<<<<<< HEAD
    const { user } = useAuth();
=======
    const { user } = useAuth(); // Get logged-in user info
>>>>>>> 0eae3fb47b97a6e46b253770a4338c51d153bdb1

    useEffect(() => {
        const fetchJob = async () => {
            try {
<<<<<<< HEAD
                const response = await fetch(`${BASE_URL}/jobs/${id}`);
=======
                const response = await fetch(`http://localhost:5000/api/jobs/${id}`);
>>>>>>> 0eae3fb47b97a6e46b253770a4338c51d153bdb1
                if (!response.ok) throw new Error("Failed to fetch job details");
                const data = await response.json();
                setJob(data);
            } catch (error) {
                console.error("Error fetching job details:", error);
            }
        };

        const fetchApplications = async () => {
            try {
<<<<<<< HEAD
                const response = await fetch(`${BASE_URL}/applications/job/${id}`);
=======
                const response = await fetch(`http://localhost:5000/api/applications/job/${id}`);
>>>>>>> 0eae3fb47b97a6e46b253770a4338c51d153bdb1
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
<<<<<<< HEAD
        try {
            const response = await fetch(`${BASE_URL}/applications/apply`, {
=======
        console.log("Sending Application Data:", applicationData);

        try {
            const response = await fetch("http://localhost:5000/api/applications/apply", {
>>>>>>> 0eae3fb47b97a6e46b253770a4338c51d153bdb1
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(applicationData),
            });
<<<<<<< HEAD
            const data = await response.json();
=======

            const data = await response.json();
            console.log("Server Response:", data);
>>>>>>> 0eae3fb47b97a6e46b253770a4338c51d153bdb1
            alert(data.message);
        } catch (error) {
            console.error("Error applying for job:", error);
        }
    };

    const handleDelete = async () => {
        if (!window.confirm("Are you sure you want to delete this job?")) return;
<<<<<<< HEAD
        try {
            const response = await fetch(`${BASE_URL}/jobs/${id}`, { method: "DELETE" });
            if (response.ok) {
                alert("Job deleted successfully!");
                navigate("/jobs");
=======

        try {
            const response = await fetch(`http://localhost:5000/api/jobs/${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                alert("Job deleted successfully!");
                navigate("/jobs"); // Redirect to jobs list
>>>>>>> 0eae3fb47b97a6e46b253770a4338c51d153bdb1
            } else {
                alert("Error deleting job.");
            }
        } catch (error) {
            console.error("Error deleting job:", error);
        }
    };

<<<<<<< HEAD

    const handleEdit = (job, event) => {
        event?.stopPropagation(); // Prevents unwanted event bubbling
        navigate(`/posting/${job._id}`, { state: { job } });
    };
    
    
  
  
    const handleStatusChange = async (studentId, newStatus) => {
        try {
            const response = await fetch(`${BASE_URL}/applications/updateStatus`, {
=======
    const handleStatusChange = async (studentId, newStatus) => {
        try {
            const response = await fetch(`http://localhost:5000/api/applications/updateStatus`, {
>>>>>>> 0eae3fb47b97a6e46b253770a4338c51d153bdb1
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ jobId: id, studentId, status: newStatus }),
            });
<<<<<<< HEAD
=======

>>>>>>> 0eae3fb47b97a6e46b253770a4338c51d153bdb1
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

<<<<<<< HEAD
    if (!job) return <p className='text-center mt-10 text-lg font-semibold text-gray-500'>Loading job details...</p>;

    return (
        <div className='max-w-5xl mx-auto mt-20 p-8 bg-white shadow-lg rounded-lg'>
            {/* Job Header */}
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
                <div>
                    <h2 className='text-4xl font-bold text-purple-700'>{job.title}</h2>
                    <p className='text-gray-600 text-lg flex items-center gap-2'><Briefcase size={20} /> {job.company}</p>
                </div>
                <p className='text-green-600 font-semibold text-lg flex items-center gap-2'>
                    <IndianRupee size={20} className='text-green-500' /> {job.salary} LPA
                </p>
            </div>

            {/* Job Details */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
                <div className='p-5 bg-gray-100 rounded-lg'>
                    <p className='flex items-center gap-2 text-lg'><MapPin size={20} className='text-blue-500' /> Location: {job.location}</p>
                    {/* <p className='flex items-center gap-2 text-lg'><Users size={20} className='text-purple-500' /> Openings: {job.openings}</p> */}
                    <p className='flex items-center gap-2 text-lg'><Calendar size={20} className='text-red-500' /> Deadline: {new Date(job.deadline).toLocaleDateString()}</p>
                </div>
                <div className='p-5 bg-gray-100 rounded-lg'>
                    <h3 className='text-xl font-semibold text-purple-700 flex items-center gap-2'><BookOpen size={20} /> Eligibility Criteria</h3>
                    <p className='text-gray-800'>🎓 CGPA Requirement: {job.criteria.cgpa}+</p>
                    <p className='text-gray-800'>🚫 Max Backlogs: {job.criteria.backlogs}</p>
                    <p className='text-gray-800'>🎯 Eligible Branches: {job.branch.join(", ")}</p>
                </div>
            </div>

            {/* Job Description */}
            <div className='mt-6 p-5 bg-gray-100 rounded-lg'>
                <h3 className='text-xl font-semibold text-purple-700'>Job Description</h3>
                <p className='text-gray-700'>{job.description}</p>
            </div>

            {/* Job Requirements */}
            <div className='mt-6 p-5 bg-gray-100 rounded-lg'>
                <h3 className='text-xl font-semibold text-purple-700'>Requirements</h3>
                <ul className='list-disc ml-6 text-gray-800'>
                    {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                    ))}
                </ul>
            </div>

            {/* Apply/Delete Button */}
            <div className="mt-6 flex justify-between space-x-4">
                {user?.role === "admin" ? (
                    <>
                        <button
                            onClick={handleDelete}
                            className="w-1/2 bg-red-500 text-white p-3 rounded-lg hover:bg-red-600"
                        >
                            Delete Job
                        </button>
                        <button onClick={(e) => handleEdit(job, e)}
                            className="w-1/2 bg-yellow-500 text-white p-3 rounded-lg hover:bg-yellow-600"
                        >
                            Edit Job
                        </button>
                    </>
                ) : (
                    <button
                        onClick={handleApply}
                        className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600"
                    >
                        Apply Now
                    </button>
                )}
            </div>


            {/* Applied Students Table */}
            <h3 className='mt-10 text-2xl font-semibold text-purple-700'>Applied Students</h3>
            {appliedStudents.length > 0 ? (
                <table className='w-full mt-4 border border-gray-300 rounded-lg overflow-hidden'>
                    <thead className='bg-gray-200'>
                        <tr>
                            <th className='border p-3'>Enrollment No</th>
                            <th className='border p-3'>Status</th>
                            {user?.role === "admin" && <th className='border p-3'>Change Status</th>}
=======
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
>>>>>>> 0eae3fb47b97a6e46b253770a4338c51d153bdb1
                        </tr>
                    </thead>
                    <tbody>
                        {appliedStudents.map((student) => (
                            <tr key={student.studentId} className='text-center'>
<<<<<<< HEAD
                                <td className='border p-3'>{student.studentId}</td>
                                <td className='border p-3'>{student.status}</td>
                                {user?.role === "admin" && (
                                    <td className='border p-3'>
                                        <select value={student.status} onChange={(e) => handleStatusChange(student.studentId, e.target.value)} className='p-2 border rounded'>
=======
                                <td className='border p-2'>{student.studentId}</td>
                                <td className='border p-2'>{student.status}</td>
                                {user?.role === "admin" && (
                                    <td className='border p-2'>
                                        <select
                                            value={student.status}
                                            onChange={(e) => handleStatusChange(student.studentId, e.target.value)}
                                            className='p-1 border rounded'
                                        >
>>>>>>> 0eae3fb47b97a6e46b253770a4338c51d153bdb1
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
<<<<<<< HEAD
            ) : <p className='text-center mt-4 text-gray-500'>No applications yet.</p>}
=======
            ) : (
                <p className='text-center mt-4 text-gray-500'>No applications yet.</p>
            )}
>>>>>>> 0eae3fb47b97a6e46b253770a4338c51d153bdb1
        </div>
    );
};

export default JobDetails;
