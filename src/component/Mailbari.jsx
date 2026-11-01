import React from "react";
import LiveButton from "./LiveButton";

const Mailbari = () => {
  return (
    <div className="group h-full min-w-0">
      {/* Mailbari Project */}
      <div className="premium-card relative h-full overflow-hidden rounded-2xl md:rounded-[1.5rem] bg-white border border-slate-200/80 shadow-md shadow-slate-200/50 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-[#FF7E29]/50 hover:shadow-[0_20px_45px_rgba(255,126,41,0.12)]">
        {/* Gradient border glow effect */}
        <div className="pointer-events-none absolute inset-x-8 -top-24 h-36 rounded-full bg-gradient-to-r from-[#FF7E29]/15 via-[#FF5E4B]/15 to-[#FF3E6C]/15 blur-2xl transition duration-500 group-hover:opacity-100"></div>

        <div className="grid h-full">
          <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden border-b border-slate-200 bg-slate-100">
            <img
              src="/mailbari.png"
              alt="Mailbari project"
              width={1280}
              height={720}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />
          </div>

          <div className="flex h-full">
            <div className="relative z-10 flex h-full w-full flex-col p-4 sm:p-5 md:p-6">
              <h2 className="mb-2 text-lg font-semibold leading-snug tracking-tight text-[#0F172A] md:text-xl">
                <span className="text-lg font-bold md:text-xl text-gradient-primary">Mailbari</span> - Business Email & Collaboration Platform
              </h2>

              <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                Mailbari is a business email platform that enables organizations to manage professional email accounts using custom domains. It provides email management, centralized administration, and security controls to support reliable business communication. The platform is designed to simplify email operations and improve productivity through efficient account and resource management.
              </p>

              {/* Tools / Tech Icons */}
              <div className="mb-3 mt-3.5 flex flex-wrap gap-1.5">
                {[
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "NestJS",
                  "PostgreSQL",
                  "Prisma",
                  "Tailwind CSS",
                  "GSAP",
                  "Docker",
                  "AWS",
                  "Nginx",
                  "Redis",
                  "CI/CD",
                  "REST API",
                  "Email Integration",
                ].map((tech, index) => (
                  <button
                    key={index}
                    className="rounded-full border border-slate-200 bg-slate-100/90 px-2.5 py-1 text-xs font-medium text-slate-700 shadow-xs transition duration-300 hover:border-[#FF7E29]/50 hover:bg-[#FF7E29]/10 hover:text-[#FF7E29]"
                  >
                    {tech}
                  </button>
                ))}
              </div>

              <LiveButton href="https://mailbari.com/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mailbari;
