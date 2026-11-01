import {
  FaArrowRight,
  FaArrowUp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

const CONTACTS = [
  {
    label: "Email",
    value: "fakhrulislamsipon@gmail.com",
    href: "mailto:fakhrulislamsipon@gmail.com",
    icon: FaEnvelope,
    accent: "#FF7E29",
    breakAll: true,
  },
  {
    label: "Phone",
    value: "+8801823461697",
    href: "tel:+8801823461697",
    icon: FaPhoneAlt,
    accent: "#FF5E4B",
  },
  {
    label: "WhatsApp",
    value: "+8801823461697",
    href: "https://wa.me/8801823461697",
    icon: FaWhatsapp,
    accent: "#FF7E29",
    external: true,
  },
  {
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: "https://www.google.com/maps/search/?api=1&query=Dhaka%2C+Bangladesh",
    icon: FaMapMarkerAlt,
    accent: "#FF3E6C",
    external: true,
  },
];

const ContactCard = ({ label, value, href, icon, accent, external, breakAll }) => {
  const Icon = icon;
  return (
  <a
    href={href}
    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    style={{ "--accent": accent }}
    className="group relative block rounded-[1.75rem] bg-gradient-to-br from-slate-200/90 via-slate-200/60 to-slate-200/90 p-px transition-[transform,box-shadow,background] duration-500 ease-out hover:-translate-y-1 hover:from-[#FF7E29]/60 hover:via-[#FF5E4B]/30 hover:to-[#FF3E6C]/60 hover:shadow-[0_24px_50px_-24px_rgba(255,94,75,0.45)] focus-ring"
  >
    <div className="relative flex h-full items-center gap-4 overflow-hidden rounded-[calc(1.75rem-1px)] bg-white px-5 py-5 text-left md:px-6 md:py-6">
      {/* Corner glow that blooms on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "color-mix(in srgb, var(--accent) 22%, transparent)" }}
      />

      {/* Icon tile: tinted at rest, solid gradient on hover */}
      <div
        className="relative grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-2xl border transition-[border-color,box-shadow,transform] duration-500 ease-out group-hover:scale-105 group-hover:border-transparent group-hover:shadow-[0_10px_24px_-8px_var(--accent)]"
        style={{
          borderColor: "color-mix(in srgb, var(--accent) 22%, transparent)",
          background: "color-mix(in srgb, var(--accent) 9%, white)",
        }}
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-[#FF7E29] to-[#FF3E6C] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <Icon className="relative text-xl text-[color:var(--accent)] transition-colors duration-500 group-hover:text-white" />
      </div>

      <div className="relative min-w-0 flex-1">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 transition-colors duration-300 group-hover:text-[color:var(--accent)]">
          {label}
        </p>
        <p
          className={`mt-1 text-base font-semibold text-[#0F172A] md:text-lg ${breakAll ? "break-all" : ""}`}
        >
          {value}
        </p>
      </div>

      <FaArrowRight
        aria-hidden="true"
        className="relative shrink-0 -translate-x-2 text-sm text-slate-300 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:text-[color:var(--accent)] group-hover:opacity-100"
      />
    </div>
  </a>
  );
};

const Footer = () => {
  return (
    <footer className="section-shell pb-8 pt-6 text-[#0F172A] md:pt-10">
      <div className="section-container">
        {/* Heading */}
        <div className="mb-10 text-center">
          <span className="section-badge">📞 DIRECT CONTACT</span>
          <h2 className="mt-1 text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
            Contact Information
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
            Prefer a direct line? Reach me on any of these channels.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {CONTACTS.map((c) => (
            <ContactCard key={c.label} {...c} />
          ))}
        </div>

        {/* Footer bottom */}
        <div className="mx-auto mt-14 max-w-6xl">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/80 to-transparent" />
          <div className="flex flex-col items-center justify-between gap-5 pt-6 md:flex-row">
            <a href="#home" aria-label="Back to top" className="rounded-2xl focus-ring">
              <Logo size="sm" showName />
            </a>

            <SocialLinks />

            <a
              href="#home"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-600 shadow-xs transition duration-300 hover:border-[#FF7E29]/50 hover:text-[#FF7E29] focus-ring"
            >
              Back to top
              <FaArrowUp className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </div>
          <p className="mt-6 text-center text-sm font-medium text-slate-500">
            © {new Date().getFullYear()} Fakhrul Islam Sipon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
