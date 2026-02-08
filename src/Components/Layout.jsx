import { useEffect, useState } from 'react'
import { motion,AnimatePresence } from 'framer-motion'
import { Moon, SunMedium, Menu, X } from 'lucide-react'
import HeroSection from '../sections/HeroSection'
import AboutSection from '../sections/AboutSection'
import ServicesSection from '../sections/ServicesSection'
import ProjectsSection from '../sections/ProjectsSection'
import ExperienceSection from '../sections/ExperienceSection'
import TestimonialsSection from '../sections/TestimonialsSection'
import ContactSection from '../sections/ContactSection'
import { applyTheme, getInitialTheme } from '../theme'
import profile from '../../public/profilePic.jpeg'


const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
]

function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const Layout = () => {
  const [theme, setTheme] = useState(() => getInitialTheme())
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const handleNavClick = (id) => {
    setMobileOpen(false)
    scrollToId(id)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 transition-colors duration-300">
      {/* Background gradient accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 top-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      {/* App shell */}
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
        {/* Top navigation */}
        <header className="sticky top-0 z-40 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
          <div className="flex items-center justify-between py-4">
            <button
              type="button"
              onClick={() => handleNavClick('hero')}
              className="flex items-center gap-2 text-lg font-semibold text-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <img
                src={profile}
                alt="Zain Ul Hassan"
                className="h-10 w-10 rounded-full object-cover border-2 border-indigo-500"
              />
              <span className="hidden sm:inline">Zain · Frontend Engineer</span>
            </button>

            <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className="relative rounded-full px-2 py-1 transition-colors hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/70 shadow-sm shadow-slate-900/50 transition hover:border-cyan-400/70 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {theme === 'dark' ? (
                    <motion.span
                      key="moon"
                      initial={{ opacity: 0, rotate: -90, y: -4 }}
                      animate={{ opacity: 1, rotate: 0, y: 0 }}
                      exit={{ opacity: 0, rotate: 90, y: 4 }}
                      transition={{ duration: 0.18 }}
                    >
                      <Moon className="h-4 w-4 text-cyan-300" aria-hidden="true" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="sun"
                      initial={{ opacity: 0, rotate: 90, y: -4 }}
                      animate={{ opacity: 1, rotate: 0, y: 0 }}
                      exit={{ opacity: 0, rotate: -90, y: 4 }}
                      transition={{ duration: 0.18 }}
                    >
                      <SunMedium
                        className="h-4 w-4 text-amber-400"
                        aria-hidden="true"
                      />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              <button
                type="button"
                onClick={() => setMobileOpen((prev) => !prev)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/70 text-slate-200 shadow-sm shadow-slate-900/50 transition hover:border-cyan-400/70 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 md:hidden"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <X className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Menu className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.nav
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="space-y-1 pb-4 pt-1 md:hidden"
              >
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className="block w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-200 hover:bg-slate-800/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    {item.label}
                  </button>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Main content */}
        <motion.main
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="flex flex-1 flex-col gap-24 py-10 sm:py-16"
        >
          <HeroSection onCtaScroll={scrollToId} />
          <AboutSection />
          <ServicesSection />
          <ProjectsSection />
          <ExperienceSection />
          <TestimonialsSection />
          <ContactSection />
        </motion.main>

        {/* Footer */}
        <footer className="border-t border-slate-800/70 py-6 text-sm text-slate-400">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} Zain Ul Hassan. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/ZAIN1786-TECH"
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-3 py-1 text-xs font-medium text-slate-300 transition hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/zain-ul-hassan-061589360?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-3 py-1 text-xs font-medium text-slate-300 transition hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                LinkedIn
              </a>
              <span className="rounded-full bg-slate-900/90 px-3 py-1 text-[11px] font-medium text-slate-300 shadow-sm shadow-slate-900/70">
                Freelance & Full-time Available
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Layout

