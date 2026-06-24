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

  const Links = (
    <>
      <li>
        <a className="rounded-full px-4 py-2 text-sm transition hover:bg-white/10 hover:text-cyan-200" href="/#home">Home</a>
      </li>
      <li>
        <a className="rounded-full px-4 py-2 text-sm transition hover:bg-white/10 hover:text-cyan-200" href="/#about">About</a>
      </li>
      <li>
        <a className="rounded-full px-4 py-2 text-sm transition hover:bg-white/10 hover:text-cyan-200" href="/#skills">Skills</a>
      </li>
      <li>
        <a className="rounded-full px-4 py-2 text-sm transition hover:bg-white/10 hover:text-cyan-200" href="/#projects">Projects</a>
      </li>
      <li>
        <a className="rounded-full px-4 py-2 text-sm transition hover:bg-white/10 hover:text-cyan-200" href="/#contact">Contact</a>
      </li>
    </>
  );

  return (
    <div className="navbar fixed top-0 z-50 border-b border-white/10 bg-slate-950/70 px-4 shadow-[0_10px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl md:px-8 lg:px-20">
      <div className="navbar-start gap-3">
        {/* Hamburger dropdown for small screens */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost rounded-full border border-white/10 bg-white/5 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
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
            className="menu menu-sm dropdown-content mt-4 w-56 gap-2 rounded-2xl border border-white/10 bg-slate-950/95 p-4 text-white shadow-2xl backdrop-blur-xl"
          >
            {Links}
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <img className="h-11 w-11 rounded-full border border-white/15 object-cover shadow-lg shadow-cyan-950/30" src="/logo.jpg" alt="" />
          <h1 className="hidden text-3xl font-semibold tracking-tight text-white md:block">
            Sipon
          </h1>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal rounded-full border border-white/10 bg-white/[0.04] px-2 text-white/90 shadow-inner shadow-white/5">
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
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] shadow-lg shadow-cyan-950/30 focus-ring"
          >
            {/* Shimmer Background */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from var(--angle), transparent 25%, #22d3ee 50%, #a78bfa 75%, transparent 100%)",
                animation: "shimmer-spin 2.5s linear infinite",
              }}
            />
            {/* Button Content */}
            <span className="relative z-10 flex items-center gap-2 rounded-full bg-slate-950 px-6 py-2.5 text-sm font-semibold text-white transition duration-300 group-hover:bg-slate-900 group-hover:text-cyan-100 sm:px-8 sm:py-3">
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
