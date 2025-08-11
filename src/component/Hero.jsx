
import { FaDownload } from 'react-icons/fa';
import image from '../assets/profile-img.jpeg'
import SocialLinks from '../component/SocialLinks'

const Hero = () => {
    return (
        <section
            id="hero"
            className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 py-12 px-4 md:px-8 lg:px-20"
        >
            {/* Left Side - Text */}
            <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                    Hi, I’m <span className="text-blue-600">Fakhrul Islam Sipon</span>
                </h1>
                <p className="text-lg lg:text-xl font-semibold text-gray-600 dark:text-gray-300 mt-1">
                    Frontend / MERN Developer
                </p>
                <p className="mt-5 text-gray-700 mx-4 md:mx-0">
                    I am a passionate web developer dedicated to creating beautiful, fast, and user-friendly web applications. I love learning new technologies and solving problems.
                </p>

                {/* Buttons */}
                <div className="">

                    
                  <div>
                    <SocialLinks></SocialLinks>
                  </div>

                   <div>
                     <a
                        href="/resume.pdf"
                        download="Fakhrul_Islam_Sipon_Resume.pdf"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
                    >
                        <FaDownload />
                        Download Resume
                    </a>
                   </div>
                
                </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex justify-center md:justify-end">
                <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-xl border-4 border-blue-600 hover:scale-105 transition-transform duration-300">
                    <img
                        src={image}
                        alt="profile"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;