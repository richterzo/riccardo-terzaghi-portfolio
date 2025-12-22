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
    period: 'feb 2024 - Presente',
    type: 'Ibrida',
    description: 'Co-founder di Wesync, azienda specializzata in soluzioni cloud e sviluppo software. Progettazione di architetture scalabili, sviluppo di applicazioni AI-powered e gestione tecnica dell\'azienda.',
    skills: ['Cloud computing', 'Sviluppo di applicazioni cloud', 'Co-Founder', 'Business Strategy'],
  },
  {
    title: 'Full Stack Developer',
    company: 'compri',
    location: 'Milano, Lombardia, Italia',
    period: 'ott 2024 - mar 2025',
    type: 'Da remoto',
    description: 'Developing and delivering features, including data visualization components and an AI-powered chatbot, ensuring scalability and performance.',
    skills: ['TypeScript', 'Next.js', 'React', 'Node.js', 'AI/ML'],
  },
  {
    title: 'Cloud Engineer',
    company: 'Sky',
    location: 'Milano, Lombardia, Italia',
    period: 'lug 2021 - ott 2024',
    type: 'A contratto',
    description: 'Joined an amazing team at a cutting-edge company, specializing in AWS development. Contributed to a serverless architecture, container orchestration and event-driven design.',
    skills: ['Amazon Web Services (AWS)', 'AWS Lambda', 'Serverless', 'Kubernetes', 'Docker'],
  },
  {
    title: 'Frontend Developer',
    company: 'Intesi Group S.p.A.',
    location: 'Milano, Lombardia, Italia',
    period: 'giu 2021 - ott 2024',
    type: 'Freelance',
    description: 'Developed frontend applications, UI/UX design, and dashboard functionalities.',
    skills: ['Angular', 'React.js', 'TypeScript', 'UI/UX'],
  },
  {
    title: 'Technical Instructor',
    company: 'Fondazione Et Labora',
    location: 'Milano, Lombardia, Italia',
    period: 'nov 2023 - feb 2024',
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
      className="py-20 md:py-24 relative bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            <span className="text-gray-100">Experience</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-silver-400 to-transparent mx-auto" />
        </motion.div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Timeline line - Horizontal */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-silver-400/40 to-transparent transform -translate-y-1/2" />

          {/* Timeline Container - Scrollable Horizontal */}
          <div className="overflow-x-auto pb-8 md:pb-12 scrollbar-hide">
            <div className="flex md:flex-row flex-col gap-6 md:gap-8 min-w-max md:min-w-0">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative flex-shrink-0 w-full md:w-80"
                >
                  {/* Timeline dot - Horizontal */}
                  <motion.div
                    className="hidden md:block absolute top-1/2 -left-4 w-3 h-3 bg-gradient-to-br from-silver-400 to-silver-600 rounded-full border-2 border-gray-950 shadow-lg z-10 transform -translate-y-1/2"
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  />

                  {/* Content Card */}
                  <motion.div
                    className="glass-effect p-5 md:p-6 rounded-xl border border-white/10 hover:border-silver-400/30 transition-all duration-300 h-full"
                    whileHover={{ y: -4, scale: 1.02 }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-bold text-gray-100 mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-silver-300 font-semibold mb-2 text-sm md:text-base">
                          {exp.company}
                        </p>
                      </div>
                      <Briefcase className="text-silver-400/40 flex-shrink-0 ml-2" size={20} />
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-silver-400 mb-3">
                      <div className="flex items-center space-x-1.5">
                        <Calendar size={14} />
                        <span className="font-light">{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <MapPin size={14} />
                        <span className="font-light line-clamp-1">{exp.location}</span>
                      </div>
                    </div>

                    <span className="inline-block px-2 py-0.5 glass-effect text-silver-300 rounded-full text-xs font-medium border border-white/10 mb-3">
                      {exp.type}
                    </span>

                    <p className="text-silver-300 text-sm mb-4 leading-relaxed font-light line-clamp-3">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="px-2.5 py-1 glass-effect text-silver-300 rounded-full text-xs font-medium border border-white/10"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{
                            delay: index * 0.1 + skillIndex * 0.04,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          whileHover={{ scale: 1.1, borderColor: 'rgba(192, 192, 192, 0.3)' }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
