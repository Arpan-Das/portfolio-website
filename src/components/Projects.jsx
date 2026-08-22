import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheckCircle,
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";
import {
  featuredProjects,
  personalProjects,
  professionalProjects,
} from "../data/projects";
import { useCountUp } from "../hooks/useCountUp";
import { useState } from "react";

const impactMetrics = [
  { value: 65, suffix: "%", label: "NPS Response Rate" },
  { value: 18, suffix: "%", label: "Accuracy Gain" },
  { value: 40, suffix: "%", label: "Inspection Time Saved" },
  { value: 50, suffix: "-60%", label: "Workload Reduced" },
];

function Metric({ value, suffix, label }) {
  const count = useCountUp(value);
  return (
    <div className="text-center">
      <div className="text-3xl font-black text-cyan-400">
        {count}
        {suffix}
      </div>
      <div className="mt-1 text-xs text-slate-400">{label}</div>
    </div>
  );
}

function Tabs({ categories, activeCategory, onChange, label }) {
  return (
    <div
      role="tablist"
      aria-label={label}
      className="mt-5 flex flex-wrap gap-2"
    >
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          role="tab"
          aria-selected={activeCategory === category}
          onClick={() => onChange(category)}
          className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${activeCategory === category ? "border-cyan-500 bg-cyan-500 text-slate-950" : "border-slate-300 text-slate-600 hover:border-cyan-400 hover:text-cyan-500 dark:border-slate-700 dark:text-slate-300"}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

function TechBadges({ techStack }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {techStack.slice(0, 3).map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-600 dark:text-cyan-300"
        >
          {tech}
        </span>
      ))}
      {techStack.length > 3 && (
        <span className="px-1 py-1 text-xs text-slate-500">
          +{techStack.length - 3} more
        </span>
      )}
    </div>
  );
}

