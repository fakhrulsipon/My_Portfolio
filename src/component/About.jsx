import aboutLottie from "../assets/about.json";
import Lottie from "lottie-react";
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
    <div className="section-shell pt-16 md:pt-20 lg:pt-24">
      <div className="section-container grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      {/* ✅ Right: Responsive Lottie Animation */}
      <div className="w-full">
        <div className="premium-card rounded-[2rem] p-4">
        <Lottie
          animationData={aboutLottie}
          loop={true}
          style={{ width: "100%", height: "100%" }}
        />
        </div>
      </div>
      <div className="text-gray-300">
        <h1 className="my-4 text-4xl font-medium tracking-tight text-white md:text-5xl">
          Meet Sipon
        </h1>

        {/* Short Intro */}
        <p className="mb-7 text-lg leading-8 text-slate-200">
          <span className="font-semibold">Full Stack Developer 🚀</span> |
          <span className="font-semibold"> Forever Curious Learner 📚</span> |
          <span className="font-semibold"> Adventurous Soul 🌍</span> |
          <span className="font-semibold">
            {" "}
            Introvert with an Extroverted Heart |
          </span>
        </p>

        <div className="relative mx-auto inline-block w-full max-w-xl rounded-3xl p-1">
          <style>{customCss}</style>

          {/* Shimmer border */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background: `conic-gradient(from var(--angle), transparent 18%, #34d399 38%, #22d3ee 56%, #a78bfa 76%, transparent 100%)`,
              animation: "shimmer-spin 5s linear infinite",
              mask: `radial-gradient(farthest-side, black calc(100% - 4px), transparent 100%)`,
              WebkitMask: `radial-gradient(farthest-side, black calc(100% - 4px), transparent 100%)`,
              filter: "blur(4px)",
            }}
          />

          {/* Card content */}
          <div className="premium-card relative space-y-4 rounded-3xl p-7 text-slate-200">
            <p>
              Hey! I’m{" "}
              <span className="font-semibold text-white">Fakhrul Islam Sipon</span>, a
              passionate{" "}
              <span className="font-semibold text-white">Full stack developer</span> who
              loves turning ideas into digital experiences.
            </p>
            <p>
              Outside coding, I enjoy football, digital art, and music. I love
              solving problems and building projects that inspire.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
