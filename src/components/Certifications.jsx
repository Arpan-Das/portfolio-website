import { motion } from 'framer-motion'
import { FiExternalLink, FiShield } from 'react-icons/fi'


const certs = [
  {
    title: 'Claude Certified Associate - Foundations',
    badge: 'Certified',
    buttonLabel: 'Verify Certificate',
    url: 'https://www.credly.com/badges/f58c8a2d-3c26-4256-b35d-a3106c04c1e5/public_url',
    accent: 'green',
    logo: '/claude-certified-associate-foundations.png'
  },
  {
    title: 'AZ-900: Azure Fundamentals',
    badge: 'Certified',
    buttonLabel: 'Verify Certificate',
    url: 'https://www.credly.com/badges/5267440f-8d00-4b70-b309-52689ed5075b',
    accent: 'green',
    logo: '/microsoft-certified-azure-fundamentals.png'
  },
  {
    title: 'AI-103: Develop AI Apps and Agents on Azure',
    badge: 'In Progress',
    buttonLabel: 'Pursuing',
    accent: 'amber',
    logo: ''
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="mb-10 flex items-center gap-3">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">Certifications</span>
          <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {certs.map((cert, index) => (
            <motion.div key={cert.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="rounded-[2rem] border border-slate-200/70 bg-white/70 p-8 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-500">
                    { cert.logo == '' ?
                      <FiShield />
                      :
                      <img src={cert.logo} alt="" width={100} />
                    }
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">{cert.title}</h3>
                </div>
                <span className={`rounded-full px-3 py-1 text-sm font-semibold ${cert.accent === 'green' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300' : 'animate-pulse bg-amber-500/10 text-amber-600 dark:text-amber-300'}`}>{cert.badge}</span>
              </div>
              <div className="mt-6 flex items-center gap-3">
                {cert.url ? (
                  <a href={cert.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 font-semibold text-slate-950 transition hover:scale-105">
                    {cert.buttonLabel} <FiExternalLink />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-300">
                    {cert.buttonLabel}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
