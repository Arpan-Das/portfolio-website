import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import ProjectModal from './ProjectModal'
import { personalProjects, professionalProjects } from '../data/projects'

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="flex items-center gap-3">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">Projects</span>
          <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="space-y-6">
          <div id="professional-projects">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Professional Projects</h3>
            <div className="mt-3 h-1 w-24 rounded-full bg-cyan-500" />
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {professionalProjects.map((project, index) => (
                <motion.article key={project.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.08 }} className="group rounded-[1.8rem] border border-cyan-500/20 bg-white/70 p-7 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(6,182,212,0.18)] dark:border-cyan-500/20 dark:bg-slate-900/70">
                  <div className="text-4xl">{project.icon}</div>
                  <h4 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-slate-100">{project.title}</h4>
                  <div className="mt-5 space-y-4 text-sm text-slate-600 dark:text-slate-400">
                    <div>
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-cyan-500">Problem</p>
                      <p className="mt-1 leading-7">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-cyan-500">What I Built</p>
                      <p className="mt-1 leading-7">{project.whatIBuilt}</p>
                    </div>
                    <div>
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-cyan-500">My Role</p>
                      <p className="mt-1">{project.myRole}</p>
                    </div>
                    <div>
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-cyan-500">Measurable Outcome</p>
                      <p className="mt-1 leading-7">{project.outcome}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-600 dark:text-cyan-300">{tech}</span>
                    ))}
                  </div>
                  {project.deliveryHighlights.length > 0 && (
                    <div className="mt-6">
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-cyan-500">Delivery Highlights</p>
                      <ul className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        {project.deliveryHighlights.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="mt-1 h-2 w-2 rounded-full bg-cyan-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <Link to={`/projects/${project.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 transition hover:translate-x-1 dark:text-cyan-300">
                    More details <span aria-hidden="true">→</span>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>

          <div id="personal-projects">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Personal Projects</h3>
            <div className="mt-3 h-1 w-24 rounded-full bg-cyan-500" />
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {personalProjects.map((project, index) => (
                <motion.article key={project.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.08 }} className="group rounded-[1.8rem] border border-cyan-500/20 bg-white/70 p-7 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(6,182,212,0.18)] dark:border-cyan-500/20 dark:bg-slate-900/70">
                  <div className="text-4xl">{project.icon}</div>
                  <h4 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-slate-100">{project.title}</h4>
                  <div className="mt-5 space-y-4 text-sm text-slate-600 dark:text-slate-400">
                    <div>
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-cyan-500">Problem</p>
                      <p className="mt-1 leading-7">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-cyan-500">What I Built</p>
                      <p className="mt-1 leading-7">{project.whatIBuilt}</p>
                    </div>
                    <div>
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-cyan-500">My Role</p>
                      <p className="mt-1">{project.myRole}</p>
                    </div>
                    <div>
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-cyan-500">Measurable Outcome</p>
                      <p className="mt-1 leading-7">{project.outcome}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-600 dark:text-cyan-300">{tech}</span>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-wrap gap-3">
                    {project.demoUrl != '#' &&
                      <button onClick={() => setActiveProject(project)} className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 font-semibold text-slate-950 transition hover:scale-105">
                        Live Demo <FiExternalLink />
                      </button>
                    }
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 font-semibold text-slate-800 transition hover:scale-105 dark:border-slate-700 dark:text-slate-100">
                      GitHub <FiGithub />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </section>
  )
}
