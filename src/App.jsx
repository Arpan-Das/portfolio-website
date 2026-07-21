import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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
import { ThemeProvider } from './context/ThemeContext'
import { FiFileText } from 'react-icons/fi'

function AppContent() {
  const [cvOpen, setCvOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Achievements />
        <Contact />
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
