
import { motion } from 'framer-motion'

const experience = [
  {
    company: 'Enigmatix.io',
    title: 'Frontend Developer',
    period: '2022 — Present',
    summary:
      'Developing and maintaining multi-scale e-commerce platforms and service-based web applications. Specializing in React, Tailwind CSS, and Firebase integration.',
  },
  {
    company: 'Freelance Projects',
    title: 'Frontend Engineer',
    period: '2021 — 2022',
    summary:
      'Worked with multiple clients on custom web projects, building responsive interfaces and implementing modern frontend practices.',
  },
  {
    company: 'Learning & Growth',
    title: 'Web Development',
    period: '2020 — 2021',
    summary:
      'Built foundational skills in HTML, CSS, JavaScript, and React through personal projects and learning initiatives.',
  },
]

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="rounded-3xl border border-slate-800/80 bg-slate-950/70 px-5 py-8 sm:px-8 sm:py-10"
    >
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">Experience</h2>
        <p className="text-xs text-slate-400 sm:text-sm">
          A quick timeline of the teams and products I&apos;ve partnered with.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-3 top-0 h-full w-px bg-linear-to-b from-indigo-500/60 via-slate-700 to-transparent sm:left-4" />

        <div className="space-y-6">
          {experience.map((item, idx) => (
            <motion.article
              key={item.company}
              className="relative flex gap-4 pl-8 sm:pl-10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, ease: 'easeOut', delay: 0.04 * idx }}
            >
              <div className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center sm:left-1">
                <div className="h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_12px_rgba(129,140,248,0.9)]" />
              </div>

              <div className="space-y-1 text-sm">
                <h3 className="font-semibold text-slate-50">{item.title}</h3>
                <p className="text-xs text-slate-300">{item.company}</p>
                <p className="text-[11px] text-slate-400">{item.period}</p>
                <p className="mt-1 text-xs text-slate-300">{item.summary}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection

