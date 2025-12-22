'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Briefcase, ArrowRight } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skills = [
    {
      title: 'Architettura Cloud & Full Stack',
      description: 'Progettazione e sviluppo di soluzioni cloud scalabili e applicazioni web complete',
      href: '#cloud-architecture',
    },
    {
      title: 'Pilota di Droni',
      description: 'Pilotaggio professionale per riprese aeree, mappatura e ispezioni',
      href: '#drone-pilot',
    },
    {
      title: 'Modellazione 3D',
      description: 'Design e modellazione tridimensionale per visualizzazione e prototipazione',
      href: '#3d-modeling',
    },
  ]

  return (
    <section
      id="about"
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
            <span className="text-gray-100">About</span>{' '}
            <span className="text-gradient-silver">Me</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-silver-400 to-transparent mx-auto mb-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start mb-10 md:mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-base sm:text-lg text-silver-300 mb-4 md:mb-6 leading-relaxed font-light">
              Cloud Architect con esperienza in architetture web, servizi cloud,
              linguaggi frontend e backend, framework responsive, database e best
              practices di sviluppo.
            </p>
            <p className="text-base sm:text-lg text-silver-300 mb-3 md:mb-4 leading-relaxed font-light">
              Co-founder di <a href="https://wesync.dev/" target="_blank" rel="noopener noreferrer" className="text-silver-200 hover:text-silver-100 underline transition-colors">Wesync</a>, azienda specializzata in soluzioni cloud e sviluppo software innovativo.
            </p>
            <p className="text-base sm:text-lg text-silver-300 mb-6 md:mb-8 leading-relaxed font-light">
              Le mie competenze si estendono su tre aree principali che combinano
              tecnologia, creatività e innovazione per creare soluzioni complete e
              all'avanguardia.
            </p>
            <div className="space-y-4">
              <motion.div
                className="flex items-center space-x-3 text-silver-300"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <MapPin className="text-silver-400" size={20} />
                <span className="font-light">Bologna, Emilia Romagna, Italia</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3 text-silver-300"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Briefcase className="text-silver-400" size={20} />
                <span className="font-light">Available for opportunities</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-3 xs:gap-4 sm:gap-5 md:gap-6"
          >
            {[
              { label: 'Anni Esperienza', value: '5+' },
              { label: 'Progetti Completati', value: '20+' },
              { label: 'Certificazioni', value: '4' },
              { label: 'Aziende', value: '5+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-effect p-3 xs:p-4 sm:p-5 md:p-6 rounded-xl text-center border border-white/10 hover:border-silver-400/30 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gradient-silver mb-1 xs:mb-1.5 md:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs xs:text-sm text-silver-400 font-light leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-8 md:mb-12 text-center">
            Aree di Competenza
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {skills.map((skill, index) => (
              <motion.a
                key={skill.title}
                href={skill.href}
                className="group glass-effect p-5 sm:p-6 rounded-xl border border-white/10 hover:border-silver-400/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h4 className="text-base sm:text-lg font-semibold text-gray-100 mb-2 md:mb-3 group-hover:text-silver-200 transition-colors">
                  {skill.title}
                </h4>
                <p className="text-xs sm:text-sm text-silver-400 mb-3 md:mb-4 leading-relaxed font-light">
                  {skill.description}
                </p>
                <div className="flex items-center text-sm text-silver-400 group-hover:text-silver-300 transition-colors">
                  <span className="mr-2">Esplora</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
