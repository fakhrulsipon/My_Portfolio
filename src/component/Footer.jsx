import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="text-white pb-8 lg:mt-16 md:mt-12 mt-8 px-4 md:px-8 lg:px-20">
            <div className="max-w-7xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
                    Contact Information
                </h2>

                {/* Contact Cards */}
                <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">

                    {/* Email */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg 
                        rounded-2xl p-6 flex items-center gap-4 hover:shadow-green-400/40 
                        transition-all duration-300 hover:-translate-y-1">
                        <div className="bg-green-100 p-4 rounded-full shadow-inner">
                            <FaEnvelope className="text-green-600 text-2xl" />
                        </div>
                        <span className="font-semibold text-base md:text-lg text-gray-100">
                            fakhrulislamsipon@gmail.com
                        </span>
                    </div>

                    {/* Phone */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg 
                        rounded-2xl p-6 flex items-center gap-4 hover:shadow-green-400/40 
                        transition-all duration-300 hover:-translate-y-1">
                        <div className="bg-green-100 p-4 rounded-full shadow-inner">
                            <FaPhoneAlt className="text-green-600 text-2xl" />
                        </div>
                        <span className="font-semibold text-base md:text-lg text-gray-100">
                            +8801823461697
                        </span>
                    </div>

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/8801823461697"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg 
                     rounded-2xl p-6 flex items-center gap-4 hover:shadow-green-400/40 
                     transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="bg-green-100 p-4 rounded-full shadow-inner">
                            <FaWhatsapp className="text-green-600 text-2xl" />
                        </div>
                        <span className="font-semibold text-base md:text-lg text-gray-100">
                            +8801823461697
                        </span>
                    </a>

                    {/* Location */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg 
                        rounded-2xl p-6 flex items-center gap-4 hover:shadow-green-400/40 
                        transition-all duration-300 hover:-translate-y-1">
                        <div className="bg-green-100 p-4 rounded-full shadow-inner">
                            <FaMapMarkerAlt className="text-green-600 text-2xl" />
                        </div>
                        <span className="font-semibold text-base md:text-lg text-gray-100">
                            Dhaka, Bangladesh
                        </span>
                    </div>
                    </div>






                    {/* Footer bottom */}
                    <div className="mt-8 border-t border-gray-700 pt-4 text-gray-400 text-sm">
                        © {new Date().getFullYear()} Fakhrul Islam Sipon. All rights reserved.
                    </div>
                </div>
        </footer>
    );
};

export default Footer;
