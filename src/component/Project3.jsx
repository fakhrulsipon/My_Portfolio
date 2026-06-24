import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Project1 = () => {
  return (
    <div className="group h-full min-w-0">
      {/* project-1 */}
      <div className="premium-card relative h-full overflow-hidden rounded-[2rem] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-cyan-300/35 hover:shadow-[0_30px_100px_rgba(34,211,238,0.13)]">
        {/* Gradient border glow effect */}
        <div className="pointer-events-none absolute inset-x-8 -top-24 h-48 rounded-full bg-gradient-to-r from-emerald-300/20 via-cyan-300/20 to-violet-300/20 blur-3xl transition duration-500 group-hover:opacity-100"></div>

        <div className="grid h-full">
          <div className="relative min-h-64 overflow-hidden border-b border-white/10 bg-slate-950/70">
            <img
              src="https://i.postimg.cc/qqWCGsYs/chatorbit-2.png"
              alt={`${name} project`}
              className="h-full min-h-64 w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
          </div>

          <div className="flex h-full">
            <div className="relative z-10 flex h-full flex-col p-6 md:p-8">
              <h2 className="mb-4 text-2xl font-semibold leading-tight tracking-tight text-white md:text-3xl">
                <span className="text-2xl font-bold md:text-3xl">Chatorbit</span> - Modern
                Discussion Forum
              </h2>

              <p className="leading-7 text-slate-300">
                ChatOrbit is a modern community forum where users can post,
                comment, vote, and become premium members. Built with the MERN
                stack, it features secure login, Stripe payments, and admin
                moderation.
              </p>

              {/* Tools / Tech Icons */}
              <div className="mb-4 mt-6 flex flex-wrap gap-2.5">
                {[
                  "React.js",
                  "JavaScript",
                  "Node.js",
                  "Express.js",
                  "Tailwind CSS",
                  "MongoDB",
                  "Stripe",
                  "Firebase Auth",
                  "JWT",
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
                    href="https://super-gelato-a1166f.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link relative"
                  >
                    <button className="relative z-10 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-2.5 font-semibold text-white transition duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/10">
                      <FaExternalLinkAlt className="text-blue-400" /> Live
                    </button>
                    <span className="absolute inset-0 rounded-fullblur-md opacity-75 group-hover:opacity-100 transition duration-300"></span>
                  </a>
                </div>

                {/* Client Repo */}
                <div>
                  <a
                    href="https://github.com/fakhrulsipon/ChatOrbit_Client"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link relative"
                  >
                    <button className="relative z-10 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-2.5 font-semibold text-white transition duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/10">
                      <FaGithub className="text-pink-400" /> Client
                    </button>
                    <span className="absolute inset-0 rounded-full  blur-md opacity-75 group-hover:opacity-100 transition duration-300"></span>
                  </a>
                </div>

                {/* Server Repo */}
                <div>
                  <a
                    href="https://github.com/fakhrulsipon/ChatOrbit_Website_Server"
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

export default Project1;
