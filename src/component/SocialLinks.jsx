import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const SocialLinks = () => {
    return (
        <div className="flex justify-center md:justify-start items-center gap-6 p-3 rounded-xl">
            {[{
                href: "https://github.com/fakhrulsipon",
                icon: <FaGithub />
            }, {
                href: "https://www.linkedin.com/in/yourusername",
                icon: <FaLinkedin />
            }, {
                href: "https://www.facebook.com/profile.php?id=100064008810904",
                icon: <FaFacebook />
            }].map(({ href, icon }, idx) => (
                <a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-white
                      p-2
                      text-xl 
                      rounded-full 
                      border-2 border-green-500
                      transition 
                      transform
                      shadow-2xl 
                      hover:shadow-green-700
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
