import { FaDownload } from "react-icons/fa";
import image from "../assets/portfolio.png";
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
      <div className="section-container flex min-h-[calc(100vh-5rem)] flex-col-reverse items-center justify-between gap-12 py-14 md:py-20 lg:flex-row lg:gap-16">
      {/* Left Side - Text */}
      <Motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-xl font-medium leading-tight text-cyan-200 md:text-2xl">
          Hello, It's Me
        </h1>
        <h1 className="mt-3 text-5xl font-medium leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Fakhrul Islam Sipon
        </h1>
        <p className="mt-5 text-xl font-medium text-slate-100 lg:text-2xl">
          And I'm a{" "}
          <span className="text-2xl font-semibold bg-gradient-to-r from-emerald-300 via-cyan-300 to-violet-300 bg-clip-text text-transparent lg:text-3xl">
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

        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-300 md:mx-0 md:text-lg">
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
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] shadow-2xl shadow-cyan-950/40 focus-ring"
            >
              {/* Shimmer Background */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from var(--angle), transparent 25%, #22d3ee 50%, #a78bfa 75%, transparent 100%)",
                  animation: "shimmer-spin 2.5s linear infinite",
                }}
              />
              {/* Button Content */}
              <span className="relative z-10 flex items-center gap-2 rounded-full bg-slate-950 px-8 py-3 font-semibold text-white transition duration-300 group-hover:bg-slate-900 group-hover:text-cyan-100">
                <FaDownload className="text-lg" />
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
        <div className="relative">
          <div className="absolute -inset-8 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="absolute -right-8 top-10 h-28 w-28 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md" />
          <div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full border border-emerald-300/20 bg-emerald-300/10 backdrop-blur-md" />
          <ShimmerBorder>
            <img
              src={image}
              alt="profile"
              className="h-full w-full rounded-full bg-slate-950 object-cover p-4"
            />
          </ShimmerBorder>
        </div>
      </Motion.div>
      </div>
    </div>
  );
};

export default Hero;
