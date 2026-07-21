import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CVModal from './components/CVModal'
import ProjectDetailPage from './pages/ProjectDetailPage'
import { ThemeProvider } from './context/ThemeContext'
import { FiFileText } from 'react-icons/fi'

function PortfolioPage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Achievements />
      <Contact />
    </>
  )
}

function PageTransition({ children }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.3 }}>
      {children}
    </motion.div>
  )
}

function AppContent() {
  const [cvOpen, setCvOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollToId) {
      window.requestAnimationFrame(() => {
        document.getElementById(location.state.scrollToId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [location.pathname, location.state])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><PortfolioPage /></PageTransition>} />
            <Route path="/projects/:slug" element={<PageTransition><ProjectDetailPage /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />

      <motion.button
        aria-label="Open resume"
        onClick={() => setCvOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 font-semibold text-slate-950 shadow-2xl transition hover:scale-105"
        whileTap={{ scale: 0.95 }}
      >
        <FiFileText /> Download CV
      </motion.button>

      <AnimatePresence>{cvOpen && <CVModal open={cvOpen} onClose={() => setCvOpen(false)} />}</AnimatePresence>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}
