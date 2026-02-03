import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X, Github } from 'lucide-react'

const projects = [
  {
    id: 'billing-os',
    name: 'BillingOS',
    tagline: 'Usage-based billing dashboard for SaaS teams.',
    description:
      'A Stripe-inspired billing control centre with real-time metrics, customer health, and upgrade flows. Built to feel fast and trustworthy for finance and product teams.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Node.js'],
    role: 'Product design, frontend architecture, design system',
    link: '#',
    github: '#',
  },
  {
    id: 'launchpad',
    name: 'Launchpad CRM',
    tagline: 'Lightweight CRM for product-led B2B teams.',
    description:
      'Pipeline views, activity timelines, and collaborative notes wrapped in a clean, low-noise interface tuned for focus and speed.',
    tech: ['Next.js', 'React Query', 'PostgreSQL'],
    role: 'Design system, frontend implementation',
    link: '#',
    github: '#',
  },
  {
    id: 'pulse',
    name: 'Pulse Analytics',
    tagline: 'Real-time feature usage analytics for founders.',
    description:
      'Performance-focused analytics UI with multi-dimensional filters and live cohorts, optimised for dense information without visual overload.',
    tech: ['React', 'D3', 'Tailwind', 'Vite'],
    role: 'UX, data visualisation, frontend',
    link: '#',
    github: '#',
  },
]

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section
      id="projects"
      className="rounded-3xl border border-slate-800/80 bg-slate-950/70 px-5 py-8 sm:px-8 sm:py-10"
    >
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">Projects</h2>
          <p className="text-xs text-slate-400 sm:text-sm">
            Selected work from SaaS dashboards, analytics, and internal tools.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.article
            key={project.id}
            className="group relative flex cursor-pointer flex-col justify-between rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-950/90 via-slate-950/60 to-slate-950/90 p-4 shadow-sm shadow-slate-900/80 transition hover:-translate-y-1 hover:border-indigo-400/60 hover:shadow-glow-indigo"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, ease: 'easeOut', delay: 0.08 * idx }}
            onClick={() => setActiveProject(project)}
            aria-label={`Open details for ${project.name}`}
          >
            <div>
              <div className="mb-3 flex items-center justify-between gap-2">
                <p className="text-[11px] uppercase tracking-wide text-slate-400">
                  SaaS product
                </p>
                <span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] text-slate-300">
                  Case study
                </span>
              </div>
              <h3 className="mb-1 text-sm font-semibold text-slate-50">
                {project.name}
              </h3>
              <p className="mb-3 text-xs text-slate-300">{project.tagline}</p>
            </div>

            <div className="mt-2 flex flex-wrap gap-1.5 text-[10px] text-slate-200">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-700/80 bg-slate-900/70 px-2 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-10 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="relative max-h-[80vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-slate-800/80 bg-slate-950/95 p-5 shadow-2xl shadow-slate-950/90"
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 24 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute right-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 text-slate-300 shadow-sm shadow-slate-900 hover:border-slate-500 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-label="Close project details"
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
              </button>

              <div className="space-y-4 pt-2">
                <header className="space-y-1">
                  <p
                    id="project-dialog-title"
                    className="text-xs uppercase tracking-wide text-slate-400"
                  >
                    Case study
                  </p>
                  <h3 className="text-lg font-semibold text-slate-50">
                    {activeProject.name}
                  </h3>
                  <p className="text-xs text-slate-300">{activeProject.tagline}</p>
                </header>

                <p className="text-sm text-slate-200">{activeProject.description}</p>

                <div className="space-y-2 text-xs text-slate-300">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                    Role
                  </p>
                  <p>{activeProject.role}</p>
                </div>

                <div className="space-y-2 text-xs text-slate-300">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                    Tech stack
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[11px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 text-xs">
                  <a
                    href={activeProject.link}
                    className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-3 py-1.5 text-[11px] font-semibold text-slate-900 shadow-sm shadow-slate-900/30 transition hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    Live preview
                  </a>
                  <a
                    href={activeProject.github}
                    className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-950/80 px-3 py-1.5 text-[11px] font-semibold text-slate-100 hover:border-cyan-400/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <Github className="h-3 w-3" aria-hidden="true" />
                    View code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ProjectsSection

