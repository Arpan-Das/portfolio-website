import { motion } from 'framer-motion'

const entries = [
  {
    role: 'System Engineer',
    company: 'Tata Consultancy Services',
    period: 'July 2022 – Present',
    bullets: [
      'Built ML-based anomaly detection pipelines in Python, improving accuracy by ~18%',
      'Built Streamlit dashboard cutting manual inspection time by ~40%',
      'Integrated LLMs for auto-generated insights, reducing analysis workload by 50-60%',
      'Developed Power Apps for innovation tracking with approval workflows',
      'Built AI chatbot using Microsoft Copilot + Power Automate reducing workload by 30-40%',
      'Automated NPS feedback workflow increasing response rates from 3% to 65%',
      'Supported Oracle Database: performance tuning, backup/recovery, query optimization',
    ],
  },
  {
    role: 'MERN Stack Devloper (Intern)',
    company: 'NYX Wolves',
    period: 'June 2021 – Nov 2021',
    bullets: [
      
    ], 
  }
]

export default function Experience() {
  return (
    <section id="experience" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="mb-10 flex items-center gap-3">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">Experience</span>
          <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
        </motion.div>

        <div className="relative ml-2 border-l border-slate-300 pl-8 dark:border-slate-700">
          {entries.map((entry, index) => (
            <motion.div key={entry.company} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative mb-10 rounded-[2rem] border border-slate-200/70 bg-white/70 p-8 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
              <span className="absolute -left-[2.15rem] top-8 h-4 w-4 rounded-full border-4 border-cyan-500 bg-slate-100 dark:bg-slate-900" />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">{entry.company}</h3>
                  <p className="mt-1 text-lg text-cyan-500">{entry.role}</p>
                </div>
                <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-600 dark:text-cyan-300">{entry.period}</div>
              </div>
              <ul className="mt-6 space-y-3 text-slate-600 dark:text-slate-400">
                {entry.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
