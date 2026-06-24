import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import ShimmerBorder from "./ShimmerBorder"; // তোমার ShimmerBorder ইমপোর্ট করো

const SocialLinks = () => {
  const links = [
    { href: "https://github.com/fakhrulsipon", icon: <FaGithub /> },
    { href: "https://www.linkedin.com/in/yourusername", icon: <FaLinkedin /> },
    {
      href: "https://www.facebook.com/profile.php?id=100064008810904",
      icon: <FaFacebook />,
    },
  ];

  return (
    <div className="flex items-center justify-center gap-4 rounded-xl p-3 md:justify-start">
      {links.map(({ href, icon }, idx) => (
        <ShimmerBorder key={idx} borderWidth={2}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-xl text-white transition duration-300 hover:-translate-y-0.5 hover:bg-slate-900 hover:text-cyan-200 focus-ring"
            aria-label="social link"
          >
            {icon}
          </a>
        </ShimmerBorder>
      ))}
    </div>
  );
};

export default SocialLinks;
