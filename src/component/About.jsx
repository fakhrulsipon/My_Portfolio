import LazyLottie from "./LazyLottie";

// Module-level so the loader identity is stable across renders
const loadAboutAnimation = () => import("../assets/about.json");

const About = () => {

  return (
    <div className="section-shell py-6 md:py-8 lg:py-10">
      <div className="section-container grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* ✅ Right: Responsive Lottie Animation */}
        <div className="w-full">
          <div className="premium-card rounded-[2rem] p-4 bg-white border border-slate-200/80 shadow-md">
            <LazyLottie load={loadAboutAnimation} aspectRatio="1 / 1" label="Developer at work illustration" />
          </div>
        </div>
        <div className="text-slate-700">
          <div>
            <span className="section-badge">✨ ABOUT ME</span>
            <h1 className="mb-4 mt-1 text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
              Meet <span className="bg-gradient-to-r from-[#FF7E29] to-[#FF3E6C] bg-clip-text text-transparent">Sipon</span>
            </h1>
          </div>

          {/* Recruiter-Friendly Professional Intro */}
          <p className="mb-7 text-base md:text-lg leading-8 text-slate-700">
            <span className="font-semibold text-[#0F172A]">Senior Full Stack Developer 💻</span> |{" "}
            <span className="font-semibold text-[#0F172A]">AI Automation Expert 🤖</span> |{" "}
            <span className="font-semibold text-[#0F172A]">Plumbing Digital Partner 🔧</span>
          </p>

          <div className="relative mx-auto inline-block w-full max-w-xl rounded-3xl p-1">

            {/* Shimmer border */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background: `conic-gradient(from var(--angle), transparent 18%, #FF7E29 38%, #FF5E4B 56%, #FF3E6C 76%, transparent 100%)`,
                animation: "shimmer-spin 5s linear infinite",
                mask: `radial-gradient(farthest-side, black calc(100% - 4px), transparent 100%)`,
                WebkitMask: `radial-gradient(farthest-side, black calc(100% - 4px), transparent 100%)`,
                filter: "blur(4px)",
              }}
            />

            {/* Card content */}
            <div className="premium-card relative space-y-4 rounded-3xl p-7 text-slate-600 bg-white border border-slate-200/80 shadow-md">
              <p>
                Hey! I’m{" "}
                <span className="font-semibold text-[#0F172A]">Fakhrul Islam Sipon</span>, a{" "}
                <span className="font-semibold text-[#0F172A]">Senior Full Stack Developer</span> and{" "}
                <span className="font-semibold text-[#0F172A]">AI Automation Expert</span> who turns
                ideas into fast, scalable digital products — and repetitive work into smart,
                automated systems.
              </p>
              <p>
                I also specialize in the{" "}
                <span className="font-semibold text-[#0F172A]">plumbing industry</span>. From
                high-converting websites and local SEO to online booking, AI call answering and
                automated lead follow-up, I help plumbing companies get more calls and book more jobs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
