import { motion as Motion } from "framer-motion";
import { FaCheck, FaCloud, FaLaptopCode, FaRobot, FaStar } from "react-icons/fa";

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
            Build. Automate.{" "}
            <span className="text-gradient-primary">Scale.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            Scalable software, powered by AI automation.
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
      </div>
    </div>
  );
};

export default Services;
