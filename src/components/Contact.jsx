import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiSend } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const links = [
  {
    label: "Email",
    value: "arpandas200015@outlook.com",
    href: "mailto:arpandas200015@outlook.com",
    icon: <FiMail />,
  },
  {
    label: "Phone",
    value: "+91 78892 94860",
    href: "tel:+917889294860",
    icon: <FiPhone />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/arpandas",
    href: "https://www.linkedin.com/in/arpan-das-049409187/",
    icon: <FiLinkedin />,
  },
  {
    label: "GitHub",
    value: "github.com/arpandas",
    href: "https://github.com/Arpan-Das",
    icon: <FiGithub />,
  },
  {
    label: "LeetCode",
    value: "leetcode.com/arpandas",
    href: "https://leetcode.com/u/Arpan-Das/",
    icon: <SiLeetcode />,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxSVN--EeOEDbJHcKMLxvsTgaB4Ib1Fr9IEFrmM4fZxaRRh2bV5tbL1903N7hlbaxmY/exec";

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 4000); // 4 seconds

      return () => clearTimeout(timer);
    }
  }, [submitted]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [error]);
 
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;   // ✅ Save reference immediately
    const formData = new FormData(form);

    setLoading(true);
    setSubmitted(false);
    setError("");

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",

        // IMPORTANT for Google Apps Script
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },

        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        form.reset();       // ✅ Works correctly
      } else {
        setError(result.message || "Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-center gap-3"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">
            Contact
          </span>
          <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="grid gap-4"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-[1.5rem] border border-slate-200/70 bg-white/70 p-4 shadow-lg transition hover:-translate-y-1 hover:border-cyan-400 dark:border-slate-800 dark:bg-slate-900/70"
              >
                <div className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-500">
                  {link.icon}
                </div>
                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    {link.label}
                  </div>
                  <div className="font-medium text-slate-800 dark:text-slate-200">
                    {link.value}
                  </div>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-slate-200/70 bg-white/70 p-8 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70"
          >
            <div className="grid gap-4">
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none ring-0 transition focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none ring-0 transition focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none ring-0 transition focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950"
                  placeholder="Tell me about your idea..."
                />
              </div>              
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send"}
                <FiSend />
              </button>
              {submitted && (
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-600 dark:text-emerald-300">
                  ✅ Thank you! Your message has been sent successfully.
                </div>
              )}

              {error && (
                <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-300">
                  ❌ {error}
                </div>
              )}

            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
