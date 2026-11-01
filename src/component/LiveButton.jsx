import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

/**
 * Full-width "View Live Site" call-to-action pinned to the bottom of a project card.
 * Gradient hairline border at rest; fills with the brand gradient on hover.
 */
const LiveButton = ({ href, label = "View Live Site" }) => (
  <div className="mt-auto w-full pt-4">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/live block w-full rounded-full bg-gradient-to-r from-[#FF7E29] via-[#FF5E4B] to-[#FF3E6C] p-px shadow-[0_8px_20px_-10px_rgba(255,94,75,0.55)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-12px_rgba(255,62,108,0.6)] active:translate-y-0 focus-ring"
    >
      <span className="relative flex h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-5 text-sm font-semibold text-[#0F172A] transition-colors duration-300 group-hover/live:bg-transparent group-hover/live:text-white">
        <FaExternalLinkAlt className="text-xs text-[#FF7E29] transition-colors duration-300 group-hover/live:text-white" />
        {label}
        <FaArrowRight className="text-xs transition-transform duration-300 ease-out group-hover/live:translate-x-1" />
      </span>
    </a>
  </div>
);

export default LiveButton;
