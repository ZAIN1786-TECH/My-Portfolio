import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.4, ease: 'easeOut' },
  }),
}

const HeroSection = ({ onCtaScroll }) => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/60 px-5 py-10 shadow-[0_0_80px_rgba(15,23,42,0.9)] sm:px-10 sm:py-14 lg:px-16 lg:py-18"
    >
      {/* Decorative gradient border */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-indigo-500/40 via-violet-500/40 to-cyan-400/40 opacity-70 blur-3xl"
      />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-center">
        {/* Left */}
        <div className="space-y-8">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-slate-950/80 px-3 py-1 text-xs font-medium text-slate-200 shadow-sm shadow-violet-500/30"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Sparkles className="h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />
            <span className="uppercase tracking-wide">
              SaaS-focused Frontend & Product Engineer
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl lg:text-6xl"
              variants={textVariant}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Shipping calm, high-performing
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
                {' '}
                SaaS interfaces
              </span>
              .
            </motion.h1>

            <motion.p
              className="max-w-xl text-pretty text-sm text-slate-300 sm:text-base"
              variants={textVariant}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              I design and engineer modern product experiences for dashboards, billing
              flows, and customer-facing SaaS—blending motion, accessibility, and
              performance into every component.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-wrap items-center gap-3"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <button
              type="button"
              onClick={() => onCtaScroll?.('projects')}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/40 transition hover:shadow-xl hover:shadow-violet-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              View Projects
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </button>

            <button
              type="button"
              onClick={() => onCtaScroll?.('contact')}
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/70 px-4 py-2.5 text-xs font-medium text-slate-100 shadow-sm shadow-slate-900/70 transition hover:border-cyan-400/70 hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              Book a discovery call
            </button>

            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              Open to remote · Product teams & SaaS founders
            </div>
          </motion.div>

          <motion.dl
            className="grid gap-4 text-xs text-slate-300 sm:grid-cols-3"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-3 shadow-sm shadow-slate-900/80">
              <dt className="text-[11px] text-slate-400">SaaS products shipped</dt>
              <dd className="text-lg font-semibold text-slate-50">12+</dd>
            </div>
            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-3 shadow-sm shadow-slate-900/80">
              <dt className="text-[11px] text-slate-400">Avg. Lighthouse score</dt>
              <dd className="text-lg font-semibold text-emerald-300">95+</dd>
            </div>
            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-3 shadow-sm shadow-slate-900/80">
              <dt className="text-[11px] text-slate-400">Teams I’ve helped</dt>
              <dd className="text-lg font-semibold text-cyan-300">Seed → Series C</dd>
            </div>
          </motion.dl>
        </div>

        {/* Right: abstract card / faux dashboard */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <div className="relative mx-auto max-w-sm rounded-3xl border border-slate-800/80 bg-slate-950/80 p-4 shadow-[0_0_60px_rgba(15,23,42,1)]">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="h-2 w-2 rounded-full bg-amber-400/80" />
                <span className="h-2 w-2 rounded-full bg-rose-400/80" />
              </div>
              <span className="rounded-full bg-slate-900/90 px-2 py-0.5 text-[10px] font-medium text-slate-300">
                Live product preview
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-2xl border border-slate-800/90 bg-gradient-to-tr from-slate-900/90 via-slate-900/40 to-slate-900/90 px-3 py-2">
                <div className="text-xs text-slate-300">
                  <p className="text-[11px] text-slate-400">MRR</p>
                  <p className="text-base font-semibold text-emerald-300">$48.2k</p>
                </div>
                <div className="h-9 w-24 rounded-xl bg-gradient-to-tr from-emerald-400/30 via-cyan-400/20 to-indigo-400/20" />
              </div>

              <div className="grid grid-cols-3 gap-2 text-[10px] text-slate-300">
                <div className="rounded-xl border border-slate-800/80 bg-slate-950/90 p-2">
                  <p className="text-[10px] text-slate-400">Activation</p>
                  <p className="text-sm font-semibold text-slate-50">78%</p>
                </div>
                <div className="rounded-xl border border-slate-800/80 bg-slate-950/90 p-2">
                  <p className="text-[10px] text-slate-400">Churn</p>
                  <p className="text-sm font-semibold text-emerald-300">1.4%</p>
                </div>
                <div className="rounded-xl border border-slate-800/80 bg-slate-950/90 p-2">
                  <p className="text-[10px] text-slate-400">Latency</p>
                  <p className="text-sm font-semibold text-cyan-300">42ms</p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800/80 bg-slate-950/90 p-3 text-[11px]">
                <p className="mb-1 text-slate-300">Product fit score</p>
                <div className="mb-1 flex items-center gap-2">
                  <div className="h-1.5 flex-1 rounded-full bg-slate-800">
                    <div className="h-1.5 w-4/5 rounded-full bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-300" />
                  </div>
                  <span className="text-xs font-semibold text-cyan-300">82</span>
                </div>
                <p className="text-[10px] text-slate-500">
                  Designed to feel like the SaaS you&apos;re building—clean, fast, and
                  trustworthy.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection

