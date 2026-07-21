import { useEffect } from 'react'
import { FiDownload, FiX } from 'react-icons/fi'

export default function CVModal({ open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 px-3 py-4 backdrop-blur-xl">
      <div className="flex h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-950 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-3">
          <div className="font-semibold text-slate-100">Arpan Das — Resume</div>
          <div className="flex gap-2">
            <a href="https://drive.google.com/file/d/1h7gkhISg36sTF8Vz8NxcV3T5ZNoS1rbB/view?usp=sharing" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-3 py-2 text-sm font-semibold text-slate-950">
              Download <FiDownload />
            </a>
            <button onClick={onClose} className="rounded-full p-2 text-slate-300 transition hover:bg-slate-800" aria-label="Close resume modal">
              <FiX />
            </button>
          </div>
        </div>
        <iframe src="src/assets/ArpanDas_CV_2.1.pdf" title="Arpan Das Resume" className="h-full w-full" />
      </div>
    </div>
  )
}
