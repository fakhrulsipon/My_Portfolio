import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="section-shell pb-10 pt-4 text-[#0F172A]">
      <div className="section-container text-center">
        {/* Heading */}
        <div className="mb-8 text-center">
          <span className="section-badge">📞 DIRECT CONTACT</span>
          <h2 className="mt-1 text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
            Contact Information
          </h2>
        </div>

        {/* Contact Cards */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Email */}
          <div
            className="premium-card flex items-center gap-4 rounded-3xl bg-white p-6 text-left border border-slate-200/80 shadow-md shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF7E29]/40"
          >
            <div className="rounded-full border border-[#FF7E29]/20 bg-[#FF7E29]/10 p-4 shadow-xs">
              <FaEnvelope className="text-2xl text-[#FF7E29]" />
            </div>
            <span className="break-all text-base font-semibold text-[#0F172A] md:text-lg">
              fakhrulislamsipon@gmail.com
            </span>
          </div>

          {/* Phone */}
          <div
            className="premium-card flex items-center gap-4 rounded-3xl bg-white p-6 text-left border border-slate-200/80 shadow-md shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF7E29]/40"
          >
            <div className="rounded-full border border-[#FF5E4B]/20 bg-[#FF5E4B]/10 p-4 shadow-xs">
              <FaPhoneAlt className="text-2xl text-[#FF5E4B]" />
            </div>
            <span className="text-base font-semibold text-[#0F172A] md:text-lg">
              +8801823461697
            </span>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/8801823461697"
            target="_blank"
            rel="noopener noreferrer"
            className="premium-card flex items-center gap-4 rounded-3xl bg-white p-6 text-left border border-slate-200/80 shadow-md shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF7E29]/40 focus-ring"
          >
            <div className="rounded-full border border-[#FF7E29]/20 bg-[#FF7E29]/10 p-4 shadow-xs">
              <FaWhatsapp className="text-2xl text-[#FF7E29]" />
            </div>
            <span className="text-base font-semibold text-[#0F172A] md:text-lg">
              +8801823461697
            </span>
          </a>

          {/* Location */}
          <div
            className="premium-card flex items-center gap-4 rounded-3xl bg-white p-6 text-left border border-slate-200/80 shadow-md shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF3E6C]/40"
          >
            <div className="rounded-full border border-[#FF3E6C]/20 bg-[#FF3E6C]/10 p-4 shadow-xs">
              <FaMapMarkerAlt className="text-2xl text-[#FF3E6C]" />
            </div>
            <span className="text-base font-semibold text-[#0F172A] md:text-lg">
              Dhaka, Bangladesh
            </span>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-10 border-t border-slate-200 pt-6 text-sm font-medium text-slate-500">
          © {new Date().getFullYear()} Fakhrul Islam Sipon. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
