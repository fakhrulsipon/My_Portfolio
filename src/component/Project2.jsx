import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Project2 = () => {
  return (
    <div className="group h-full min-w-0">
      {/* project-1 */}
      <div className="premium-card relative h-full overflow-hidden rounded-[2rem] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-cyan-300/35 hover:shadow-[0_30px_100px_rgba(34,211,238,0.13)]">
        {/* Gradient border glow effect */}
        <div className="pointer-events-none absolute inset-x-8 -top-24 h-48 rounded-full bg-gradient-to-r from-emerald-300/20 via-cyan-300/20 to-violet-300/20 blur-3xl transition duration-500 group-hover:opacity-100"></div>

        <div className="grid h-full">
          <div className="relative min-h-64 overflow-hidden border-b border-white/10 bg-slate-950/70">
            <img
              src="/download.png"
              alt={`${name} project`}
              className="h-full min-h-64 w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
          </div>

          <div className="flex h-full">
            <div className="relative z-10 flex h-full flex-col p-6 md:p-8">
              <h2 className="mb-4 text-2xl font-semibold leading-tight tracking-tight text-white md:text-3xl">
                <span className="text-2xl font-bold md:text-3xl"> SkillBridge</span> - Personalized Tutoring Platform
              </h2>

              

              <p className="leading-7 text-slate-300">
                SkillBridge is a tutoring platform where students can find tutors, book sessions, manage learning progress, and leave reviews through dedicated role-based dashboards.
              </p>

              {/* Tools / Tech Icons */}
              <div className="mb-4 mt-6 flex flex-wrap gap-2.5">
                {[
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "Express.js",
                  "PostgreSQL",
                  "Prisma",
                  "Tailwind CSS",
                  "Better-Auth",
                  "jwt",
                  "Stripe"
                ].map((tech, index) => (
                  <button
                    key={index}
                    className="premium-chip"
                  >
                    {tech}
                  </button>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-3 pt-4">
                {/* Live Site */}
                <div>
                  <a
                    href="https://skill-bridge-client-lyart.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link relative"
                  >
                    <button className="relative z-10 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-2.5 font-semibold text-white transition duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/10">
                      <FaExternalLinkAlt className="text-blue-400" /> Live
                    </button>
                    <span className="absolute inset-0 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-300"></span>
                  </a>
                </div>

                {/* Client Repo */}
                <div>
                  <a
                    href="https://github.com/fakhrulsipon/skillBridge_client"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link relative"
                  >
                    <button className="relative z-10 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-2.5 font-semibold text-white transition duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/10">
                      <FaGithub className="text-pink-400" /> Client
                    </button>
                    <span className="absolute inset-0 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-300"></span>
                  </a>
                </div>

                {/* Server Repo */}
                <div>
                  <a
                    href="https://github.com/fakhrulsipon/skillBridge_server"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link relative"
                  >
                    <button className="relative z-10 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-2.5 font-semibold text-white transition duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/10">
                      <FaGithub className="text-green-400" /> Server
                    </button>
                    <span className="absolute inset-0 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-300"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;
