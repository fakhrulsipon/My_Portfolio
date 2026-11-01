import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaAws,
  FaServer,
  FaBrain,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiNetlify,
  SiDocker,
  SiNginx,
  SiRedis,
  SiGithubactions,
  SiPostgresql,
} from "react-icons/si";
import Marquee from "react-fast-marquee";

export default function Skills() {
  return (
    <section className="section-shell py-6 md:py-8 lg:py-10">
      <div className="section-container">
        <div className="mb-8 md:mb-10 lg:mb-12 text-center">
          <span className="section-badge">⚡ TECH STACK</span>
          <h2 className="mt-1 text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
            Skills
          </h2>
        </div>

        <div className="rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-[#FF7E29]/15 via-[#FF5E4B]/10 to-[#FF3E6C]/15 p-[1px] shadow-lg shadow-slate-200/50">
          <div className="premium-card grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[2rem] bg-white p-6 md:p-8">
            {/* Marquee Icons */}
            <div className="rounded-3xl border border-slate-200/80 bg-slate-50/90 py-4">
              <Marquee gradient={false} speed={50} direction="right">
                <div className="my-2 flex gap-8 text-5xl md:text-6xl items-center">
                  <FaHtml5 className="text-orange-500" />
                  <FaCss3Alt className="text-blue-500" />
                  <SiTailwindcss className="text-sky-400" />
                  <FaJs className="text-yellow-400" />
                  <FaReact className="text-cyan-400" />
                  <SiNextdotjs className="text-slate-800" />
                  <SiFirebase className="text-yellow-500" />
                  <FaNodeJs className="text-green-500" />
                  <SiExpress className="text-slate-700" />
                  <SiMongodb className="text-green-500" />
                  <SiPostgresql className="text-sky-600" />
                  <SiRedis className="text-red-500" />
                  <SiDocker className="text-sky-500" />
                  <FaAws className="text-amber-500" />
                  <SiNginx className="text-emerald-500" />
                  <SiGithubactions className="text-indigo-400" />
                  <FaServer className="text-slate-600" />
                  <FaBrain className="text-rose-400" />
                  <FaGithub className="text-slate-800" />
                  <SiVercel className="text-slate-800" />
                  <SiNetlify className="text-sky-500" />
                  <FaFigma className="text-pink-500" />
                </div>
              </Marquee>

              <Marquee gradient={false} speed={50}>
                <div className="my-2 flex gap-8 text-5xl md:text-6xl items-center">
                  <SiDocker className="text-sky-500" />
                  <FaAws className="text-amber-500" />
                  <SiNginx className="text-emerald-500" />
                  <SiRedis className="text-red-500" />
                  <SiGithubactions className="text-indigo-400" />
                  <FaServer className="text-slate-600" />
                  <FaBrain className="text-rose-400" />
                  <FaHtml5 className="text-orange-500" />
                  <FaCss3Alt className="text-blue-500" />
                  <SiTailwindcss className="text-sky-400" />
                  <FaJs className="text-yellow-400" />
                  <FaReact className="text-cyan-400" />
                  <SiNextdotjs className="text-slate-800" />
                  <SiFirebase className="text-yellow-500" />
                  <FaNodeJs className="text-green-500" />
                  <SiExpress className="text-slate-700" />
                  <SiMongodb className="text-green-500" />
                  <SiPostgresql className="text-sky-600" />
                  <FaGithub className="text-slate-800" />
                  <SiVercel className="text-slate-800" />
                  <SiNetlify className="text-sky-500" />
                  <FaFigma className="text-pink-500" />
                </div>
              </Marquee>
            </div>

            {/* Skills Text */}
            <div className="grid gap-4 p-1 sm:grid-cols-2 lg:grid-cols-4 md:p-4">
              <p className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 leading-7 text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-[#FF7E29]/40 hover:bg-[#FF7E29]/5 shadow-xs">
                <span className="font-semibold bg-gradient-to-r from-[#FF7E29] via-[#FF5E4B] to-[#FF3E6C] bg-clip-text text-transparent">
                  Front-End:
                </span>{" "}
                TypeScript, Next.js, JavaScript, React.js, HTML, CSS, Tailwind CSS, shadcn/ui
              </p>
              <p className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 leading-7 text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-[#FF7E29]/40 hover:bg-[#FF7E29]/5 shadow-xs">
                <span className="font-semibold bg-gradient-to-r from-[#FF7E29] via-[#FF5E4B] to-[#FF3E6C] bg-clip-text text-transparent">
                  Back-End & AI:
                </span>{" "}
                NestJS, Node.js, Express.js, Prisma, PostgreSQL, MongoDB, Redis, RAG
              </p>
              <p className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 leading-7 text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-[#FF7E29]/40 hover:bg-[#FF7E29]/5 shadow-xs">
                <span className="font-semibold bg-gradient-to-r from-[#FF7E29] via-[#FF5E4B] to-[#FF3E6C] bg-clip-text text-transparent">
                  DevOps & Cloud:
                </span>{" "}
                Docker, CI/CD, AWS, VPS, Nginx
              </p>
              <p className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 leading-7 text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-[#FF7E29]/40 hover:bg-[#FF7E29]/5 shadow-xs">
                <span className="font-semibold bg-gradient-to-r from-[#FF7E29] via-[#FF5E4B] to-[#FF3E6C] bg-clip-text text-transparent">
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
