import { motion } from 'framer-motion'

export default function GlowingCard({ icon: Icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative group rounded-2xl border border-teal-400/20 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_20%,rgba(24,164,149,0.15),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(56,189,248,0.12),transparent_60%)]" />
      <div className="relative z-10">
        {Icon && <Icon className="w-8 h-8 text-teal-400 mb-4" />}
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-slate-300/90 text-sm leading-relaxed">{desc}</p>
      </div>
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500" style={{ boxShadow: '0 0 0 1px rgba(24,164,149,0.35), 0 0 40px rgba(24,164,149,0.25) inset' }} />
    </motion.div>
  )
}
