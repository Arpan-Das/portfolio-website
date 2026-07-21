import { useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiAlertTriangle, FiAward, FiUser, FiCheckCircle } from 'react-icons/fi'
import { professionalProjects } from '../data/projects'

const techUsage = {
  'Power Apps (Canvas)': 'Enabled fast low-code app creation with a responsive, user-friendly experience for business workflows.',
  'Power Automate': 'Automated repetitive steps and notifications so the process stayed consistent and scalable.',
  'SharePoint': 'Provided a reliable document and data backbone for collaboration and governance.',
  'Dataverse': 'Connected business data securely and made the solution easier to extend over time.',
  'Encodian Flow': 'Allowed seamless document generation and formatting in a governed workflow.',
  'Encodian': 'Simplified document creation and approval-ready output generation.',
  'Python': 'Supported rapid model development and data analysis for intelligent automation.',
  'Machine Learning': 'Enabled anomaly detection using pattern recognition on historical sensor data.',
  'Streamlit': 'Delivered an interactive dashboard for analysts to explore anomalies and insights quickly.',
  'LLM Integration': 'Added summarization and insight generation to make detections easier to interpret.',
  'Microsoft Copilot': 'Accelerated conversational experiences and helped users get answers faster.',
  'Dataverse': 'Stored case-related information in a structured way for automation and reporting.',
  'ServiceNow': 'Connected the solution to existing service workflows and ticketing processes.',
  'Microsoft Teams': 'Embedded reminders and submissions into a familiar collaboration surface.',
}

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = professionalProjects.find((item) => item.slug === slug)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [slug])

  if (!project) {
    return (
      <main className="px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white/70 p-10 text-center shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
          <h1 className="text-3xl font-semibold">Project not found</h1>
          <p className="mt-3 text-slate-600 dark:text-slate-400">The requested project could not be found.</p>
          <button onClick={() => navigate('/')} className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 font-semibold text-slate-950">
            <FiArrowLeft /> Back to portfolio
          </button>
        </div>
      </main>
    )
  }

  const currentIndex = professionalProjects.findIndex((item) => item.slug === slug)
  const prevProject = currentIndex > 0 ? professionalProjects[currentIndex - 1] : null
  const nextProject = currentIndex < professionalProjects.length - 1 ? professionalProjects[currentIndex + 1] : null

  return (
    <main className="px-4 pb-24 pt-28 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mx-auto flex max-w-7xl flex-col gap-8">
          <section className="overflow-hidden rounded-[2rem] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-white/70 to-slate-200/80 p-8 shadow-2xl backdrop-blur-xl dark:from-cyan-500/10 dark:via-slate-900/80 dark:to-slate-950/80 sm:p-10 lg:p-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">Professional Project</p>
                <div className="mt-3 flex items-center gap-4">
                  <span className="text-5xl">{project.icon}</span>
                  <div>
                    <h1 className="text-3xl font-semibold sm:text-4xl">{project.title}</h1>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-sm font-semibold text-cyan-600 dark:text-cyan-300">{project.company}</span>
                      <span className="rounded-full border border-slate-300/70 bg-white/70 px-3 py-1 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">{project.myRole}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-300/70 bg-white/70 px-3 py-1 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                <p className="font-semibold text-slate-900 dark:text-slate-100">Projects → Professional → {project.title}</p>
              </div>
            </div>
          </section>

          <section className="grid gap-4 md:grid-cols-3">
            <motion.article initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.35 }} className="rounded-[1.5rem] border border-cyan-500/20 bg-white/70 p-6 shadow-lg backdrop-blur-xl dark:bg-slate-900/70">
              <div className="flex items-center gap-2 text-cyan-500"><FiAlertTriangle /> <h2 className="font-semibold">The Problem</h2></div>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{project.problem}</p>
            </motion.article>
            <motion.article initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.35 }} className="rounded-[1.5rem] border border-cyan-500/20 bg-white/70 p-6 shadow-lg backdrop-blur-xl dark:bg-slate-900/70">
              <div className="flex items-center gap-2 text-cyan-500"><FiUser /> <h2 className="font-semibold">My Role</h2></div>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{project.myRole} · Delivered for TCS with business and technical stakeholders.</p>
            </motion.article>
            <motion.article initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.35 }} className="rounded-[1.5rem] border border-cyan-500/20 bg-white/70 p-6 shadow-lg backdrop-blur-xl dark:bg-slate-900/70">
              <div className="flex items-center gap-2 text-cyan-500"><FiAward /> <h2 className="font-semibold">Outcome</h2></div>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{project.outcome}</p>
            </motion.article>
          </section>

          <section className="rounded-[2rem] border border-slate-200/70 bg-white/70 p-8 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
            <h2 className="text-2xl font-semibold">What I Built</h2>
            <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-400">{project.whatIBuilt}</p>
            {project.deliveryHighlights.length > 0 && (
              <div className="mt-8 rounded-[1.5rem] border border-cyan-500/20 bg-cyan-500/10 p-6">
                <h3 className="text-lg font-semibold text-cyan-600 dark:text-cyan-300">Delivery Highlights</h3>
                <ul className="mt-4 space-y-3">
                  {project.deliveryHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-200">
                      <FiCheckCircle className="mt-0.5 shrink-0 text-cyan-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          <section className="rounded-[2rem] border border-slate-200/70 bg-white/70 p-8 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
            <h2 className="text-2xl font-semibold">Tech Stack</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {project.techStack.map((tech, index) => (
                <motion.div key={tech} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * index, duration: 0.3 }} className="rounded-[1.2rem] border border-slate-200/70 bg-slate-50/80 p-4 dark:border-slate-700 dark:bg-slate-950/70">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-900 dark:text-slate-100">{tech}</span>
                    <span className="text-lg text-cyan-500">⚙️</span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{techUsage[tech] || 'Supported a robust and maintainable implementation for this project.'}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {project.deliveryHighlights.length > 0 && (
            <section className="rounded-[2rem] border border-slate-200/70 bg-white/70 p-8 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
              <h2 className="text-2xl font-semibold">Delivery & Impact</h2>
              <div className="mt-6 space-y-4">
                {project.deliveryHighlights.map((item, index) => (
                  <div key={item} className="flex gap-3">
                    <div className="mt-1 h-3 w-3 rounded-full bg-cyan-500" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Step {index + 1}</p>
                      <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-[1.5rem] border border-cyan-500/20 bg-cyan-500/10 p-5 text-sm leading-8 text-slate-700 dark:text-slate-200">
                <span className="font-semibold text-cyan-600 dark:text-cyan-300">Measurable outcome:</span> {project.outcome}
              </div>
            </section>
          )}

          <section className="flex flex-col gap-4 rounded-[2rem] border border-slate-200/70 bg-white/70 p-6 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70 sm:flex-row sm:items-center sm:justify-between">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 transition hover:translate-x-[-2px] dark:text-cyan-300">
              <FiArrowLeft /> Back to Projects
            </Link>
            <div className="flex flex-wrap gap-3">
              {prevProject && (
                <button onClick={() => navigate(`/projects/${prevProject.slug}`)} className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:scale-105 dark:border-slate-700 dark:text-slate-100">
                  ← Previous Project
                </button>
              )}
              {nextProject && (
                <button onClick={() => navigate(`/projects/${nextProject.slug}`)} className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:scale-105 dark:border-slate-700 dark:text-slate-100">
                  Next Project →
                </button>
              )}
            </div>
          </section>
        </motion.div>
    </main>
  )
}
