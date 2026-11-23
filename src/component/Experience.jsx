import { useState } from "react";
import { FaBriefcase, FaCalendarAlt, FaCheck, FaChevronDown } from "react-icons/fa";
import { motion as Motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Full-Stack Developer",
    company: "NextGen Tech",
    duration: "May 2026 - Present",
    periodBadge: "Current Role",
    isCurrent: true,
    summary:
      "Developed and maintained production-ready web applications with a focus on scalability, performance, security, and clean architecture.",
    bullets: [
      "Built responsive applications using React, Next.js, TypeScript, JavaScript, and Tailwind CSS",
      "Developed REST APIs and backend services with Node.js, Express.js, and Nest.js",
      "Designed databases using MongoDB, PostgreSQL, SQL, and Prisma",
      "Implemented authentication, authorization, and role-based access control",
      "Developed SaaS platforms, CRM/ERP systems, dashboards, e-commerce, booking, and business management solutions",
      "Built real-time features, API integrations, and dynamic workflows",
      "Debugged applications, optimized performance, and refactored code for maintainability",
      "Collaborated with clients and teams to turn business requirements into practical technical solutions",
    ],
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Nest.js",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "Tailwind CSS",
      "SaaS Architecture",
      "RBAC",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Ilmify Tech Agency",
    duration: "December 2025 - April 2026",
    periodBadge: "Agency",
    isCurrent: false,
    summary:
      "Developed reliable and maintainable web applications across frontend, backend, APIs, and databases, focusing on performance, security, and user experience.",
    bullets: [
      "Built responsive interfaces with React, Next.js, TypeScript, JavaScript, and Tailwind CSS",
      "Developed backend services and REST APIs using Node.js, Express.js, and Nest.js",
      "Designed database schemas and data operations with MongoDB, PostgreSQL, SQL, and Prisma",
      "Implemented authentication, authorization, and role-based access control",
      "Developed SaaS features, business systems, dashboards, CRM/ERP, booking, and e-commerce solutions",
      "Worked on real-time features, API integrations, notifications, and business workflows",
      "Fixed bugs, optimized performance, and improved existing applications through refactoring",
      "Translated business requirements into clean, scalable, and production-ready solutions",
    ],
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Express.js",
      "Nest.js",
      "MongoDB",
      "PostgreSQL",
      "Prisma",
      "REST APIs",
      "Tailwind CSS",
    ],
  },
  {
    role: "Senior Full-Stack Developer",
    company: "NextGen Tech",
    duration: "April 2020 - October 2025",
    periodBadge: "5.5 Years",
    isCurrent: false,
    summary:
      "Working as a Senior Full-Stack Developer focused on scalable architecture, complex business systems, backend development, performance optimization, and end-to-end web application development.",
    bullets: [
      "Develop applications using React, Next.js, TypeScript, Node.js, Express.js, and Nest.js",
      "Design scalable backend architecture, REST APIs, authentication, and business logic",
      "Design and optimize databases using PostgreSQL, MongoDB, SQL, and Prisma",
      "Develop SaaS, multi-tenant systems, CRM/ERP, dashboards, booking, and e-commerce applications",
      "Implement secure authentication, authorization, and role-based access control",
      "Build real-time features, notifications, and collaborative workflows",
      "Improve API efficiency, database performance, application speed, and system reliability",
      "Debug complex issues and refactor code for scalability and maintainability",
      "Focus on security, clean architecture, performance, and production-ready development",
    ],
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Nest.js",
      "PostgreSQL",
      "MongoDB",
      "SQL",
      "Prisma",
      "Multi-tenant SaaS",
      "System Architecture",
    ],
  },
];

const STATS = [
  { value: "6+", label: "Years of experience" },
  { value: "100+", label: "Production apps shipped" },
  { value: "SaaS", label: "CRM, ERP & e-commerce" },
];

// Bullets shown before "Show all"
const VISIBLE_BULLETS = 4;

const initials = (name) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

