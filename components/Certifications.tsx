'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Calendar, ExternalLink } from 'lucide-react'

const certifications = [
  {
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services (AWS)',
    date: 'lug 2023',
    expiry: 'lug 2026',
    credential: 'Architettura delle soluzioni',
  },
  {
    title: 'AWS re/Start Accredited Instructor',
    issuer: 'Amazon Web Services (AWS)',
    date: 'lug 2023',
    expiry: 'lug 2026',
    credential: 'Technical Training',
  },
]

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="certifications"
      ref={ref}
      className="py-20 md:py-24 relative bg-gradient-to-b from-gray-950 to-gray-900"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            <span className="text-gray-100">Certifications</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-silver-400 to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="glass-effect p-8 rounded-2xl border border-white/10 hover:border-silver-400/30 transition-all duration-500 relative overflow-hidden group"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-silver-500/5 to-transparent rounded-full blur-3xl -mr-32 -mt-32" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Award className="text-silver-400" size={48} />
                  </motion.div>
                  <motion.a
                    href="#"
                    className="p-2 rounded-lg glass-effect hover:bg-white/10 transition-colors border border-white/10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <ExternalLink size={20} className="text-silver-400" />
                  </motion.a>
                </div>

                <h3 className="text-2xl font-bold text-gray-100 mb-3">
                  {cert.title}
                </h3>
                <p className="text-silver-300 font-semibold mb-6 text-lg">
                  {cert.issuer}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-sm text-silver-400">
                    <Calendar size={18} className="text-silver-500" />
                    <span className="font-light">
                      Data di rilascio: <strong className="text-silver-300">{cert.date}</strong>
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-silver-400">
                    <Calendar size={18} className="text-silver-500" />
                    <span className="font-light">
                      Data di scadenza: <strong className="text-silver-300">{cert.expiry}</strong>
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <span className="px-4 py-2 glass-effect text-silver-300 rounded-full text-sm font-medium border border-white/10">
                    {cert.credential}
                  </span>
                </div>
              </div>

              {/* Hover shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
