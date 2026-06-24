import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import Marquee from "react-fast-marquee";

export default function Skills() {
  return (
    <section className="section-shell pt-16 md:pt-20 lg:pt-24">
      <div className="section-container">
        <h2 className="mb-10 text-center text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Skills
        </h2>

        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald-300/20 via-cyan-300/10 to-violet-300/20 p-[1px] shadow-2xl shadow-black/30">
          <div className="premium-card grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[2rem] p-6 md:p-8">
            {/* Marquee Icons */}
            <div className="rounded-3xl border border-white/10 bg-slate-950/50 py-4">
              <Marquee gradient={false} speed={50} direction="right">
                <div className="my-2 flex gap-8 text-5xl md:text-6xl">
                  <FaHtml5 className="text-orange-500" />
                  <FaCss3Alt className="text-blue-500" />
                  <SiTailwindcss className="text-sky-400" />
                  <FaJs className="text-yellow-400" />
                  <FaReact className="text-cyan-400" />
                  <SiNextdotjs className="text-white" />
                  <SiFirebase className="text-yellow-500" />
                  <FaNodeJs className="text-green-500" />
                  <SiExpress className="text-gray-300" />
                  <SiMongodb className="text-green-400" />
                  <FaGithub className="text-gray-400" />
                  <SiVercel className="text-white" />
                  <SiNetlify className="text-sky-500" />
                  <FaFigma className="text-pink-500" />
                </div>
              </Marquee>

              <Marquee gradient={false} speed={50}>
                <div className="my-2 flex gap-8 text-5xl md:text-6xl">
                  <FaHtml5 className="text-orange-500" />
                  <FaCss3Alt className="text-blue-500" />
                  <SiTailwindcss className="text-sky-400" />
                  <FaJs className="text-yellow-400" />
                  <FaReact className="text-cyan-400" />
                  <SiNextdotjs className="text-white" />
                  <SiFirebase className="text-yellow-500" />
                  <FaNodeJs className="text-green-500" />
                  <SiExpress className="text-gray-300" />
                  <SiMongodb className="text-green-400" />
                  <FaGithub className="text-gray-400" />
                  <SiVercel className="text-white" />
                  <SiNetlify className="text-sky-500" />
                  <FaFigma className="text-pink-500" />
                </div>
              </Marquee>
            </div>

            {/* Skills Text */}
            <div className="grid gap-4 p-1 md:grid-cols-3 md:p-4">
              <p className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 leading-7 text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07]">
                <span className="font-bold bg-gradient-to-r from-emerald-300 via-cyan-300 to-violet-300 bg-clip-text text-transparent">
                  Front-End:
                </span>{" "}
              TypeScript, Next.js, JavaScript, React.js, HTML, CSS, Tailwind CSS, shadcn/ui 
              </p>
              <p className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 leading-7 text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07]">
                <span className="font-bold bg-gradient-to-r from-emerald-300 via-cyan-300 to-violet-300 bg-clip-text text-transparent">
                  Back-End:
                </span>{" "}
                Nestjs, Node.js, Express.js, Prisma, PostgreSQL, MongoDB
              </p>
              <p className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 leading-7 text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07]">
                <span className="font-bold bg-gradient-to-r from-emerald-300 via-cyan-300 to-violet-300 bg-clip-text text-transparent">
                  Tools:
                </span>{" "}
                Git, GitHub, VS Code, Postman, Netlify, Vercel, Figma
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
