
import aboutLottie from '../assets/about.json'
import Lottie from 'lottie-react';
const About = () => {
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
        <div className='lg:flex lg:justify-center lg:items-center lg:mt-16 md:mt-12 mt-8 px-4 md:px-8 lg:px-20'>

            {/* ✅ Right: Responsive Lottie Animation */}
            <div className="w-full flex-1">
                <Lottie animationData={aboutLottie} loop={true} style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="flex-1 text-gray-300">
                <h1 className="text-3xl md:text-4xl font-medium my-4 text-white tracking-wide">
                    Meet Sipon
                </h1>

                {/* Short Intro */}
                <p className="mb-6 text-lg leading-relaxed text-white">
                    <span className="font-semibold">MERN Stack Developer 🚀</span> |
                    <span className="font-semibold"> Forever Curious Learner 📚</span> |
                    <span className="font-semibold"> Adventurous Soul 🌍</span> |
                    <span className="font-semibold"> Introvert with an Extroverted Heart |</span>
                </p>

                <div className="relative p-1 rounded-xl inline-block w-full max-w-md mx-auto">
                    <style>{customCss}</style>

                    {/* Shimmer border */}
                    <div
                        className="absolute inset-0 rounded-xl pointer-events-none"
                        style={{
                            background: `conic-gradient(from var(--angle), transparent 25%, #22d3ee 50%, #a78bfa 75%, transparent 100%)`,
                            animation: "shimmer-spin 3s linear infinite",
                            mask: `radial-gradient(farthest-side, black calc(100% - 4px), transparent 100%)`,
                            WebkitMask: `radial-gradient(farthest-side, black calc(100% - 4px), transparent 100%)`,
                            filter: "blur(4px)",
                        }}
                    />

                    {/* Card content */}
                    <div className="relative bg-gray-900 rounded-xl p-6 space-y-3 text-gray-300">
                        <p>
                            Hey! I’m <span className="font-semibold ">Fakhrul Islam Sipon</span>, a
                            passionate <span className="font-semibold">MERN stack developer</span> who
                            loves turning ideas into digital experiences.
                        </p>
                        <p>
                            Outside coding, I enjoy football, digital art, and music. I love solving problems and
                            building projects that inspire.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;