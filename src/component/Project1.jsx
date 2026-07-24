import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Project1 = () => {
  return (
    <div className="group h-full min-w-0">
      {/* project-1 */}
      <div className="premium-card relative h-full overflow-hidden rounded-[2rem] bg-white border border-slate-200/80 shadow-lg shadow-slate-200/50 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#FF7E29]/50 hover:shadow-[0_25px_60px_rgba(255,126,41,0.14)]">
        {/* Gradient border glow effect */}
        <div className="pointer-events-none absolute inset-x-8 -top-24 h-48 rounded-full bg-gradient-to-r from-[#FF7E29]/15 via-[#FF5E4B]/15 to-[#FF3E6C]/15 blur-3xl transition duration-500 group-hover:opacity-100"></div>

        <div className="grid h-full">
          <div className="relative min-h-64 overflow-hidden border-b border-slate-200 bg-slate-100">
            <img
              src="/download (1).png"
              alt={`CodeClash project`}
              className="h-full min-h-64 w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />
          </div>

          <div className="flex h-full">
            <div className="relative z-10 flex h-full flex-col p-6 md:p-8">
              <h2 className="mb-4 text-2xl font-semibold leading-tight tracking-tight text-[#0F172A] md:text-3xl">
                <span className="text-2xl font-bold md:text-3xl text-gradient-primary"> CodeClash</span> - Competitive Programming Platform
              </h2>

              <p className="leading-7 text-slate-600">
                CodeClash is a competitive programming platform where users can solve coding problems, participate in real-time contests, track rankings, and improve their skills through an interactive coding environment.
              </p>

              {/* Tools / Tech Icons */}
              <div className="mb-4 mt-6 flex flex-wrap gap-2.5">
                {[
                  "React.js",
                  "TypeScript",
                  "Node.js",
                  "Express.js",
                  "Tailwind CSS",
                  "MongoDB",
                  "Monaco Editor",
                  "jwt",
                  "Firebase Authentication"
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
                    href="https://code-clash-d9152.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link relative"
                  >
                    <button className="relative z-10 flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100/90 px-5 py-2.5 font-semibold text-slate-800 transition duration-300 hover:scale-105 hover:border-[#FF7E29]/50 hover:bg-[#FF7E29]/10 hover:text-[#FF7E29]">
                      <FaExternalLinkAlt className="text-[#FF7E29]" /> Live
                    </button>
                    <span className="absolute inset-0 rounded-full blur-md opacity-75 group-hover/link:opacity-100 transition duration-300"></span>
                  </a>
                </div>

                {/* Client Repo */}
                <div>
                  <a
                    href="https://github.com/fakhrulsipon/codeClash_client"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link relative"
                  >
                    <button className="relative z-10 flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100/90 px-5 py-2.5 font-semibold text-slate-800 transition duration-300 hover:scale-105 hover:border-[#FF3E6C]/50 hover:bg-[#FF3E6C]/10 hover:text-[#FF3E6C]">
                      <FaGithub className="text-[#FF3E6C]" /> Client
                    </button>
                    <span className="absolute inset-0 rounded-full blur-md opacity-75 group-hover/link:opacity-100 transition duration-300"></span>
                  </a>
                </div>

                {/* Server Repo */}
                <div>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link relative"
                  >
                    <button className="relative z-10 flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100/90 px-5 py-2.5 font-semibold text-slate-800 transition duration-300 hover:scale-105 hover:border-[#FF7E29]/50 hover:bg-[#FF7E29]/10 hover:text-[#FF7E29]">
                      <FaGithub className="text-[#FF7E29]" /> Server
                    </button>
                    <span className="absolute inset-0 rounded-full blur-md opacity-75 group-hover/link:opacity-100 transition duration-300"></span>
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

export default Project1;
