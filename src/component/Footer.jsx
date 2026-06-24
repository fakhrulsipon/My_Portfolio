import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="section-shell pb-8 pt-4 text-white">
      <div className="section-container text-center">
        {/* Heading */}
        <h2 className="mb-8 text-4xl font-medium tracking-tight text-white md:text-5xl">
          Contact Information
        </h2>

        {/* Contact Cards */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Email */}
          <div
            className="premium-card flex items-center gap-4 rounded-3xl p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.075]"
          >
            <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 p-4 shadow-inner">
              <FaEnvelope className="text-2xl text-cyan-200" />
            </div>
            <span className="break-all text-base font-semibold text-slate-100 md:text-lg">
              fakhrulislamsipon@gmail.com
            </span>
          </div>

          {/* Phone */}
          <div
            className="premium-card flex items-center gap-4 rounded-3xl p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.075]"
          >
            <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 p-4 shadow-inner">
              <FaPhoneAlt className="text-2xl text-emerald-200" />
            </div>
            <span className="text-base font-semibold text-slate-100 md:text-lg">
              +8801823461697
            </span>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/8801823461697"
            target="_blank"
            rel="noopener noreferrer"
            className="premium-card flex items-center gap-4 rounded-3xl p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.075] focus-ring"
          >
            <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 p-4 shadow-inner">
              <FaWhatsapp className="text-2xl text-emerald-200" />
            </div>
            <span className="text-base font-semibold text-slate-100 md:text-lg">
              +8801823461697
            </span>
          </a>

          {/* Location */}
          <div
            className="premium-card flex items-center gap-4 rounded-3xl p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.075]"
          >
            <div className="rounded-full border border-violet-300/20 bg-violet-300/10 p-4 shadow-inner">
              <FaMapMarkerAlt className="text-2xl text-violet-200" />
            </div>
            <span className="text-base font-semibold text-slate-100 md:text-lg">
              Dhaka, Bangladesh
            </span>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-8 border-t border-white/10 pt-5 text-sm text-slate-500">
          © {new Date().getFullYear()} Fakhrul Islam Sipon. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
