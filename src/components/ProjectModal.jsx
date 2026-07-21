import { useEffect, useState } from 'react'
import { FiArrowLeft, FiExternalLink, FiX } from 'react-icons/fi'

export default function ProjectModal({ project, onClose }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 px-3 py-4 backdrop-blur-xl">
      <div className="flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-950 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-3">
          <div className="flex items-center gap-2">
            <button onClick={onClose} className="rounded-full p-2 text-slate-300 transition hover:bg-slate-800" aria-label="Go back">
              <FiArrowLeft />
            </button>
            <span className="font-semibold text-slate-100">{project.title}</span>
          </div>
          <div className="flex gap-2">
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-3 py-2 text-sm font-semibold text-slate-950">
              Open in New Tab <FiExternalLink />
            </a>
            <button onClick={onClose} className="rounded-full p-2 text-slate-300 transition hover:bg-slate-800" aria-label="Close modal">
              <FiX />
            </button>
          </div>
        </div>
        <div className="relative flex-1 bg-slate-950">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-950/90">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent" />
            </div>
          )}
          <iframe src={project.demoUrl} title={project.title} className="h-full w-full" onLoad={() => setLoading(false)} />
        </div>
      </div>
    </div>
  )
}
