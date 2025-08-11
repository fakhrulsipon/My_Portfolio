import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const SocialLinks = () => {
    return (
        <div className="flex justify-center md:justify-start items-center gap-6 p-3 rounded-xl">
            {[{
                href: "https://github.com/yourusername",
                icon: <FaGithub />
            }, {
                href: "https://www.linkedin.com/in/yourusername",
                icon: <FaLinkedin />
            }, {
                href: "https://twitter.com/yourusername",
                icon: <FaTwitter />
            }, {
                href: "https://facebook.com/yourusername",
                icon: <FaFacebook />
            }].map(({ href, icon }, idx) => (
                <a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-green-700
                      p-3
                      text-2xl 
                      rounded-full 
                      border-2 border-green-500
                      transition 
                      transform 
                      hover:scale-[1.4] 
                      shadow-xl 
                      hover:shadow-slate-700
                      duration-300
                      ease-in-out
                    "
                    aria-label="social link"
                >
                    {icon}
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
