import { useAuth } from "../context/AuthContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Mobile menu icons

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    // Function to check if a link is active
    const isActive = (path) => location.pathname === path;

    return (
        <>
            {/* Sticky Navbar */}
            <nav className='fixed top-0 left-0 w-full z-50 bg-gray-900 text-white shadow-md'>
                <div className='container mx-auto flex justify-between items-center py-3 px-6'>
                    {/* Left: Logo */}
                    <Link to='/' className='text-xl font-semibold tracking-wide'>
                        SCET T&P Portal
                    </Link>

                    {/* Center: Main Nav Links */}
                    <ul className='hidden md:flex space-x-6 text-base font-light'>
                        <li>
                            <Link to='/' className={`transition ${isActive("/") ? "text-blue-400 font-medium" : "hover:text-blue-400"}`}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/jobs' className={`transition ${isActive("/jobs") ? "text-blue-400 font-medium" : "hover:text-blue-400"}`}>
                                Jobs
                            </Link>
                        </li>
                        {user?.role === "admin" ? (
                            <li>
                                <Link to='/dashboard' className={`transition ${isActive("/dashboard") ? "text-blue-400 font-medium" : "hover:text-blue-400"}`}>
                                    Dashboard
                                </Link>
                            </li>
                        ) : user?.role === "student" ? (
                            <li>
                                <Link
                                    to='/applications'
                                    className={`transition ${isActive("/applications") ? "text-blue-400 font-medium" : "hover:text-blue-400"}`}
                                >
                                    My Applications
                                </Link>
                            </li>
                        ) : null}
                    </ul>

                    {/* Right: Profile/Auth Links */}
                    <div className='hidden md:flex space-x-5 items-center'>
                        {user ? (
                            <>
                                <Link to='/profile' className={`transition ${isActive("/profile") ? "text-blue-400 font-medium" : "hover:text-blue-400"}`}>
                                    Profile
                                </Link>
                                <button onClick={handleLogout} className='bg-red-500 px-3 py-1.5 rounded-md text-white text-sm hover:bg-red-600 transition'>
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to='/register' className={`transition ${isActive("/register") ? "text-blue-400 font-medium" : "hover:text-blue-400"}`}>
                                    Register
                                </Link>
                                <Link to='/login' className='bg-blue-500 px-4 py-1.5 rounded-md text-white text-sm hover:bg-blue-600 transition'>
                                    Login
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button className='md:hidden text-2xl' onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className='md:hidden bg-gray-800 text-center py-4 space-y-4'>
                        <Link
                            to='/'
                            className={`block ${isActive("/") ? "text-blue-400 font-medium" : "hover:text-blue-400"}`}
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to='/jobs'
                            className={`block ${isActive("/jobs") ? "text-blue-400 font-medium" : "hover:text-blue-400"}`}
                            onClick={() => setMenuOpen(false)}
                        >
                            Jobs
                        </Link>
                        {user?.role === "admin" ? (
                            <Link
                                to='/dashboard'
                                className={`block ${isActive("/dashboard") ? "text-blue-400 font-medium" : "hover:text-blue-400"}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                Dashboard
                            </Link>
                        ) : user?.role === "student" ? (
                            <Link
                                to='/applications'
                                className={`block ${isActive("/applications") ? "text-blue-400 font-medium" : "hover:text-blue-400"}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                My Applications
                            </Link>
                        ) : null}
                        {user ? (
                            <>
                                <Link
                                    to='/profile'
                                    className={`block ${isActive("/profile") ? "text-blue-400 font-medium" : "hover:text-blue-400"}`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Profile
                                </Link>
                                <button
                                    onClick={() => {
                                        handleLogout();
                                        setMenuOpen(false);
                                    }}
                                    className='block w-full text-red-400 hover:text-red-500'
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to='/register'
                                    className={`block ${isActive("/register") ? "text-blue-400 font-medium" : "hover:text-blue-400"}`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Register
                                </Link>
                                <Link to='/login' className='block bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600' onClick={() => setMenuOpen(false)}>
                                    Login
                                </Link>
                            </>
                        )}
                    </div>
                )}
            </nav>

            {/* Push down content to prevent overlap */}
            <div className='h-8 md:h-10'></div>
        </>
    );
};

export default Navbar;
