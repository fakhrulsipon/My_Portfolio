import { motion as Motion } from "framer-motion";
import { FaArrowRight, FaCheck, FaCloud, FaLaptopCode, FaRobot, FaRocket, FaStar } from "react-icons/fa";

const PILLARS = [
  {
    icon: FaLaptopCode,
    number: "01",
    title: "Full Stack Development",
    description:
      "Scalable SaaS products and web apps, built end to end — from database design and APIs to pixel-perfect UI.",
    points: [
      "SaaS platforms from idea to launch",
      "Next.js, React, NestJS & Node.js",
      "PostgreSQL, Prisma, Redis & REST APIs",
      "Docker, AWS & CI/CD deployments",
    ],
  },
  {
    icon: FaRobot,
    number: "02",
    title: "AI Automation",
    description:
      "AI systems that answer, follow up and report for you, so your team can focus on the work that actually pays.",
    points: [
      "AI chatbots & voice agents that work 24/7",
      "Workflow automation across CRM, email & SMS",
      "LLM & RAG integrations for your product",
      "Automated lead follow-up & reporting",
    ],
    featured: true,
  },
  {
    icon: FaCloud,
    number: "03",
    title: "DevOps & Cloud",
    description:
      "Reliable infrastructure that ships your product quickly and keeps it fast, secure and online.",
    points: [
      "Dockerized apps & CI/CD pipelines",
      "AWS, VPS & Nginx deployments",
      "Redis caching & performance tuning",
      "Monitoring, security & uptime",
    ],
  },
];

const CAPABILITIES = [
  "SaaS platforms",
  "Web applications",
  "AI chatbots & voice agents",
  "Workflow automation",
  "LLM & RAG integrations",
  "REST APIs",
  "Docker & CI/CD",
  "AWS deployments",
  "Performance optimization",
  "UI/UX implementation",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const PillarCard = ({ pillar }) => {
  const Icon = pillar.icon;

  const body = (
    <div
      className={`relative flex h-full flex-col overflow-hidden rounded-[1.75rem] p-6 md:p-7 ${
        pillar.featured ? "bg-gradient-to-br from-[#FFF7F1] via-white to-[#FFF1F4]" : "premium-card"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#FF7E29] to-[#FF3E6C] text-2xl text-white shadow-lg shadow-[#FF5E4B]/30 transition duration-500 group-hover:rotate-[-6deg] group-hover:scale-105">
          <Icon aria-hidden="true" />
        </span>
        {pillar.featured ? (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0F172A] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
            <FaStar className="text-[#FF9A5A]" aria-hidden="true" />
            Specialty
          </span>
        ) : (
          <span className="text-4xl font-black leading-none text-slate-100" aria-hidden="true">
            {pillar.number}
          </span>
        )}
      </div>

      <h3 className="mt-6 text-xl font-bold tracking-tight text-[#0F172A] md:text-2xl">{pillar.title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-[15px]">{pillar.description}</p>

      <div className="my-5 h-px bg-gradient-to-r from-slate-200 via-slate-200/60 to-transparent" />

      <ul className="space-y-3">
        {pillar.points.map((point) => (
          <li key={point} className="flex items-start gap-3 text-sm font-medium text-slate-700">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#FF7E29]/12 text-[10px] text-[#E5631A]">
              <FaCheck aria-hidden="true" />
            </span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );

  return pillar.featured ? (
    <div className="group h-full rounded-[1.8rem] bg-gradient-to-br from-[#FF7E29] via-[#FF5E4B] to-[#FF3E6C] p-[1.5px] shadow-[0_24px_50px_-22px_rgba(255,94,75,0.6)] transition duration-500 hover:-translate-y-1.5">
      {body}
    </div>
  ) : (
    <div className="group h-full rounded-[1.75rem] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(255,126,41,0.12)]">
      {body}
    </div>
  );
};

const Services = () => {
  return (
    <div className="section-shell py-6 md:py-8 lg:py-10">
      <div className="section-container">
        {/* Heading */}
        <Motion.div
          className="mx-auto mb-8 max-w-3xl text-center md:mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="section-badge">🧠 WHAT I DO</span>
          <h2 className="mt-1 text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] md:text-5xl">
            Full Stack. AI Automation.{" "}
            <span className="text-gradient-primary">Built to Scale.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            I build the software, automate the busywork with AI, and run it all on cloud infrastructure
            that stays fast and reliable as you grow.
          </p>
        </Motion.div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {PILLARS.map((pillar, i) => (
            <Motion.div
              key={pillar.title}
              className={i === 2 ? "md:col-span-2 lg:col-span-1" : ""}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
            >
              <PillarCard pillar={pillar} />
            </Motion.div>
          ))}
        </div>

        {/* Work-together banner */}
        <Motion.div
          className="relative mt-6 overflow-hidden rounded-[2rem] bg-[#0F172A] p-6 text-white shadow-[0_30px_60px_-30px_rgba(15,23,42,0.6)] sm:p-8 md:mt-8 lg:p-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          {/* Ambient glows + grid texture */}
          <div aria-hidden="true" className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#FF7E29]/30 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-[#FF3E6C]/25 blur-3xl" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#FF7E29]/40 bg-[#FF7E29]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FFB27F]">
                <FaRocket aria-hidden="true" /> Let&apos;s work together
              </span>
              <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                From idea to production,{" "}
                <span className="bg-gradient-to-r from-[#FF9A5A] via-[#FF6B5B] to-[#FF5A82] bg-clip-text text-transparent">
                  built to scale
                </span>
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 md:text-base">
                I design, build and ship complete products: SaaS platforms, AI-powered automations and the
                cloud infrastructure that runs them. One developer, end to end, so nothing gets lost
                between teams.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href="/#contact" className="btn-gradient-pill gap-2 focus-visible:ring-offset-[#0F172A]">
                  Get a free consultation
                  <FaArrowRight className="text-sm" aria-hidden="true" />
                </a>
                <a
                  href="/#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3 font-semibold text-white transition duration-300 hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7E29]/80"
                >
                  See my projects
                </a>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">100+</p>
                  <p className="mt-1 text-xs font-medium text-slate-400 md:text-sm">Production web apps delivered</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">6</p>
                  <p className="mt-1 text-xs font-medium text-slate-400 md:text-sm">Years of professional experience</p>
                </div>
              </div>

              <ul className="mt-4 flex flex-wrap gap-2" aria-label="What I can build for you">
                {CAPABILITIES.map((service) => (
                  <li
                    key={service}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-slate-200 transition duration-300 hover:border-[#FF7E29]/50 hover:bg-[#FF7E29]/15 hover:text-white"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Motion.div>
      </div>
    </div>
  );
};

export default Services;
