import { FaDownload } from 'react-icons/fa';
import image from '../assets/portfolio.png';
import SocialLinks from '../component/SocialLinks';
import { Typewriter } from 'react-simple-typewriter';
import ShimmerBorder from './ShimmerBorder';

const Hero = () => {
    const customCss = `
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }

    @keyframes shimmer-spin {
      to {
        --angle: 360deg;
      }
    }
  `;

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
                    And I'm a <span className='text-xl lg:text-3xl font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent'>
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

               <div className='md:flex justify-start items-center mt-6'>

                {/* Buttons */}
                <div className="flex items-center justify-center">

                    <style>{customCss}</style>
                    <a
                        href="/Resume.pdf"
                        download="Fakhrul_Islam_Sipon_Resume.pdf"
                        className="relative inline-flex items-center justify-center p-[2px] rounded-full overflow-hidden group shadow-lg"
                    >
                        {/* Shimmer Background */}
                        <div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background:
                                    'conic-gradient(from var(--angle), transparent 25%, #22d3ee 50%, #a78bfa 75%, transparent 100%)',
                                animation: 'shimmer-spin 2.5s linear infinite',
                            }}
                        />
                        {/* Button Content */}
                        <span className="relative z-10 flex items-center gap-2 px-8 py-3 bg-gray-800 text-white rounded-full group-hover:bg-gray-700 transition-colors duration-300 font-medium">
                            <FaDownload className="text-lg" />
                            Resume
                        </span>
                    </a>
                </div>

                <div className='flex justify-center'>
                    <SocialLinks></SocialLinks>
                </div>

               </div>


                </div>


                {/* Right Side - Image */}
                <div className="flex-1 flex justify-center md:justify-end">
                    <div className="relative">
                        <ShimmerBorder>
                            <img
                                src={image}
                                alt="profile"
                                className="w-full h-full object-cover rounded-full bg-gray-900 p-4"
                            />
                        </ShimmerBorder>
                    </div>
                </div>


            </div>
            );
};

            export default Hero;