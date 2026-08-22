import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiChevronDown, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { useTheme } from "../hooks/useTheme";
import { useScrollSpy } from "../hooks/useScrollSpy";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const { theme, toggleTheme } = useTheme();
  const activeSection = useScrollSpy([
    ...links.map(({ id }) => id),
    "projects",
  ]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setProjectsOpen(false);
    };
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target))
        setProjectsOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const scrollTo = (id) => {
    if (location.pathname !== "/") navigate("/", { state: { scrollToId: id } });
    else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
    setProjectsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/70 shadow-lg backdrop-blur-xl dark:bg-slate-950/70" : "bg-transparent"}`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-3 rounded-full px-3 py-2 text-sm font-semibold tracking-wide text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:text-slate-100"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/50 bg-cyan-500/10 text-lg font-bold text-cyan-500">
            AD
          </span>
          <span className="hidden sm:inline">Arpan Das</span>
        </button>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${activeSection === link.id ? "text-cyan-500" : "text-slate-700 dark:text-slate-300"}`}
            >
              {link.label}
            </button>
          ))}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setProjectsOpen((value) => !value)}
              aria-expanded={projectsOpen}
              className={`inline-flex items-center gap-1 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${activeSection === "projects" ? "text-cyan-500" : "text-slate-700 dark:text-slate-300"}`}
            >
              Projects{" "}
              <FiChevronDown
                className={`transition ${projectsOpen ? "rotate-180" : ""}`}
              />
            </button>
            {projectsOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-3 w-56 rounded-2xl border border-white/20 bg-slate-900/90 p-2 shadow-2xl backdrop-blur-md"
              >
                <button
                  onClick={() => scrollTo("professional-projects")}
                  className="w-full rounded-xl px-3 py-2 text-left text-sm text-slate-200 transition hover:bg-cyan-500/20 hover:text-cyan-300"
                >
                  Professional Projects
                </button>
                <button
                  onClick={() => scrollTo("personal-projects")}
                  className="mt-1 w-full rounded-xl px-3 py-2 text-left text-sm text-slate-200 transition hover:bg-cyan-500/20 hover:text-cyan-300"
                >
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
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 text-slate-800 transition hover:bg-cyan-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:text-cyan-200"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/70 text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:border-slate-700 dark:text-slate-200 md:hidden"
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
                className={`rounded-lg px-3 py-2 text-left text-sm font-medium ${activeSection === link.id ? "bg-cyan-500/10 text-cyan-500" : "text-slate-700 dark:text-slate-200"}`}
              >
                {link.label}
              </button>
            ))}
            <div className="rounded-lg border border-slate-200/60 p-2 dark:border-slate-800">
              <button
                onClick={() => setProjectsOpen((value) => !value)}
                aria-expanded={projectsOpen}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                Projects{" "}
                <FiChevronDown
                  className={`text-cyan-500 transition ${projectsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {projectsOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-2 flex flex-col gap-1 border-t border-slate-700 pt-2"
                >
                  <button
                    onClick={() => scrollTo("professional-projects")}
                    className="rounded-lg px-3 py-2 text-left text-sm text-slate-200 hover:bg-cyan-500/20"
                  >
                    Professional Projects
                  </button>
                  <button
                    onClick={() => scrollTo("personal-projects")}
                    className="rounded-lg px-3 py-2 text-left text-sm text-slate-200 hover:bg-cyan-500/20"
                  >
                    Personal Projects
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
}
