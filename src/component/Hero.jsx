import { FaDownload } from 'react-icons/fa';
import image from '../assets/profile-img.jpeg';
import SocialLinks from '../component/SocialLinks';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
    return (
        <div
            className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 md:mt-12 mt-8 lg:mt-16 px-4 md:px-8 lg:px-20"
        >
            {/* Left Side - Text */}
            <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl font-medium text-white leading-tight">
                    Hello, It's Me
                </h1>
                <h1 className="text-4xl font-medium text-white leading-tight mt-2">
                    Fakhrul Islam Sipon
                </h1>
                <p className="text-lg lg:text-2xl font-medium text-white mt-2">
                    And I'm a <span className='text-xl lg:text-3xl font-semibold text-green-500'>
                        <Typewriter
                            words={['Web Developer']}
                            loop={false}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                    </span>
                    {/* implement typewriter */}

                </p>

                <p className="text-gray-300 mt-4 max-w-lg">
                    I am a Passionate Web Developer skilled in building modern, responsive, and user-friendly websites. Experienced in frontend design, web app development, and creative UI/UX solutions......
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row items-center gap-6">
                    <div>
                        <a
                            href="/resume.pdf"
                            download="Fakhrul_Islam_Sipon_Resume.pdf"
                            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg transition duration-300 font-medium"
                        >
                            <FaDownload className="text-lg" />
                            Download Resume
                        </a>
                    </div>

                    <div className="mt-4 sm:mt-0">
                        <SocialLinks />
                    </div>
                </div>
            </div>

        
            {/* Right Side - Image */}
            <div className="flex-1 flex justify-center md:justify-end">
                <div className="relative w-64 h-64 lg:w-72 lg:h-72">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-300 to-blue-400 p-1.5 shadow-xl hover:shadow-green-300 transition-all duration-500 ease-in-out transform hover:-translate-x-1 hover:scale-[1.20] overflow-hidden backdrop-blur-md">
                        <div className="relative h-full w-full rounded-full bg-gray-800 overflow-hidden">
                            <img
                                src={image}
                                alt="profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;