const ExperienceCard = ({ exp }) => {
  const [open, setOpen] = useState(false);
  const bullets = open ? exp.bullets : exp.bullets.slice(0, VISIBLE_BULLETS);
  const hiddenCount = exp.bullets.length - VISIBLE_BULLETS;

  return (
    <div className="group relative">
      {/* Gradient ring: always on for the current role, on hover for the rest */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -inset-px rounded-[1.6rem] bg-gradient-to-br from-[#FF7E29] via-[#FF5E4B] to-[#FF3E6C] transition duration-500 ${
          exp.isCurrent ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      />

      <div
        className={`premium-card relative overflow-hidden rounded-[1.5rem] p-5 transition duration-500 group-hover:-translate-y-1 md:p-7 ${
          exp.isCurrent
            ? "border-transparent shadow-[0_24px_50px_-24px_rgba(255,94,75,0.45)]"
            : "group-hover:border-transparent group-hover:shadow-[0_24px_50px_-24px_rgba(255,94,75,0.35)]"
        }`}
      >
        {exp.isCurrent && (
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-[#FF7E29]/10 blur-3xl" />
        )}

        {/* Header */}
        <div className="relative flex items-start gap-4">
          <span
            className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-sm font-extrabold tracking-wide md:h-14 md:w-14 md:text-base ${
              exp.isCurrent
                ? "bg-gradient-to-br from-[#FF7E29] to-[#FF3E6C] text-white shadow-lg shadow-[#FF5E4B]/30"
                : "bg-[#0F172A] text-white"
            }`}
            aria-hidden="true"
          >
            {initials(exp.company)}
          </span>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-bold leading-tight tracking-tight text-[#0F172A] md:text-2xl">{exp.role}</h3>
              {exp.isCurrent && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Active
                </span>
              )}
            </div>
            <p className="mt-1 text-sm font-semibold md:text-base">
              <span className="text-gradient-primary">{exp.company}</span>
              <span className="text-slate-400"> · </span>
              <span className="text-slate-500">{exp.periodBadge}</span>
            </p>
            {/* Dates live in the left column on desktop */}
            <p className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 md:hidden">
              <FaCalendarAlt className="text-[#FF7E29]" aria-hidden="true" />
              {exp.duration}
            </p>
          </div>
        </div>

        <p className="relative mt-5 text-sm leading-7 text-slate-600 md:text-[15px]">{exp.summary}</p>

        {/* Highlights */}
        <div className="relative mt-5 rounded-2xl border border-slate-200/70 bg-slate-50/70 p-4 md:p-5">
          <h4 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-slate-400">Key highlights</h4>
          <ul className="grid grid-cols-1 gap-x-6 gap-y-2.5 md:grid-cols-2">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2.5 text-sm leading-snug text-slate-700">
                <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#FF7E29] to-[#FF3E6C] text-[8px] text-white">
                  <FaCheck aria-hidden="true" />
                </span>
                {bullet}
              </li>
            ))}
          </ul>
          {hiddenCount > 0 && (
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="mt-4 inline-flex items-center gap-1.5 rounded-full text-sm font-semibold text-[#E5631A] transition hover:text-[#FF3E6C] focus-ring"
            >
              {open ? "Show less" : `Show all ${exp.bullets.length} highlights`}
              <FaChevronDown
                className={`text-xs transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
          )}
        </div>

        {/* Tech */}
        <ul className="relative mt-5 flex flex-wrap gap-1.5" aria-label="Core tech">
          {exp.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 transition duration-300 hover:border-[#FF7E29]/50 hover:bg-[#FF7E29]/10 hover:text-[#E5631A]"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="section-shell py-8 md:py-12 lg:py-16">
      <div className="section-container">
        {/* Header */}
        <Motion.div
          className="mx-auto mb-8 max-w-3xl text-center md:mb-10"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="section-badge">💼 CAREER PATH</span>
          <h2 className="mt-1 text-3xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
            Work <span className="text-gradient-primary">Experience</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
            A comprehensive track record of delivering 100+ production web applications, architecting robust backend systems, and crafting responsive user experiences.
          </p>
        </Motion.div>

        {/* Stats */}
        <div className="mx-auto mb-12 grid max-w-3xl grid-cols-3 gap-3 md:mb-16 md:gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="premium-card rounded-2xl px-3 py-4 text-center md:px-5 md:py-5"
            >
              <p className="whitespace-nowrap text-base font-extrabold tracking-tight sm:text-xl md:text-3xl">
                <span className="text-gradient-primary">{stat.value}</span>
              </p>
              <p className="mt-1 text-[11px] font-medium leading-4 text-slate-500 md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">
          {/* Rail: centred on the nodes (20px on mobile, 200px on desktop) */}
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-5 top-6 w-0.5 -translate-x-1/2 rounded-full bg-gradient-to-b from-[#FF7E29] via-[#FF5E4B]/60 to-slate-200 md:left-[200px]"
          />

          <ol className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <Motion.li
                key={`${exp.company}-${exp.duration}`}
                className="relative grid grid-cols-1 md:grid-cols-[160px_1fr] md:gap-20"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
              >
                {/* Date column (desktop) */}
                <div className="hidden pt-8 text-right md:block">
                  <p className="text-sm font-bold leading-snug text-[#0F172A]">{exp.duration}</p>
                  <span
                    className={`mt-2 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                      exp.isCurrent ? "bg-[#FF7E29]/15 text-[#C2410C]" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {exp.periodBadge}
                  </span>
                </div>

                {/* Node */}
                <span className="absolute left-0 top-7 z-10 md:left-[180px]">
                  <span
                    className={`relative grid h-10 w-10 place-items-center rounded-full ${
                      exp.isCurrent
                        ? "bg-gradient-to-br from-[#FF7E29] to-[#FF3E6C] text-white shadow-lg shadow-[#FF5E4B]/40"
                        : "border-2 border-[#FF7E29]/50 bg-white text-[#FF7E29] shadow-md"
                    }`}
                  >
                    {exp.isCurrent && (
                      <span className="absolute inset-0 animate-ping rounded-full bg-[#FF7E29]/30" aria-hidden="true" />
                    )}
                    <FaBriefcase className="relative text-sm" aria-hidden="true" />
                  </span>
                </span>

                {/* Card */}
                <div className="min-w-0 pl-14 md:pl-0">
                  <ExperienceCard exp={exp} />
                </div>
              </Motion.li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Experience;
