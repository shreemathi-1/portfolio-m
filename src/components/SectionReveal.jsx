import { motion } from 'framer-motion'

// Every section fades and rises into place once as it enters the
// viewport — the "smooth page transition" feel, without relying on
// route changes for a single-page portfolio.
export default function SectionReveal({ children, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
