import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
// require('dotenv').config();

const BASE_URL = import.meta.env.VITE_BASE_URL;

=======
>>>>>>> 0eae3fb47b97a6e46b253770a4338c51d153bdb1

const Login = () => {
    const [enrollmentNo, setEnrollmentNo] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
<<<<<<< HEAD
            const response = await fetch(`${BASE_URL}/users/login`, {
=======
            const response = await fetch("http://localhost:5000/api/users/login", {
>>>>>>> 0eae3fb47b97a6e46b253770a4338c51d153bdb1
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ enrollmentNo, password }),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.message);

            login({ enrollmentNo, role: data.role }, data.token);
            navigate(data.role === "admin" ? "/dashboard" : "/jobs");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className='flex items-center justify-center min-h-screen'>
            <form onSubmit={handleLogin} className='p-6 bg-white shadow-md rounded-md'>
                <h2 className='text-2xl font-bold mb-4'>Login</h2>
                {error && <p className='text-red-500'>{error}</p>}
                <input
                    type='text'
                    placeholder='Enrollment No'
                    value={enrollmentNo}
                    onChange={(e) => setEnrollmentNo(e.target.value)}
                    required
                    className='w-full p-2 border rounded mb-2'
                />
                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className='w-full p-2 border rounded mb-2'
                />
                <button type='submit' className='w-full bg-blue-500 text-white p-2 rounded'>
                    Login
                </button>
                <p className='mt-3'>
                    Don't have an account?{" "}
                    <a href='/register' className='text-blue-500'>
                        Register
                    </a>
                </p>
            </form>
        </div>
    );
};

export default Login;
