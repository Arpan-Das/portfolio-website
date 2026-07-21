import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../hooks/useTheme'
import { useScrollSpy } from '../hooks/useScrollSpy'

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const activeSection = useScrollSpy(links.map(({ id }) => id))

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-xl bg-white/70 dark:bg-slate-950/70 shadow-lg' : 'bg-transparent'}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button onClick={() => scrollTo('hero')} className="flex items-center gap-3 rounded-full px-3 py-2 text-sm font-semibold tracking-wide text-slate-900 dark:text-slate-100">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/50 bg-cyan-500/10 text-lg font-bold text-cyan-500">AD</span>
          <span className="hidden sm:inline">Arpan Das</span>
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-sm font-medium transition ${activeSection === link.id ? 'text-cyan-500' : 'text-slate-700 dark:text-slate-300'}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950/5 text-slate-800 transition hover:scale-105 hover:bg-cyan-500/10 dark:border-cyan-400/30 dark:bg-white/10 dark:text-cyan-200"
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>

          <button
            aria-label="Toggle navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/70 text-slate-800 dark:border-slate-700 dark:text-slate-200 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200/60 bg-white/90 px-4 py-4 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`rounded-lg px-3 py-2 text-left text-sm font-medium ${activeSection === link.id ? 'bg-cyan-500/10 text-cyan-500' : 'text-slate-700 dark:text-slate-200'}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  )
}
