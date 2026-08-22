import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import { useCountUp } from '../hooks/useCountUp'

const stats = [
  { value: 3.5, suffix: '+', label: 'Years Experience' },
  { value: 18, suffix: '%', label: 'Accuracy Improvement' },
  { value: 40, suffix: '%', label: 'Time Saved' },
  { value: 55, suffix: '%', label: 'Workload Reduced' },
]

function StatCard({ stat }) {
  const count = useCountUp(stat.value)
  return (
    <div className="rounded-[1.5rem] border border-slate-200/70 bg-slate-100/70 p-6 shadow-lg dark:border-slate-800 dark:bg-slate-950/60">
      <div className="text-3xl font-black text-cyan-500">{count}{stat.suffix}</div>
      <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="mb-10 flex items-center gap-3">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">About</span>
          <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-slate-200/70 bg-white/70 p-8 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Arpan Das</h2>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-300">
                <FiCheckCircle /> Open to Work
              </span>
            </div>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              System Engineer at Tata Consultancy Services with 3.5+ years of experience building ML-based anomaly detection pipelines, LLM-integrated automation, and RAG-based Q&A systems. Actively expanding into FastAPI-based model serving and AWS.
            </p>
            <div className="mt-6 grid gap-3 border-t border-slate-200/70 pt-5 text-sm dark:border-slate-800 sm:grid-cols-3">
              <div><span className="block text-xs font-semibold uppercase tracking-wider text-cyan-500">Based in</span><span className="mt-1 block text-slate-700 dark:text-slate-300">India</span></div>
              <div><span className="block text-xs font-semibold uppercase tracking-wider text-cyan-500">Focus</span><span className="mt-1 block text-slate-700 dark:text-slate-300">ML and GenAI</span></div>
              <div><span className="block text-xs font-semibold uppercase tracking-wider text-cyan-500">Availability</span><span className="mt-1 block text-slate-700 dark:text-slate-300">Open to opportunities</span></div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
