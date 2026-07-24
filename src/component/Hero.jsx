import { FaDownload } from "react-icons/fa";
import image from "../assets/sipon.png";
import SocialLinks from "../component/SocialLinks";
import { Typewriter } from "react-simple-typewriter";
import ShimmerBorder from "./ShimmerBorder";
import { motion as Motion } from "framer-motion";

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
    <div className="section-shell">
      <div className="section-container flex flex-col-reverse items-center justify-between gap-8 pt-6 pb-4 md:pt-10 md:pb-6 lg:flex-row lg:gap-12 lg:pt-12 lg:pb-8">
      {/* Left Side - Text */}
      <Motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-lg font-semibold leading-tight text-[#FF7E29] md:text-xl">
          Hello, It's Me
        </h1>
        <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
          Fakhrul Islam Sipon
        </h1>
        <p className="mt-3 text-lg font-medium text-[#1E293B] sm:text-xl md:text-2xl">
          And I'm a{" "}
          <span className="text-xl font-bold bg-gradient-to-r from-[#FF7E29] via-[#FF5E4B] to-[#FF3E6C] bg-clip-text text-transparent sm:text-2xl md:text-3xl">
            <Typewriter
              words={["Full Stack Developer"]}
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

        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 md:mx-0 md:text-lg">
          I am a Passionate Full Stack Developer skilled in building modern,
          responsive, and user-friendly websites. Experienced in frontend
          design, web app development, and creative UI/UX solutions......
        </p>

        <div className="mt-8 items-center justify-center gap-4 md:flex md:justify-start">
          {/* Buttons */}
          <div className="flex items-center justify-center">
            <style>{customCss}</style>
            <a
              href="/Resume.pdf"
              download="Fakhrul_Islam_Sipon_Resume.pdf"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] shadow-lg shadow-[#FF7E29]/30 focus-ring hover:scale-105 transition duration-300"
            >
              {/* Shimmer Background */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from var(--angle), transparent 25%, #FF7E29 50%, #FF3E6C 75%, transparent 100%)",
                  animation: "shimmer-spin 2.5s linear infinite",
                }}
              />
              {/* Button Content */}
              <span className="relative z-10 flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF7E29] to-[#FF3E6C] px-8 py-3 font-semibold text-white transition duration-300 group-hover:brightness-110">
                <FaDownload className="text-lg text-white" />
                Resume
              </span>
            </a>
          </div>

          <div className="flex justify-center">
            <SocialLinks></SocialLinks>
          </div>
        </div>
      </Motion.div>

      {/* Right Side - Image */}
      <Motion.div
        className="flex flex-1 justify-center md:justify-end"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
      >
        <div className="relative flex items-center justify-center">
          {/* Multi-layered Pulsing Radial Ambient Glow */}
          <Motion.div
            className="absolute -inset-10 rounded-full bg-gradient-to-tr from-[#FF7E29]/25 via-[#FF5E4B]/15 to-[#FF3E6C]/25 blur-3xl pointer-events-none"
            animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating Glass Badge - Top Right */}
          <Motion.div
            className="absolute -right-4 top-6 z-20 hidden sm:flex items-center gap-2 rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-2 text-xs font-semibold text-[#0F172A] shadow-xl backdrop-blur-md"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF7E29] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF7E29]"></span>
            </span>
            <span className="bg-gradient-to-r from-[#FF7E29] to-[#FF3E6C] bg-clip-text text-transparent font-bold">
              Full Stack Dev
            </span>
          </Motion.div>

          {/* Floating Glass Badge - Bottom Left */}
          <Motion.div
            className="absolute -left-6 bottom-8 z-20 hidden sm:flex items-center gap-2 rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-2 text-xs font-semibold text-[#0F172A] shadow-xl backdrop-blur-md"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-base">🚀</span>
            <span className="font-bold text-[#0F172A]">MERN & Next.js</span>
          </Motion.div>

          {/* Outer Glass Ring Frame */}
          <div className="relative rounded-full p-3 bg-gradient-to-br from-white/90 via-slate-100/70 to-white/90 border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl">
            <ShimmerBorder borderWidth={2.5}>
              <div className="relative overflow-hidden rounded-full bg-gradient-to-br from-slate-50 to-white p-3 shadow-inner">
                <img
                  src={image}
                  alt="Fakhrul Islam Sipon Profile"
                  className="h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96 rounded-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </ShimmerBorder>
          </div>
        </div>
      </Motion.div>
      </div>
    </div>
  );
};

export default Hero;
