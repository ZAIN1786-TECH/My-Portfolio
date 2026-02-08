import { motion } from 'framer-motion'
import { Sparkles, LayoutDashboard, LineChart, ShieldCheck } from 'lucide-react'

const services = [
  {
    icon: LayoutDashboard,
    title: 'E-commerce Development',
    description:
      'Building scalable and feature-rich e-commerce platforms with intuitive product catalogs, shopping carts, and secure checkout flows.',
    badge: 'Web Apps',
  },
  {
    icon: LineChart,
    title: 'Responsive Web Design',
    description:
      'Creating responsive, mobile-first websites that adapt seamlessly to all devices and provide excellent user experiences.',
    badge: 'Design',
  },
  {
    icon: ShieldCheck,
    title: 'Frontend Optimization',
    description:
      'Optimizing performance, implementing best practices, and ensuring clean, maintainable code for long-term scalability.',
    badge: 'Performance',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: 'easeOut', delay: 0.08 * i },
  }),
}

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="rounded-3xl border border-slate-800/80 bg-slate-950/70 px-5 py-8 sm:px-8 sm:py-10"
    >
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">Services</h2>
          <p className="text-xs text-slate-400 sm:text-sm">
            Comprehensive frontend solutions for modern web applications.
          </p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-slate-900/60 px-3 py-1 text-[11px] text-violet-200">
          <Sparkles className="h-3 w-3" aria-hidden="true" />
          Open to freelance & full-time opportunities
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {services.map(({ icon: Icon, title, description, badge }, idx) => (
          <motion.article
            key={title}
            className="group relative rounded-2xl border border-slate-800/80 bg-linear-to-br from-slate-950/90 via-slate-950/60 to-slate-950/90 p-4 shadow-sm shadow-slate-900/80 transition hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-glow-cyan"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={idx}
          >
            <div className="mb-3 flex items-center justify-between gap-2">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/80 text-cyan-300 shadow-sm shadow-slate-900">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </div>
              <span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] text-slate-300">
                {badge}
              </span>
            </div>
            <h3 className="mb-2 text-sm font-semibold text-slate-50">{title}</h3>
            <p className="text-xs text-slate-300">{description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection

