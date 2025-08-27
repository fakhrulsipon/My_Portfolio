import { FaDownload } from "react-icons/fa";

const Navbar = () => {
    const customCss = `
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }

    @keyframes shimmer-spin {
      to {
        --angle: 360deg;
      }
    }
  `;


    const Links = <>
        <li><a href="/#home">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#skills">Skills</a></li>
        <li><a href="/#projects">Projects</a></li>
        <li><a href="/#contact">Contact</a></li>
    </>

    return (
        <div className="navbar fixed top-0 bg-gray-900 z-50 px-4 md:px-8 lg:px-20">
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

                <div className="flex items-center">
                    <img className="w-14 h-14 rounded-full" src="/img-logo.jpg" alt="" />
                    <h1 className="text-white text-3xl font-semibold hidden md:block">Sipon</h1>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-6 text-white font-medium">
                    {Links}
                </ul>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-6 navbar-end">
                {/* Buttons */}
                <div className="flex items-center justify-center">

                    <style>{customCss}</style>
                    <a
                        href="/Resume.pdf"
                        download="Fakhrul_Islam_Sipon_Resume.pdf"
                        className="relative inline-flex items-center justify-center p-[2px] rounded-full overflow-hidden group shadow-lg"
                    >
                        {/* Shimmer Background */}
                        <div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background:
                                    'conic-gradient(from var(--angle), transparent 25%, #22d3ee 50%, #a78bfa 75%, transparent 100%)',
                                animation: 'shimmer-spin 2.5s linear infinite',
                            }}
                        />
                        {/* Button Content */}
                        <span className="relative z-10 flex items-center gap-2 px-8 py-3 bg-gray-800 text-white rounded-full group-hover:bg-gray-700 transition-colors duration-300 font-medium">
                            <FaDownload className="text-lg" />
                            Resume
                        </span>
                    </a>
                </div>
            </div>


        </div>

    );
};

export default Navbar;