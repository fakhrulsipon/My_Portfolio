import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import ShimmerBorder from './ShimmerBorder'; // তোমার ShimmerBorder ইমপোর্ট করো

const SocialLinks = () => {
    const links = [
        { href: "https://github.com/fakhrulsipon", icon: <FaGithub /> },
        { href: "https://www.linkedin.com/in/yourusername", icon: <FaLinkedin /> },
        { href: "https://www.facebook.com/profile.php?id=100064008810904", icon: <FaFacebook /> }
    ];

    return (
        <div className="flex justify-center md:justify-start items-center gap-6 p-3 rounded-xl">
            {links.map(({ href, icon }, idx) => (
                <ShimmerBorder key={idx} borderWidth={3}>
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors duration-300 text-xl"
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
