import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'Elena Rossi',
    role: 'Founder, BillingOS',
    quote:
      'Zain took our messy Figma ideas and turned them into a calm, Stripe-grade dashboard. Our team shipped twice as fast because the UI decisions were clear.',
  },
  {
    name: 'Michael Chen',
    role: 'Head of Product, Launchpad',
    quote:
      'Every feature shipped with a thoughtful UX narrative. State management, loading skeletons, error states—nothing was left as &quot;we’ll fix it later&quot;.',
  },
  {
    name: 'Aisha Khan',
    role: 'CTO, Pulse Analytics',
    quote:
      'Performance and polish rarely come together like this. Our dashboards feel dense, but never overwhelming, even on smaller screens.',
  },
]

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0)
  const active = testimonials[index]

  const goTo = (dir) => {
    setIndex((prev) => {
      const next = (prev + dir + testimonials.length) % testimonials.length
      return next
    })
  }

  return (
    <section
      id="testimonials"
      className="rounded-3xl border border-slate-800/80 bg-slate-950/70 px-5 py-8 sm:px-8 sm:py-10"
    >
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
            Testimonials
          </h2>
          <p className="text-xs text-slate-400 sm:text-sm">
            Kind words from product leaders and founders.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="order-2 w-full md:order-1 md:w-2/3">
          <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/90 p-4">
            <AnimatePresence mode="wait">
              <motion.figure
                key={active.name}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <blockquote className="mb-3 text-sm text-slate-200">
                  “{active.quote}”
                </blockquote>
                <figcaption className="text-xs text-slate-300">
                  <p className="font-semibold text-slate-50">{active.name}</p>
                  <p className="text-[11px] text-slate-400">{active.role}</p>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
        </div>

        <div className="order-1 flex w-full items-center justify-between gap-3 md:order-2 md:w-1/3">
          <div className="flex gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-1.5 flex-1 rounded-full ${
                  i === index ? 'bg-cyan-400' : 'bg-slate-700'
                }`}
                aria-label={`Show testimonial from ${t.name}`}
                aria-pressed={i === index}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => goTo(-1)}
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 text-slate-300 shadow-sm shadow-slate-900 hover:border-slate-500 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Previous testimonial"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => goTo(1)}
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 text-slate-300 shadow-sm shadow-slate-900 hover:border-slate-500 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Next testimonial"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