function ProjectCard({ project, index, featured = false }) {
  const type = professionalProjects.some((item) => item.slug === project.slug)
    ? "Professional"
    : "Personal";
  const typeClass =
    type === "Professional"
      ? "border-cyan-400/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-300"
      : "border-fuchsia-400/30 bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-300";

  return (
    <motion.article
      layout
      key={project.slug}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-5 shadow-lg backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.18)] dark:bg-slate-900/70 ${featured ? "border-cyan-400/40 bg-gradient-to-br from-cyan-500/15 via-white/70 to-fuchsia-500/10 p-6 dark:from-cyan-500/15 dark:via-slate-900/80 dark:to-fuchsia-500/10" : "border-slate-200/70 bg-white/70 dark:border-slate-800"}`}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
        aria-label={`View details for ${project.title}`}
      >
        <div className="flex items-start justify-between gap-3">
          <span
            className={`${featured ? "text-5xl" : "flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/10 text-3xl"} text-center`}
            aria-hidden="true"
          >
            {project.icon}
          </span>
          <span
            className={`rounded-full border px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider ${typeClass}`}
          >
            {type}
            {type === "Professional" && ` @ ${project.company}`}
          </span>
        </div>
        <h4
          className={`${featured ? "mt-5 text-2xl" : "mt-4 text-xl"} font-bold text-slate-900 dark:text-slate-100`}
        >
          {project.title}
        </h4>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
          {project.shortDesc}
        </p>
        {!featured && (
          <div className="mt-4">
            <p className="text-[0.68rem] font-semibold uppercase tracking-wider text-cyan-500">
              Problem
            </p>
            <p className="line-clamp-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              {project.problem}
            </p>
          </div>
        )}
        <div className="mt-4">
          <p className="text-[0.68rem] font-semibold uppercase tracking-wider text-cyan-500">
            Outcome
          </p>
          <p className="line-clamp-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
            {project.outcome}
          </p>
        </div>
        <div className="mt-4">
          <TechBadges techStack={project.techStack} />
        </div>
        {project.status === "in-progress" && (
          <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-2.5 py-1 text-xs font-semibold text-amber-600 dark:text-amber-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
            In Progress
          </span>
        )}
        {project.deliveryHighlights?.length > 0 && (
          <span className="mt-4 inline-flex w-fit items-center gap-1 rounded-full border border-amber-400/30 bg-amber-500/10 px-2.5 py-1 text-xs font-semibold text-amber-600 dark:text-amber-300">
            <FiCheckCircle /> {project.deliveryHighlights.length} Delivery
            Highlights
          </span>
        )}
        <span className="mt-auto flex items-center gap-2 pt-5 text-sm font-semibold text-cyan-600 dark:text-cyan-300">
          Details{" "}
          <FiArrowRight className="transition group-hover:translate-x-1" />
        </span>
      </Link>
      {!featured &&
        type === "Personal" &&
        (project.demoUrl || project.githubUrl) && (
          <div className="mt-3 flex gap-2 border-t border-slate-200/60 pt-3 dark:border-slate-800">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="inline-flex items-center gap-1 rounded-full bg-cyan-500 px-3 py-1.5 text-xs font-semibold text-slate-950"
              >
                <FiExternalLink /> Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="inline-flex items-center gap-1 rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200"
              >
                <FiGithub /> GitHub
              </a>
            )}
          </div>
        )}
    </motion.article>
  );
}

export default function Projects() {
  const [professionalCategory, setProfessionalCategory] = useState("All");
  const [personalCategory, setPersonalCategory] = useState("All");
  const professionalCategories = [
    "All",
    ...new Set(professionalProjects.flatMap((project) => project.category)),
  ];
  const personalCategories = [
    "All",
    ...new Set(personalProjects.flatMap((project) => project.category)),
  ];
  const filteredProfessional =
    professionalCategory === "All"
      ? professionalProjects
      : professionalProjects.filter((project) =>
          project.category.includes(professionalCategory),
        );
  const filteredPersonal =
    personalCategory === "All"
      ? personalProjects
      : personalProjects.filter((project) =>
          project.category.includes(personalCategory),
        );

  return (
    <section id="projects" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
          <span>
            <strong className="text-slate-800 dark:text-slate-200">
              {professionalProjects.length}
            </strong>
            Professional Projects
          </span>
          <span className="hidden sm:inline">|</span>
          <span>
            <strong className="text-slate-800 dark:text-slate-200">
              {personalProjects.length}
            </strong>{" "}
            Personal Projects
          </span>
          <span className="hidden sm:inline">|</span>
          <span>
            <strong className="text-cyan-500">{featuredProjects.length}</strong>{" "}
            Featured
          </span>
        </div>
        <div id="featured-projects">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
            Featured Projects
          </h3>
          <div className="mt-3 h-1 w-24 rounded-full bg-cyan-500" />
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
                featured
              />
            ))}
          </div>
        </div>
        <div className="grid gap-4 rounded-2xl bg-slate-900 px-5 py-6 shadow-xl dark:bg-slate-800/90 sm:grid-cols-4 sm:px-8">
          <Metric {...impactMetrics[0]} />
          <Metric {...impactMetrics[1]} />
          <Metric {...impactMetrics[2]} />
          <Metric {...impactMetrics[3]} />
        </div>
        <div id="professional-projects">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
            Professional Projects
          </h3>
          <div className="mt-3 h-1 w-24 rounded-full bg-cyan-500" />
          <Tabs
            categories={professionalCategories}
            activeCategory={professionalCategory}
            onChange={setProfessionalCategory}
            label="Filter professional projects"
          />
          <motion.div
            layout
            className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredProfessional.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
        <div id="personal-projects">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
            Personal Projects
          </h3>
          <div className="mt-3 h-1 w-24 rounded-full bg-cyan-500" />
          <Tabs
            categories={personalCategories}
            activeCategory={personalCategory}
            onChange={setPersonalCategory}
            label="Filter personal projects"
          />
          <motion.div layout className="mt-6 grid gap-4 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filteredPersonal.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
