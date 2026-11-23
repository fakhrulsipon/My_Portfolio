import { motion as Motion } from "framer-motion";
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
  FaCloud,
  FaLaptopCode,
  FaRobot,
  FaStar,
  FaTools,
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

// Logos for the two scrolling rows
const TECH_ROW_1 = [
  { icon: FaHtml5, name: "HTML5", color: "text-orange-500" },
  { icon: FaCss3Alt, name: "CSS3", color: "text-blue-500" },
  { icon: SiTailwindcss, name: "Tailwind", color: "text-sky-400" },
  { icon: FaJs, name: "JavaScript", color: "text-yellow-400" },
  { icon: FaReact, name: "React", color: "text-cyan-400" },
  { icon: SiNextdotjs, name: "Next.js", color: "text-slate-800" },
  { icon: SiFirebase, name: "Firebase", color: "text-yellow-500" },
  { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
  { icon: SiExpress, name: "Express", color: "text-slate-700" },
  { icon: FaFigma, name: "Figma", color: "text-pink-500" },
];

const TECH_ROW_2 = [
  { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "text-sky-600" },
  { icon: SiRedis, name: "Redis", color: "text-red-500" },
  { icon: SiDocker, name: "Docker", color: "text-sky-500" },
  { icon: FaAws, name: "AWS", color: "text-amber-500" },
  { icon: SiNginx, name: "Nginx", color: "text-emerald-500" },
  { icon: SiGithubactions, name: "GitHub Actions", color: "text-indigo-400" },
  { icon: FaServer, name: "VPS", color: "text-slate-600" },
  { icon: FaBrain, name: "AI / LLMs", color: "text-rose-400" },
  { icon: FaGithub, name: "GitHub", color: "text-slate-800" },
  { icon: SiVercel, name: "Vercel", color: "text-slate-800" },
  { icon: SiNetlify, name: "Netlify", color: "text-sky-500" },
];

// Bento grid order: AI (featured, wide) + Front-End, then Back-End, DevOps, Tools
const SKILL_GROUPS = [
  {
    title: "AI & Automation",
    icon: FaRobot,
    featured: true,
    description: "AI systems that answer, follow up and automate repetitive work, so teams can focus on what matters.",
    items: [
      "LLM integrations",
      "RAG",
      "AI chatbots",
      "AI voice agents",
      "Workflow automation",
      "CRM & lead automation",
    ],
  },
  {
    title: "Front-End",
    icon: FaLaptopCode,
    items: ["TypeScript", "Next.js", "JavaScript", "React.js", "HTML", "CSS", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "Back-End",
    icon: FaServer,
    items: ["NestJS", "Node.js", "Express.js", "Prisma", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "DevOps & Cloud",
    icon: FaCloud,
    items: ["Docker", "CI/CD", "AWS", "VPS", "Nginx"],
  },
  {
    title: "Tools",
    icon: FaTools,
    items: ["Git", "GitHub", "VS Code", "Postman", "Netlify", "Vercel", "Figma"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

// Soft fade on both edges of the scrolling rows
const edgeFade = {
  maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
  WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
};

const TechPill = ({ tech }) => {
  const Icon = tech.icon;
  return (
    <div className="mx-2 flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-4 py-3 shadow-[0_6px_20px_-12px_rgba(15,23,42,0.25)] transition duration-300 hover:-translate-y-0.5 hover:border-[#FF7E29]/40 hover:shadow-[0_12px_28px_-14px_rgba(255,94,75,0.45)]">
      <Icon className={`text-2xl md:text-3xl ${tech.color}`} aria-hidden="true" />
      <span className="whitespace-nowrap text-sm font-semibold text-[#0F172A]">{tech.name}</span>
    </div>
  );
};

const SkillCard = ({ group }) => {
  const Icon = group.icon;
  const dark = group.featured;

  return (
    <div className="group relative h-full">
      {/* Gradient ring on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-[1.6rem] bg-gradient-to-br from-[#FF7E29] via-[#FF5E4B] to-[#FF3E6C] opacity-0 transition duration-500 group-hover:opacity-100"
      />

      <div
        className={`relative flex h-full flex-col overflow-hidden rounded-[1.5rem] p-6 transition duration-500 group-hover:-translate-y-1 md:p-7 ${
          dark
            ? "bg-[#0F172A] text-white shadow-[0_30px_60px_-30px_rgba(15,23,42,0.7)]"
            : "premium-card group-hover:border-transparent"
        }`}
      >
        {dark && (
          <>
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#FF7E29]/30 blur-3xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-[#FF3E6C]/20 blur-3xl" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"
            />
          </>
        )}

        <div className="relative flex items-start justify-between gap-4">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#FF7E29] to-[#FF3E6C] text-xl text-white shadow-lg shadow-[#FF5E4B]/30 transition duration-500 group-hover:rotate-[-6deg] group-hover:scale-105">
            <Icon aria-hidden="true" />
          </span>
          {dark ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
              <FaStar className="text-[#FF9A5A]" aria-hidden="true" />
              Specialty
            </span>
          ) : (
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-500">
              {String(group.items.length).padStart(2, "0")} skills
            </span>
          )}
        </div>

        <h3 className={`relative mt-5 text-xl font-bold tracking-tight md:text-2xl ${dark ? "text-white" : "text-[#0F172A]"}`}>
          {group.title}
        </h3>
        {group.description && (
          <p className="relative mt-2 max-w-lg text-sm leading-6 text-slate-300">{group.description}</p>
        )}

        <ul className="relative mt-4 flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
          {group.items.map((item) => (
            <li
              key={item}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition duration-300 md:text-sm ${
                dark
                  ? "border border-white/10 bg-white/[0.07] text-slate-100 hover:border-[#FF7E29]/60 hover:bg-[#FF7E29]/20"
                  : "border border-slate-200 bg-slate-50 text-slate-700 hover:border-[#FF7E29]/50 hover:bg-[#FF7E29]/10 hover:text-[#E5631A]"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <section className="section-shell py-6 md:py-8 lg:py-10">
      <div className="section-container">
        {/* Heading */}
        <Motion.div
          className="mx-auto mb-8 max-w-3xl text-center md:mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="section-badge">⚡ TECH STACK</span>
          <h2 className="mt-1 text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
            Skills & <span className="text-gradient-primary">Tech Stack</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600 md:text-base">
            The tools I use to design, build, automate and ship.
          </p>
        </Motion.div>

        {/* Scrolling logo rows */}
        <div className="relative mb-6 space-y-3 md:mb-8" style={edgeFade}>
          <Marquee gradient={false} speed={40} direction="right" pauseOnHover>
            <div className="flex py-1.5">
              {TECH_ROW_1.map((tech) => (
                <TechPill key={tech.name} tech={tech} />
              ))}
            </div>
          </Marquee>
          <Marquee gradient={false} speed={40} pauseOnHover>
            <div className="flex py-1.5">
              {TECH_ROW_2.map((tech) => (
                <TechPill key={tech.name} tech={tech} />
              ))}
            </div>
          </Marquee>
        </div>

        {/* Bento grid of skill groups */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {SKILL_GROUPS.map((group, i) => (
            <Motion.div
              key={group.title}
              className={group.featured ? "md:col-span-2" : ""}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: (i % 3) * 0.08 }}
            >
              <SkillCard group={group} />
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
