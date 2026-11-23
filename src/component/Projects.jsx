import { motion as Motion } from "framer-motion";
import { FaArrowRight, FaLayerGroup } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import { PROJECT_CATEGORIES } from "../data/projects";

// Per-category icons: `icon` for the group header, `tagIcon` for the chip on each card image
const CATEGORY_UI = {
  saas: { icon: FaLayerGroup, tagIcon: FaLayerGroup },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const CategoryHeader = ({ category, index }) => {
  const Icon = CATEGORY_UI[category.id].icon;

  return (
    <Motion.div
      className="mb-6 flex flex-col gap-4 md:mb-8 md:flex-row md:items-end md:justify-between"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center gap-4">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#FF7E29] to-[#FF3E6C] text-xl text-white shadow-lg shadow-[#FF5E4B]/30">
          <Icon aria-hidden="true" />
        </span>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#E5631A]">
            {String(index + 1).padStart(2, "0")} · {category.projects.length} projects
          </p>
          <h3 className="mt-0.5 text-2xl font-bold tracking-tight text-[#0F172A] md:text-3xl">
            {category.label}
          </h3>
        </div>
      </div>
      <p className="max-w-md text-sm leading-6 text-slate-600 md:text-right">{category.blurb}</p>
    </Motion.div>
  );
};

const Projects = () => {
  return (
    <div className="section-shell py-6 md:py-8 lg:py-10">
      <div className="section-container">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <span className="section-badge">🚀 RECENT WORK</span>
          <h2 className="mt-1 text-3xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            SaaS platforms and e-commerce stores I designed, built and shipped — real products, live in
            production.
          </p>
        </div>

        {/* All categories, in array order */}
        <div className="space-y-14 md:space-y-20">
          {PROJECT_CATEGORIES.map((category, index) => (
            <div key={category.id} id={`${category.id}-projects`}>
              <CategoryHeader category={category} index={index} />

              <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:gap-6">
                {category.projects.map((project, i) => (
                  <Motion.div
                    key={project.name}
                    className="h-full min-w-0"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: (i % 2) * 0.08 }}
                  >
                    <ProjectCard {...project} tagIcon={CATEGORY_UI[category.id].tagIcon} />
                  </Motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center sm:flex-row md:mt-16">
          <p className="text-sm font-medium text-slate-600 md:text-base">
            Have a SaaS idea or a product in mind? Let's build it together.
          </p>
          <a href="/#contact" className="btn-gradient-pill gap-2 px-6 py-2.5 text-sm">
            Start a project
            <FaArrowRight className="text-xs" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
