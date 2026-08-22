import { useEffect } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiArrowRight, FiAward, FiCheckCircle, FiExternalLink, FiGithub, FiUser, FiAlertTriangle } from 'react-icons/fi'
import { allProjects, getProjectBySlug, getProjectType } from '../data/projects'

const techIcons = ['⚙️', '🧩', '🔧', '📦', '✨']

function StatusBadge({ status }) {
  const inProgress = status === 'in-progress'
  return <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-semibold ${inProgress ? 'border-amber-400/40 bg-amber-500/10 text-amber-600 dark:text-amber-300' : 'border-emerald-400/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-300'}`}><span className={`h-2 w-2 rounded-full ${inProgress ? 'animate-pulse bg-amber-400' : 'bg-emerald-400'}`} />{inProgress ? 'In Progress' : 'Completed'}</span>
}

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = getProjectBySlug(slug)
  const type = getProjectType(slug)
  const projectsOfType = type === 'professional' ? allProjects.filter((item) => getProjectType(item.slug) === 'professional') : allProjects.filter((item) => getProjectType(item.slug) === 'personal')
  const currentIndex = projectsOfType.findIndex((item) => item.slug === slug)
  const previous = currentIndex > 0 ? projectsOfType[currentIndex - 1] : null
  const next = currentIndex < projectsOfType.length - 1 ? projectsOfType[currentIndex + 1] : null

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) return <Navigate to="/" replace state={{ toast: 'Project not found' }} />

  const backTarget = type === 'professional' ? 'professional-projects' : 'personal-projects'

  return (
    <main className="px-4 pb-24 pt-28 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mx-auto flex max-w-7xl flex-col gap-8">
        <section className="overflow-hidden rounded-[2rem] border border-cyan-500/25 bg-gradient-to-br from-cyan-500/15 via-white/70 to-fuchsia-500/10 p-6 shadow-2xl backdrop-blur-xl dark:from-cyan-500/15 dark:via-slate-900/80 dark:to-fuchsia-500/10 sm:p-10">
          <nav className="text-sm text-slate-500 dark:text-slate-400" aria-label="Breadcrumb"><Link to="/" className="hover:text-cyan-500">Home</Link><span className="mx-2">→</span><Link to="/" state={{ scrollToId: 'projects' }} className="hover:text-cyan-500">Projects</Link><span className="mx-2">→</span><span>{type === 'professional' ? 'Professional' : 'Personal'}</span><span className="mx-2">→</span><span className="text-slate-700 dark:text-slate-200">{project.title}</span></nav>
          <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"><div><div className="text-6xl" aria-hidden="true">{project.icon}</div><h1 className="mt-4 text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-5xl">{project.title}</h1><div className="mt-4 flex flex-wrap gap-2"><StatusBadge status={project.status} /><span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-sm font-semibold text-cyan-600 dark:text-cyan-300">{type === 'professional' ? `Professional @ ${project.company}` : 'Personal Project'}</span></div><div className="mt-5 flex flex-wrap gap-2">{project.techStack.map((tech) => <span key={tech} className="rounded-full border border-slate-300/70 bg-white/70 px-3 py-1 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">{tech}</span>)}</div></div>{type === 'personal' && <div className="flex flex-wrap gap-2">{project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 font-semibold text-slate-950">Live Demo <FiExternalLink /></a>}{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-100">GitHub <FiGithub /></a>}</div>}</div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">{[[FiAlertTriangle, 'The Problem', project.problem], [FiUser, 'My Role', project.myRole], [FiAward, 'Outcome', project.outcome]].map(([Icon, title, text], index) => <motion.article key={title} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="rounded-2xl border border-cyan-500/20 bg-white/70 p-6 shadow-lg backdrop-blur-xl dark:bg-slate-900/70"><div className="flex items-center gap-2 text-cyan-500"><Icon /><h2 className="font-semibold">{title}</h2></div><p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{text}</p></motion.article>)}</section>

        <section className="rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70 sm:p-8"><h2 className="text-2xl font-semibold">What I Built</h2><p className="mt-4 leading-8 text-slate-600 dark:text-slate-400">{project.whatIBuilt}</p>{project.deliveryHighlights?.length > 0 && <ul className="mt-6 space-y-3">{project.deliveryHighlights.map((item) => <li key={item} className="flex gap-3 text-sm text-slate-700 dark:text-slate-200"><FiCheckCircle className="mt-0.5 shrink-0 text-cyan-500" />{item}</li>)}</ul>}</section>

        <section className="rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70 sm:p-8"><h2 className="text-2xl font-semibold">Tech Stack</h2><div className="mt-5 flex flex-wrap gap-3">{project.techStack.map((tech, index) => <div key={tech} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.14)] dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"><span className="mr-2 text-lg">{techIcons[index % techIcons.length]}</span>{tech}</div>)}</div></section>

        {project.architecture?.length > 0 && <section className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70 sm:p-8"><h2 className="text-2xl font-semibold">How It Works</h2><div className="mt-8 grid gap-6 sm:grid-cols-2 lg:flex lg:items-start lg:gap-0">{project.architecture.map((step, index) => <motion.div key={step.step} initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="relative flex flex-1 flex-col items-center text-center lg:px-2"><div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 text-2xl">{step.icon}</div><p className="mt-3 text-sm font-medium text-slate-700 dark:text-slate-300">{step.step}</p>{index < project.architecture.length - 1 && <div className="absolute left-[calc(50%+2rem)] right-[calc(-50%+2rem)] top-6 hidden border-t border-dashed border-cyan-500/50 lg:block" />}</motion.div>)}</div></section>}

        {(project.deliveryHighlights?.length > 0 || project.outcome) && <section className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6 shadow-lg sm:p-8"><h2 className="text-2xl font-semibold">Impact & Delivery</h2>{project.deliveryHighlights?.length > 0 && <div className="mt-6 space-y-4">{project.deliveryHighlights.map((item) => <div key={item} className="flex gap-3"><span className="mt-1 h-3 w-3 rounded-full bg-cyan-500" /><p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{item}</p></div>)}</div>}<div className="mt-6 rounded-xl border border-cyan-400/30 bg-white/60 p-5 text-sm leading-7 text-slate-700 dark:bg-slate-900/60 dark:text-slate-200"><FiAward className="mr-2 inline text-cyan-500" />{project.outcome}</div></section>}

        <section className="flex flex-col gap-5 rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70"><Link to="/" state={{ scrollToId: backTarget }} className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-300"><FiArrowLeft /> Back to Projects</Link><div className="grid gap-3 sm:grid-cols-2">{previous ? <button onClick={() => navigate(`/projects/${previous.slug}`)} className="flex items-center gap-3 rounded-xl border border-slate-300 p-3 text-left text-sm hover:border-cyan-400 dark:border-slate-700"><FiArrowLeft /><span>{previous.icon} {previous.title}</span></button> : <span />}{next && <button onClick={() => navigate(`/projects/${next.slug}`)} className="flex items-center justify-end gap-3 rounded-xl border border-slate-300 p-3 text-right text-sm hover:border-cyan-400 dark:border-slate-700"><span>{next.icon} {next.title}</span><FiArrowRight /></button>}</div></section>
      </motion.div>
    </main>
  )
}
