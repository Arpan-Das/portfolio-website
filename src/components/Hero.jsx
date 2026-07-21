import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiArrowDown, FiChevronRight, FiDownload } from 'react-icons/fi'
import Typewriter from 'typewriter-effect'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  const openCv = () => document.getElementById('cv-button')?.click()

  return (
    <section id="hero" className="relative isolate overflow-hidden px-4 py-28 sm:px-6 lg:px-8 lg:py-36">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(0,201,255,0.2),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(24,81,180,0.15),_transparent_35%)]" />
      <div className="absolute inset-0 -z-10 opacity-60">
        {[...Array(20)].map((_, index) => (
          <span
            key={index}
            className="particle absolute h-2 w-2 rounded-full bg-cyan-400/60"
            style={{
              top: `${8 + (index % 6) * 14}%`,
              left: `${5 + (index * 7) % 80}%`,
              animationDelay: `${index * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={mounted ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-600 dark:text-cyan-300">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-500" /> Open to impactful opportunities
          </div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-slate-100 sm:text-6xl lg:text-7xl">
            I&apos;m <span className="text-cyan-500">Arpan Das</span>
          </h1>
          <div className="mt-4 text-2xl font-semibold text-slate-700 dark:text-slate-300 sm:text-3xl">
            <Typewriter
              options={{
                strings: ['System Engineer', 'GenAI Developer', 'RAG Engineer', 'Python Automation Expert'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 80,
              }}
            />
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Building intelligent systems at the intersection of ML and GenAI.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={scrollToProjects} className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105">
              View My Work <FiChevronRight />
            </button>
              <a href="https://drive.google.com/file/d/1h7gkhISg36sTF8Vz8NxcV3T5ZNoS1rbB/view?usp=sharing" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-3 py-2 text-sm font-semibold text-slate-950">
            {/* <button id="cv-button" onClick={openCv} className="inline-flex items-center gap-2 rounded-full border border-slate-400/60 bg-white/70 px-6 py-3 font-semibold text-slate-800 transition hover:scale-105 dark:bg-slate-900/70 dark:text-slate-100"> */}
              Download CV <FiDownload />
            {/* </button> */}
              </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 60 }} animate={mounted ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-800/20 blur-3xl" />
          <div className="rounded-[2rem] border border-white/20 bg-white/70 p-8 shadow-2xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['3.5+', 'Years Experience'],
                ['18%', 'Accuracy Improvement'],
                ['40%', 'Time Saved'],
                ['50-60%', 'Workload Reduced'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-slate-200/70 bg-slate-100/70 p-5 dark:border-slate-800 dark:bg-slate-950/60">
                  <div className="text-3xl font-black text-cyan-500">{value}</div>
                  <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-16 flex justify-center">
        <motion.a href="#about" initial={{ y: 0 }} animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }} className="flex flex-col items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
          <span>Scroll down</span>
          <FiArrowDown className="text-xl" />
        </motion.a>
      </div>
    </section>
  )
}
