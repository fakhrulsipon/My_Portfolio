import { FaDownload } from "react-icons/fa";
import Logo from "./Logo";

const Navbar = () => {

  const Links = (
    <>
      <li>
        <a className="rounded-full px-4 py-2 text-sm font-semibold transition duration-300 hover:bg-slate-100 hover:text-[#FF7E29]" href="/#home">Home</a>
      </li>
      <li>
        <a className="rounded-full px-4 py-2 text-sm font-semibold transition duration-300 hover:bg-slate-100 hover:text-[#FF7E29]" href="/#about">About</a>
      </li>
      <li>
        <a className="rounded-full px-4 py-2 text-sm font-semibold transition duration-300 hover:bg-slate-100 hover:text-[#FF7E29]" href="/#skills">Skills</a>
      </li>
      <li>
        <a className="rounded-full px-4 py-2 text-sm font-semibold transition duration-300 hover:bg-slate-100 hover:text-[#FF7E29]" href="/#experience">Experience</a>
      </li>
      <li>
        <a className="rounded-full px-4 py-2 text-sm font-semibold transition duration-300 hover:bg-slate-100 hover:text-[#FF7E29]" href="/#projects">Projects</a>
      </li>
      <li>
        <a className="rounded-full px-4 py-2 text-sm font-semibold transition duration-300 hover:bg-slate-100 hover:text-[#FF7E29]" href="/#contact">Contact</a>
      </li>
    </>
  );

  return (
    <div className="navbar fixed top-0 z-50 border-b border-slate-200/80 bg-white/90 px-4 shadow-[0_4px_25px_rgba(15,23,42,0.05)] backdrop-blur-xl md:px-8 lg:px-20 text-[#0F172A]">
      <div className="navbar-start gap-3">
        {/* Hamburger dropdown for small screens */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost rounded-full border border-slate-200 bg-slate-100/70 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#0F172A]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            onClick={(e) => {
              // DaisyUI dropdowns stay open while focused: blur on link tap so the menu closes
              if (e.target.closest("a")) document.activeElement?.blur();
            }}
            className="menu menu-sm dropdown-content mt-4 w-56 gap-2 rounded-2xl border border-slate-200 bg-white p-4 text-[#0F172A] shadow-xl backdrop-blur-xl"
          >
            {Links}
          </ul>
        </div>

        <a href="/#home" className="flex items-center">
          <Logo size="md" showName={true} />
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal rounded-full border border-slate-200/80 bg-slate-100/60 px-2 text-[#0F172A] shadow-inner shadow-slate-200/40">
          {Links}
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-6 navbar-end">
        {/* Buttons */}
        <div className="flex items-center justify-center">
          <a
            href="/Resume.pdf"
            download="Fakhrul_Islam_Sipon_Resume.pdf"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] shadow-md shadow-[#FF7E29]/25 focus-ring hover:scale-105 transition duration-300"
          >
            {/* Shimmer Background */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from var(--angle), transparent 25%, #FF7E29 50%, #FF3E6C 75%, transparent 100%)",
                animation: "shimmer-spin 2.5s linear infinite",
              }}
            />
            {/* Button Content */}
            <span className="relative z-10 flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF7E29] to-[#FF3E6C] px-6 py-2.5 text-sm font-bold text-white transition duration-300 group-hover:brightness-110 sm:px-8 sm:py-3">
              <FaDownload className="text-lg text-white" />
              Resume
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
