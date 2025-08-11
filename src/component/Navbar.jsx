
import { Link } from 'react-scroll';

const Navbar = () => {

    const commonLinkProps = {
        smooth: true,
        duration: 500,
        offset: -70,
        activeClass: 'bg-indigo-900 text-yellow-300 font-bold underline rounded-lg shadow-lg',
        className: 'cursor-pointer text-white hover:text-green-400 hover:bg-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl border border-white',
    };


    const Links = (
        <>
            <li>
                <Link to="home" {...commonLinkProps}>
                    Home
                </Link>
            </li>

            <li>
                <Link to="skills" {...commonLinkProps}>
                    Skills
                </Link>
            </li>

            <li>
                <Link to="about" {...commonLinkProps}>
                    About
                </Link>
            </li>

            <li>
                <Link to="projects" {...commonLinkProps}>
                    Projects
                </Link>
            </li>

            <li>
                <Link to="contact" {...commonLinkProps}>
                    Contact
                </Link>
            </li>
        </>
    )
    return (
        <div className="navbar bg-gradient-to-r from-green-500 to-indigo-400 shadow-lg sticky top-0 z-50">
            <div className="navbar-start">
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
                        className="menu menu-sm dropdown-content rounded-lg shadow-lg mt-3 w-56 p-4 gap-3 bg-gradient-to-r from-green-500 to-indigo-400"
                    >
                        {Links}
                    </ul>
                </div>
                <span className=" normal-case text-2xl font-extrabold text-white tracking-wide">
                    Portfolio
                </span>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-6 text-white font-semibold">
                    {Links}
                </ul>
            </div>

            <div className="navbar-end">
                <button className="btn bg-white text-blue-600 font-bold hover:bg-blue-100 transition duration-300">
                    Get Started
                </button>
            </div>
        </div>

    );
};

export default Navbar;