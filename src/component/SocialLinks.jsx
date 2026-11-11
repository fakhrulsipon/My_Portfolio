import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import ShimmerBorder from "./ShimmerBorder";

const SocialLinks = () => {
  const links = [
    { label: "GitHub", href: "https://github.com/fakhrulsipon", icon: <FaGithub /> },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/fakhrul-islam-sipon55/",
      icon: <FaLinkedin />,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100064008810904",
      icon: <FaFacebook />,
    },
  ];

  return (
    <div className="flex items-center justify-center gap-4 rounded-xl p-3 md:justify-start">
      {links.map(({ label, href, icon }) => (
        <ShimmerBorder key={label} borderWidth={2}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl text-[#0F172A] transition duration-300 hover:-translate-y-0.5 hover:bg-slate-100 hover:text-[#FF7E29] focus-ring"
            aria-label={`Fakhrul Islam Sipon on ${label}`}
          >
            {icon}
          </a>
        </ShimmerBorder>
      ))}
    </div>
  );
};

export default SocialLinks;
