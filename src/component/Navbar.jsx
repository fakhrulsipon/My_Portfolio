import { FaDownload } from "react-icons/fa";
import Logo from '../logo/Logo'

const Navbar = () => {

    const Links = <>
        <li><a href="/#home">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#skills">Skills</a></li>
        <li><a href="/#projects">Projects</a></li>
        <li><a href="/#contact">Contact</a></li>
    </>

    return (
        <div className="navbar fixed top-0 bg-gradient-to-r from-green-500 to-indigo-400 shadow-lg z-50 px-4 md:px-8 lg:px-20">
            <div className="navbar-start gap-3">
                {/* Hamburger dropdown for small screens */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-lg shadow-lg mt-4 w-56 p-4 gap-3 bg-gradient-to-r from-green-500 to-indigo-400 text-xl text-white border"
                    >
                        {Links}
                    </ul>
                </div>
                
                <div>
                    <img className="w-12 h-12" src="/profile-logo.png" alt="" />
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-6 text-white font-medium text-xl">
                    {Links}
                </ul>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-6 navbar-end">
                <div>
                    <a
                        href="/resume.pdf"
                        download="Fakhrul_Islam_Sipon_Resume.pdf"
                        className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg transition duration-300 font-medium text-xl"
                    >
                        <FaDownload className="text-sm" />
                         Resume
                    </a>
                </div>
            </div>


            </div>

            );
};

            export default Navbar;