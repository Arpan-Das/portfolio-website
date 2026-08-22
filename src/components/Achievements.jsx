import { motion } from 'framer-motion'

export default function Achievements() {
    return (
        <section className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-cyan-400/40 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 shadow-[0_0_45px_rgba(0,201,255,0.15)]">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-3">
                            <div className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-500">
                                {/* <FiAward className="text-2xl" />                             */}
                                <img src="/nptel.png" alt="" width={90}/>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                                    NPTEL Course Topper(5%)
                                    <a href="https://drive.google.com/file/d/1n1lz8Qc45Q58B5UOMT6HR9iEnSffRQA_/view" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-3 py-2 text-sm font-semibold text-slate-950">
                                        View
                                    </a>
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400">Problem Solving Through Programming in C (2019)</p>
                            </div>
                        </div>
                        <div className="rounded-full border border-cyan-500/30 bg-white/70 px-4 py-2 text-sm font-semibold text-cyan-600 dark:bg-slate-900/70 dark:text-cyan-300">Topper Achievement (5%)</div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
