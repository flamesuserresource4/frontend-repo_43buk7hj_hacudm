import { motion } from 'framer-motion'

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || subtitle) && (
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="mb-10 sm:mb-14">
            {eyebrow && (
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/60 px-3 py-1 text-xs text-blue-700">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">{title}</h2>
            )}
            {subtitle && (
              <p className="mt-3 max-w-2xl text-gray-600">{subtitle}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}
