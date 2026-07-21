import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import ProjectModal from './ProjectModal'

const projects = [
  {
    id: 1,
    title: 'Document Q&A Chatbot',
    tags: ['GenAI', 'LangChain', 'LanceDB', 'Cohere', 'Groq'],
    description: 'RAG-based Q&A system with semantic search over PDFs/DOCX using vector similarity. Built with LangChain, LanceDB, Cohere embeddings, and Groq LLMs.',
    demoUrl: 'https://ask-your-docs-five.vercel.app/',
    githubUrl: 'https://github.com/Arpan-Das/RAG-Frontend',
    filter: 'GenAI',
  },
  {
    id: 2,
    title: 'Multiplayer Chess Platform',
    tags: ['Node.js', 'WebSocket', 'chess.js'],
    description: 'Real-time multiplayer chess platform built from scratch using WebSocket for live gameplay and chess.js for move validation. Architected for future grandmaster-style AI bots via CNNs on PGN data.',
    demoUrl: 'NA',
    githubUrl: 'https://github.com/Arpan-Das/chess',
    filter: 'Game Dev',
  },
]

const filters = ['All', 'GenAI', 'Full Stack', 'Game Dev']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [activeProject, setActiveProject] = useState(null)

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.filter === activeFilter)
  }, [activeFilter])

  return (
    <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="mb-10 flex items-center gap-3">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">Projects</span>
          <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
        </motion.div>

        <div className="mb-8 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button key={filter} onClick={() => setActiveFilter(filter)} className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeFilter === filter ? 'bg-cyan-500 text-slate-950' : 'bg-slate-200/70 text-slate-700 dark:bg-slate-800 dark:text-slate-300'}`}>
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <motion.article key={project.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group rounded-[2rem] border border-slate-200/70 bg-white/70 p-8 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/70">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-600 dark:text-cyan-300">{tag}</span>
                ))}
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
              <p className="mt-4 text-slate-600 dark:text-slate-400">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button onClick={() => setActiveProject(project)} className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 font-semibold text-slate-950 transition hover:scale-105">
                  Live Demo <FiExternalLink />
                </button>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 font-semibold text-slate-800 transition hover:scale-105 dark:border-slate-700 dark:text-slate-100">
                  GitHub <FiGithub />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </section>
  )
}
