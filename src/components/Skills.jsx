import { motion } from 'framer-motion'
import { FiCpu, FiDatabase, FiLayers, FiZap } from 'react-icons/fi'

const skillGroups = [
  {
    title: 'Programming Languages',
    icon: <FiCpu className="text-cyan-500" />,
    skills: ['Python', 'C++', 'SQL', 'MERN Stack'],
  },
  {
    title: 'ML & AI',
    icon: <FiLayers className="text-cyan-500" />,
    skills: ['Pandas', 'NumPy', 'ML Algorithms', 'Model Evaluation'],
  },
  {
    title: 'GenAI & RAG',
    icon: <FiZap className="text-cyan-500" />,
    skills: ['LangChain', 'RAG Pipelines', 'LanceDB', 'Cohere', 'Groq', 'LLM Integration'],
  },
  {
    title: 'Cloud & DevOps',
    icon: <FiCpu className="text-cyan-500" />,
    skills: ['Microsoft Azure', 'Git', 'CI/CD Pipelines'],
  },
  {
    title: 'Microsoft Power Platform',
    icon: <FiDatabase className="text-cyan-500" />,
    skills: ['Power Automate', 'Power Apps'],
  },
  {
    title: 'Software Development',
    icon: <FiCpu className="text-cyan-500" />,
    skills: ['OOP', 'DSA', 'REST APIs'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="mb-10 flex items-center gap-3">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">Skills</span>
          <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
        </motion.div>        

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div key={group.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.08 }} className="rounded-[2rem] border border-slate-200/70 bg-white/70 p-6 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
              <div className="flex items-center gap-3">
                {group.icon}
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{group.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-slate-300/70 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-cyan-400 hover:text-cyan-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
