import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext"; // Ensure AuthContext provides user details

const Profile = () => {
    const { user } = useAuth(); // Assuming user object contains role and enrollmentNo
    const [student, setStudent] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (!user?.enrollmentNo || user?.role === "admin") return; // Skip fetching if admin

        const fetchStudent = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/student/${user.enrollmentNo}`);
                if (!response.ok) throw new Error("Failed to fetch student data");

                const data = await response.json();
                setStudent(data);
            } catch (error) {
                console.error("Error fetching student data:", error);
            }
        };

        fetchStudent();
    }, [user?.enrollmentNo, user?.role]);

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleUpdate = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/student/${user.enrollmentNo}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(student),
            });

            if (response.ok) {
                alert("Profile updated successfully!");
                setIsEditing(false);
            } else {
                alert("Error updating profile.");
            }
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    if (user?.role === "admin") {
        return (
            <div className='max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-md'>
                <h2 className='text-2xl font-bold mb-4'>Profile</h2>
                <p className='text-xl font-semibold'>Enrollment Number: {user.enrollmentNo}</p>
                <p className='text-blue-600 text-lg'>You are an admin</p>
            </div>
        );
    }

    if (!student) {
        return <p className='text-center mt-10'>Loading profile...</p>;
    }

    return (
        <div className='max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-md'>
            <h2 className='text-2xl font-bold mb-4'>Profile</h2>
            <div className='space-y-4'>
                {/* Read-only Fields */}
                <div>
                    <label className='block text-sm font-medium'>Full Name</label>
                    <input type='text' name='name' value={student.name || ""} disabled className='w-full p-2 border rounded bg-gray-200' />
                </div>
                <div>
                    <label className='block text-sm font-medium'>Email</label>
                    <input type='email' name='email' value={student.email || ""} disabled className='w-full p-2 border rounded bg-gray-200' />
                </div>
                <div>
                    <label className='block text-sm font-medium'>Enrollment No</label>
                    <input type='text' name='enrollmentNo' value={student.enrollmentNo || ""} disabled className='w-full p-2 border rounded bg-gray-200' />
                </div>

                {/* Editable Fields */}
                {["gender", "graduationYear", "branch", "dob", "phone", "cgpa", "backlogHistory", "liveBacklog", "resumeLink", "linkedinLink"].map((field) => (
                    <div key={field}>
                        <label className='block text-sm font-medium'>{field.replace(/([A-Z])/g, " $1")}</label>
                        <input
                            type={field === "dob" ? "date" : "text"}
                            name={field}
                            value={student[field] || ""}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className={`w-full p-2 border rounded ${isEditing ? "bg-white" : "bg-gray-200"}`}
                        />
                    </div>
                ))}

                {/* Edit / Update Button */}
                <button onClick={() => (isEditing ? handleUpdate() : setIsEditing(true))} className='w-full bg-blue-500 text-white p-2 rounded mt-4'>
                    {isEditing ? "Update" : "Edit"}
                </button>
            </div>
        </div>
    );
};

export default Profile;
