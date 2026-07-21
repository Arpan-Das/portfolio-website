import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 px-4 py-10 dark:border-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4">
        <div className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Arpan Das</div>
        <div className="flex flex-wrap items-center gap-4">
          <a href="https://www.linkedin.com/in/arpan-das-049409187/" target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 p-3 text-slate-700 transition hover:border-cyan-400 hover:text-cyan-500 dark:border-slate-700 dark:text-slate-300"><FiLinkedin /></a>
          <a href="https://github.com/Arpan-Das" target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 p-3 text-slate-700 transition hover:border-cyan-400 hover:text-cyan-500 dark:border-slate-700 dark:text-slate-300"><FiGithub /></a>
          <a href="https://leetcode.com/u/Arpan-Das/" target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 p-3 text-slate-700 transition hover:border-cyan-400 hover:text-cyan-500 dark:border-slate-700 dark:text-slate-300"><SiLeetcode /></a>
          <a href="mailto:arpandas200015@outlook.com" className="rounded-full border border-slate-300 p-3 text-slate-700 transition hover:border-cyan-400 hover:text-cyan-500 dark:border-slate-700 dark:text-slate-300"><FiMail /></a>
        </div>
        <div className="text-sm text-slate-500 dark:text-slate-400">Built with React + Vite</div>
        <div className="text-sm text-slate-500 dark:text-slate-400">© 2026 Arpan Das</div>
      </div>
    </footer>
  )

}
