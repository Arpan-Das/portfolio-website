import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../hooks/useTheme'
import { useScrollSpy } from '../hooks/useScrollSpy'

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [projectMenuOpen, setProjectMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const activeSection = useScrollSpy(links.map(({ id }) => id))
  const navigate = useNavigate()
  const location = useLocation()
  const dropdownRef = useRef(null)
  const closeTimeoutRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProjectMenuOpen(false)
      }
    }

    const handleScrollClose = () => setProjectMenuOpen(false)

    document.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('scroll', handleScrollClose, { passive: true })
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('scroll', handleScrollClose)
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current)
      }
    }
  }, [])

  const clearProjectMenuClose = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
    }
  }

  const scheduleProjectMenuClose = () => {
    clearProjectMenuClose()
    closeTimeoutRef.current = setTimeout(() => setProjectMenuOpen(false), 120)
  }

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
    setProjectMenuOpen(false)
  }

  const handleProjectsLink = (sectionId) => {
    setOpen(false)
    setProjectMenuOpen(false)

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToId: sectionId } })
      return
    }

    scrollTo(sectionId)
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

          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => {
              clearProjectMenuClose()
              setProjectMenuOpen(true)
            }}
            onMouseLeave={scheduleProjectMenuClose}
          >
            <button
              onClick={() => setProjectMenuOpen((prev) => !prev)}
              onMouseEnter={() => {
                clearProjectMenuClose()
                setProjectMenuOpen(true)
              }}
              className="text-sm font-medium text-slate-700 transition hover:text-cyan-500 dark:text-slate-300"
            >
              Projects
            </button>
            {projectMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 mt-3 w-56 rounded-2xl border border-white/20 bg-slate-900/85 p-2 shadow-2xl backdrop-blur-xl"
                onMouseEnter={clearProjectMenuClose}
                onMouseLeave={scheduleProjectMenuClose}
              >
                <button onClick={() => handleProjectsLink('professional-projects')} className="flex w-full items-center rounded-xl px-3 py-2 text-left text-sm font-medium text-slate-200 transition hover:bg-cyan-500/20 hover:text-cyan-300">
                  Professional Projects
                </button>
                <button onClick={() => handleProjectsLink('personal-projects')} className="mt-1 flex w-full items-center rounded-xl px-3 py-2 text-left text-sm font-medium text-slate-200 transition hover:bg-cyan-500/20 hover:text-cyan-300">
                  Personal Projects
                </button>
              </motion.div>
            )}
          </div>
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
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`rounded-lg px-3 py-2 text-left text-sm font-medium ${activeSection === link.id ? 'bg-cyan-500/10 text-cyan-500' : 'text-slate-700 dark:text-slate-200'}`}
              >
                {link.label}
              </button>
            ))}
            <div className="rounded-lg border border-slate-200/60 p-2 dark:border-slate-800">
              <button onClick={() => setProjectMenuOpen((prev) => !prev)} className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-700 dark:text-slate-200">
                <span>Projects</span>
                <span className="text-cyan-500">{projectMenuOpen ? '▴' : '▾'}</span>
              </button>
              {projectMenuOpen && (
                <div className="mt-2 flex flex-col gap-2 rounded-xl bg-slate-900/80 p-2">
                  <button onClick={() => handleProjectsLink('professional-projects')} className="rounded-lg px-3 py-2 text-left text-sm text-slate-200 transition hover:bg-cyan-500/20 hover:text-cyan-300">
                    Professional Projects
                  </button>
                  <button onClick={() => handleProjectsLink('personal-projects')} className="rounded-lg px-3 py-2 text-left text-sm text-slate-200 transition hover:bg-cyan-500/20 hover:text-cyan-300">
                    Personal Projects
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </motion.header>
  )
}
