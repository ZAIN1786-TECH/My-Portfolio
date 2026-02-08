import { Code2, Cpu, Palette } from 'lucide-react'

const container = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

const AboutSection = () => {
  return (
    <motion.section
      id="about"
      className="rounded-3xl border border-slate-800/80 bg-slate-950/70 px-5 py-8 sm:px-8 sm:py-10"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">About</h2>
          <p className="text-xs text-slate-400 sm:text-sm">
            A developer obsessed with calm, reliable SaaS experiences.
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="space-y-4 text-sm text-slate-300">
          <p>
            I&apos;m Zain, a frontend engineer and UI/UX designer focused on modern
            SaaS dashboards, billing systems, and product-led onboarding. I bridge
            product thinking, design systems, and high-performance React
            implementations.
          </p>
          <p>
            I&apos;ve helped early-stage startups and growth-stage teams turn fuzzy
            product ideas into shippable interfaces—prioritising performance,
            accessibility, and a level of polish that feels &quot;production from
            day one&quot;.
          </p>
          <p>
            My sweet spot: TypeScript, React, Tailwind, design tokens, and motion
            systems that make complex workflows feel intuitive instead of
            overwhelming.
          </p>
        </div>

        <div className="grid gap-3 text-xs text-slate-200 sm:grid-cols-3">
          <div className="flex flex-col gap-2 rounded-2xl border border-slate-800/80 bg-slate-950/90 p-3">
            <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-300">
              <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              Frontend
            </p>
            <p className="text-xs text-slate-200">React, TypeScript, Next.js</p>
          </div>

          <div className="flex flex-col gap-2 rounded-2xl border border-slate-800/80 bg-slate-950/90 p-3">
            <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-violet-500/20 text-violet-300">
              <Palette className="h-3.5 w-3.5" aria-hidden="true" />
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              Design
            </p>
            <p className="text-xs text-slate-200">Figma, design systems, UX flows</p>
          </div>

          <div className="flex flex-col gap-2 rounded-2xl border border-slate-800/80 bg-slate-950/90 p-3">
            <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
              <Cpu className="h-3.5 w-3.5" aria-hidden="true" />
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              Backend
            </p>
            <p className="text-xs text-slate-200">Node.js, Next API routes, MongoDB</p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
          Stack
        </span>
        <div className="flex flex-wrap gap-2 text-[11px]">
          {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'MongoDB'].map(
            (tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700/80 bg-slate-900/70 px-2.5 py-0.5 text-slate-200"
              >
                {tech}
              </span>
            ),
          )}
        </div>
      </div>
    </motion.section>
  )
}

export default AboutSection

