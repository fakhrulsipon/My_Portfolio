import React from "react";
import { FaBriefcase, FaCalendarAlt, FaBuilding, FaCheckCircle } from "react-icons/fa";
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

const Experience = () => {
  return (
    <section id="experience" className="section-shell py-8 md:py-12 lg:py-16">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-10 md:mb-14 text-center">
          <span className="section-badge">💼 CAREER PATH</span>
          <h2 className="mt-1 text-3xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
            Work Experience
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base text-slate-600">
            A comprehensive track record of delivering 100+ production web applications, architecting robust backend systems, and crafting responsive user experiences.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative mx-auto max-w-5xl">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 md:left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#FF7E29] via-[#FF5E4B] to-[#FF3E6C] rounded-full opacity-70"></div>

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <Motion.div
                key={index}
                className="relative flex items-start gap-4 md:gap-8 group"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Timeline Node Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="flex h-8 w-8 md:h-12 md:w-12 items-center justify-center rounded-full bg-white border-2 border-[#FF7E29] shadow-md shadow-[#FF7E29]/20 transition-all duration-300 group-hover:scale-110 group-hover:border-[#FF3E6C] group-hover:shadow-[0_0_20px_rgba(255,126,41,0.35)]">
                    <FaBriefcase className="h-3.5 w-3.5 md:h-5 md:w-5 text-[#FF7E29] group-hover:text-[#FF3E6C] transition-colors duration-300" />
                  </div>
                </div>

                {/* Experience Card */}
                <div className="flex-1 min-w-0">
                  <div className="premium-card relative overflow-hidden rounded-2xl md:rounded-[1.75rem] bg-white border border-slate-200/80 p-5 md:p-8 shadow-md shadow-slate-200/50 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#FF7E29]/50 hover:shadow-[0_20px_50px_rgba(255,126,41,0.12)]">
                    {/* Top ambient glow */}
                    <div className="pointer-events-none absolute inset-x-8 -top-24 h-36 rounded-full bg-gradient-to-r from-[#FF7E29]/15 via-[#FF5E4B]/15 to-[#FF3E6C]/15 blur-2xl transition duration-500 group-hover:opacity-100"></div>

                    {/* Card Header */}
                    <div className="relative z-10 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] leading-tight">
                          <span className="text-gradient-primary">{exp.role}</span>
                        </h3>
                        <div className="mt-1 flex items-center gap-2 text-slate-700 font-semibold text-sm md:text-base">
                          <FaBuilding className="text-[#FF7E29]" />
                          <span>{exp.company}</span>
                          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600 font-medium border border-slate-200">
                            {exp.periodBadge}
                          </span>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-50 px-3.5 py-1 text-xs md:text-sm font-semibold text-slate-700 self-start sm:self-auto shadow-xs">
                        <FaCalendarAlt className="text-[#FF7E29]" />
                        <span>{exp.duration}</span>
                        {exp.isCurrent && (
                          <span className="inline-flex items-center gap-1.5 pl-1 text-emerald-600 font-bold text-xs">
                            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            Active
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="relative z-10 mt-4 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                      {exp.summary}
                    </p>

                    {/* Responsibilities & Achievements Grid */}
                    <div className="relative z-10 mt-5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        Key Responsibilities & Achievements
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug"
                          >
                            <FaCheckCircle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#FF7E29]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="relative z-10 mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5 items-center">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1.5">
                        Core Tech:
                      </span>
                      {exp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="rounded-full border border-slate-200 bg-slate-100/90 px-2.5 py-1 text-xs font-semibold text-slate-700 shadow-xs transition duration-300 hover:border-[#FF7E29]/50 hover:bg-[#FF7E29]/10 hover:text-[#FF7E29]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
