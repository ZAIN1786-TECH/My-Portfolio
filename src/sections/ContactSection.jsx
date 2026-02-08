import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ContactSection = () => {
  const [status, setStatus] = useState('idle') // idle | sending | success

  const handleSubmit = (event) => {
    event.preventDefault()
    if (status === 'sending') return
    setStatus('sending')

    // Fake async to simulate sending
    setTimeout(() => {
      setStatus('success')
      setTimeout(() => setStatus('idle'), 3000)
    }, 800)
  }

  return (
    <section
      id="contact"
      className="rounded-3xl border border-slate-800/80 bg-slate-950/70 px-5 py-8 sm:px-8 sm:py-10"
    >
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">Contact</h2>
          <p className="text-xs text-slate-400 sm:text-sm">
            Got a project in mind? Let&apos;s discuss your requirements and how I can help.
          </p>
        </div>
        <p className="text-[11px] text-emerald-300">
          Open to freelance projects and collaboration opportunities.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)]">
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
          aria-describedby="contact-status"
        >
          {[
            { id: 'name', label: 'Name', type: 'text', autoComplete: 'name' },
            {
              id: 'email',
              label: 'Work email',
              type: 'email',
              autoComplete: 'email',
            },
          ].map((field) => (
            <div key={field.id} className="relative">
              <input
                id={field.id}
                name={field.id}
                type={field.type}
                autoComplete={field.autoComplete}
                required
                className="peer h-11 w-full rounded-2xl border border-slate-800/80 bg-slate-950/80 px-3 pt-4 text-sm text-slate-50 shadow-sm shadow-slate-900 outline-none transition focus:border-cyan-400/70 focus:bg-slate-950"
                placeholder=" "
              />
              <label
                htmlFor={field.id}
                className="pointer-events-none absolute left-3 top-2.5 text-xs text-slate-400 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-focus:top-1 peer-focus:text-[11px] peer-focus:text-cyan-300"
              >
                {field.label}
              </label>
            </div>
          ))}

          <div className="relative">
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="peer w-full rounded-2xl border border-slate-800/80 bg-slate-950/80 px-3 pb-2 pt-5 text-sm text-slate-50 shadow-sm shadow-slate-900 outline-none transition focus:border-cyan-400/70 focus:bg-slate-950"
              placeholder=" "
            />
            <label
              htmlFor="message"
              className="pointer-events-none absolute left-3 top-2.5 text-xs text-slate-400 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-focus:top-1 peer-focus:text-[11px] peer-focus:text-cyan-300"
            >
              What are you building?
            </label>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <motion.button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center gap-2 rounded-full bg-gradlient-to-r from-indigo-500 via-violet-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/40 transition hover:shadow-xl hover:shadow-violet-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 disabled:opacity-70"
              whileTap={{ scale: 0.97 }}
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </motion.button>

            <div
              id="contact-status"
              className="text-xs text-slate-400"
              aria-live="polite"
            >
              <AnimatePresence>
                {status === 'success' && (
                  <motion.span
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="text-emerald-300"
                  >
                    Message sent. I&apos;ll be in touch shortly.
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>
        </form>

        <div className="space-y-3 text-xs text-slate-300">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/90 p-4">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              Typical engagement
            </p>
            <p>Design + build of core SaaS UI, from discovery to production-ready UI.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/90 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                Location
              </p>
              <p>Remote · GMT+5</p>
            </div>
            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/90 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                Email
              </p>
              <p>hello@zain.dev</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

