import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="text-white pb-8 lg:mt-16 md:mt-12 mt-8 px-4 md:px-8 lg:px-20">
            <div className="max-w-7xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
                    Contact Information
                </h2>

                {/* Contact Details */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-lg">
                    {/* Email */}
                    <div className="flex items-center gap-3">
                        <FaEnvelope className="text-green-400 text-2xl" />
                        <span>fakhrulislamsipon@gmail.com</span>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-3">
                        <FaPhoneAlt className="text-green-400 text-2xl" />
                        <span>01823461697</span>
                    </div>

                    {/* WhatsApp (optional) */}
                    <div className="flex items-center gap-3">
                        <FaWhatsapp className="text-green-400 text-2xl" />
                        <span>01823461697</span>
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
