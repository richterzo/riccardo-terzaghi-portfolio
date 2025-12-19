'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

const experiences = [
  {
    title: 'Cloud Engineer & Co-Founder',
    company: 'Wesync',
    location: 'Bologna, Emilia Romagna, Italia',
    period: 'feb 2024 - Presente · 1 anno 11 mesi',
    type: 'Ibrida',
    description: 'Co-founder di Wesync, azienda specializzata in soluzioni cloud e sviluppo software. Progettazione di architetture scalabili, sviluppo di applicazioni AI-powered e gestione tecnica dell\'azienda.',
    skills: ['Cloud computing', 'Sviluppo di applicazioni cloud', 'Co-Founder', 'Business Strategy'],
  },
  {
    title: 'Full Stack Developer',
    company: 'compri',
    location: 'Milano, Lombardia, Italia',
    period: 'ott 2024 - mar 2025 · 6 mesi',
    type: 'Da remoto',
    description: 'Developing and delivering features, including data visualization components and an AI-powered chatbot, ensuring scalability and performance.',
    skills: ['TypeScript', 'Next.js', 'React', 'Node.js', 'AI/ML'],
  },
  {
    title: 'Cloud Engineer',
    company: 'Sky',
    location: 'Milano, Lombardia, Italia',
    period: 'lug 2021 - ott 2024 · 3 anni 4 mesi',
    type: 'A contratto',
    description: 'Joined an amazing team at a cutting-edge company, specializing in AWS development. Contributed to a serverless architecture, container orchestration and event-driven design.',
    skills: ['Amazon Web Services (AWS)', 'AWS Lambda', 'Serverless', 'Kubernetes', 'Docker'],
  },
  {
    title: 'Frontend Developer',
    company: 'Intesi Group S.p.A.',
    location: 'Milano, Lombardia, Italia',
    period: 'giu 2021 - ott 2024 · 3 anni 5 mesi',
    type: 'Freelance',
    description: 'Developed frontend applications, UI/UX design, and dashboard functionalities.',
    skills: ['Angular', 'React.js', 'TypeScript', 'UI/UX'],
  },
  {
    title: 'Technical Instructor',
    company: 'Fondazione Et Labora',
    location: 'Milano, Lombardia, Italia',
    period: 'nov 2023 - feb 2024 · 4 mesi',
    type: 'In sede',
    description: 'Teaching AWS re/Start, a cohort-based workforce development training program that prepares individuals for careers in the cloud and connects them to potential employers.',
    skills: ['Amazon Web Services (AWS)', 'Technical Training'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="experience"
      ref={ref}
      className="py-32 relative bg-gradient-to-b from-gray-900 to-gray-950"
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
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-gray-100">Experience</span>
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-silver-400 to-transparent mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-silver-500/30 via-silver-400/50 to-silver-500/30" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gradient-to-br from-silver-400 to-silver-600 rounded-full border-4 border-gray-950 shadow-lg z-10"
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 pl-16' : 'md:pl-12 pr-16 md:ml-auto'
                  }`}
                >
                  <motion.div
                    className="glass-effect p-8 rounded-2xl border border-white/10 hover:border-silver-400/30 transition-all duration-500"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-100 mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-silver-300 font-semibold mb-3 text-lg">
                          {exp.company}
                        </p>
                      </div>
                      <Briefcase className="text-silver-400/50" size={28} />
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-silver-400 mb-6">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span className="font-light">{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span className="font-light">{exp.location}</span>
                      </div>
                      <span className="px-3 py-1 glass-effect text-silver-300 rounded-full text-xs font-medium border border-white/10">
                        {exp.type}
                      </span>
                    </div>

                    <p className="text-silver-300 mb-6 leading-relaxed font-light">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="px-4 py-2 glass-effect text-silver-300 rounded-full text-sm font-medium border border-white/10"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{
                            delay: index * 0.1 + skillIndex * 0.05,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          whileHover={{ scale: 1.1, borderColor: 'rgba(192, 192, 192, 0.3)' }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
