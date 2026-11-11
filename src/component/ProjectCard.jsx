import LiveButton from "./LiveButton";

/**
 * Data-driven project card. Receives one project entry from src/data/projects.js,
 * plus `tagIcon` (the react-icons component shown in the image chip).
 */
const ProjectCard = ({ name, subtitle, tag, tagIcon, description, tech, live, image }) => {
  const TagIcon = tagIcon;

  return (
    <article className="group relative h-full min-w-0">
      {/* Gradient ring that lights up on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-[1.6rem] bg-gradient-to-br from-[#FF7E29] via-[#FF5E4B] to-[#FF3E6C] opacity-0 transition duration-500 group-hover:opacity-100"
      />

      <div className="premium-card relative flex h-full flex-col overflow-hidden rounded-[1.5rem] transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:border-transparent group-hover:shadow-[0_24px_50px_-20px_rgba(255,94,75,0.35)]">
        {/* Screenshot */}
        <div className="relative h-48 overflow-hidden border-b border-slate-200 bg-slate-100 sm:h-52 md:h-56">
          <img
            src={image}
            alt={`${name} website screenshot`}
            width={1520}
            height={720}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />

          {tag && (
            <span className="absolute left-3 top-3 inline-flex max-w-[calc(100%-6rem)] items-center gap-1.5 truncate rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[11px] font-semibold text-[#0F172A] shadow-sm backdrop-blur-md">
              {TagIcon && <TagIcon className="shrink-0 text-[#FF5E4B]" aria-hidden="true" />}
              <span className="truncate">{tag}</span>
            </span>
          )}
          <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Live
          </span>
        </div>

        {/* Body */}
        <div className="relative z-10 flex flex-1 flex-col p-5 md:p-6">
          <h3 className="text-lg font-bold leading-snug tracking-tight md:text-xl">
            <span className="text-gradient-primary">{name}</span>
            <span className="mt-0.5 block text-sm font-semibold text-slate-500">{subtitle}</span>
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>

          <ul className="mb-1 mt-4 flex flex-wrap gap-1.5" aria-label="Tech stack">
            {tech.map((item) => (
              <li
                key={item}
                className="rounded-full border border-slate-200 bg-slate-100/90 px-2.5 py-1 text-xs font-medium text-slate-700 transition duration-300 hover:border-[#FF7E29]/50 hover:bg-[#FF7E29]/10 hover:text-[#FF7E29]"
              >
                {item}
              </li>
            ))}
          </ul>

          <LiveButton href={live} />
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
