'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Briefcase, ArrowDown } from 'lucide-react'

const experiences = [
  {
    title: 'Cloud Engineer & Co-Founder',
    company: 'Wesync',
    location: 'Bologna, Emilia Romagna, Italia',
    period: 'feb 2024 - Presente',
    type: 'Ibrida',
    description: 'Co-founder di Wesync, azienda specializzata in soluzioni cloud e sviluppo software. Progettazione di architetture scalabili, sviluppo di applicazioni AI-powered e gestione tecnica dell\'azienda.',
    skills: ['Cloud computing', 'Sviluppo di applicazioni cloud', 'Co-Founder', 'Business Strategy'],
    year: '2024',
  },
  {
    title: 'Full Stack Developer',
    company: 'compri',
    location: 'Milano, Lombardia, Italia',
    period: 'ott 2024 - mar 2025',
    type: 'Da remoto',
    description: 'Developing and delivering features, including data visualization components and an AI-powered chatbot, ensuring scalability and performance.',
    skills: ['TypeScript', 'Next.js', 'React', 'Node.js', 'AI/ML'],
    year: '2024',
  },
  {
    title: 'Cloud Engineer',
    company: 'Sky',
    location: 'Milano, Lombardia, Italia',
    period: 'lug 2021 - ott 2024',
    type: 'A contratto',
    description: 'Joined an amazing team at a cutting-edge company, specializing in AWS development. Contributed to a serverless architecture, container orchestration and event-driven design.',
    skills: ['Amazon Web Services (AWS)', 'AWS Lambda', 'Serverless', 'Kubernetes', 'Docker'],
    year: '2021',
  },
  {
    title: 'Frontend Developer',
    company: 'Intesi Group S.p.A.',
    location: 'Milano, Lombardia, Italia',
    period: 'giu 2021 - ott 2024',
    type: 'Freelance',
    description: 'Developed frontend applications, UI/UX design, and dashboard functionalities.',
    skills: ['Angular', 'React.js', 'TypeScript', 'UI/UX'],
    year: '2021',
  },
  {
    title: 'Technical Instructor',
    company: 'Fondazione Et Labora',
    location: 'Milano, Lombardia, Italia',
    period: 'nov 2023 - feb 2024',
    type: 'In sede',
    description: 'Teaching AWS re/Start, a cohort-based workforce development training program that prepares individuals for careers in the cloud and connects them to potential employers.',
    skills: ['Amazon Web Services (AWS)', 'Technical Training'],
    year: '2023',
  },
]

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <section
      id="experience"
      ref={containerRef}
      className="py-20 md:py-32 relative bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden"
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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            <span className="text-gray-100">My Journey</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-silver-400 to-transparent mx-auto mb-4" />
          <p className="text-silver-400 text-sm md:text-base font-light max-w-2xl mx-auto">
            Dal passato al presente: il mio percorso professionale
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Timeline Line - Animated */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800/50 -translate-x-1/2 hidden md:block">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-silver-500 via-silver-400 to-silver-500 origin-top"
              style={{
                height: `${lineProgress}%`,
              }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Mobile Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-800/50 md:hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-silver-500 via-silver-400 to-silver-500 origin-top"
              style={{
                height: `${lineProgress}%`,
              }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => {
              const isLast = index === experiences.length - 1
              const isFirst = index === 0
              
              return (
                <TimelineItem
                  key={index}
                  experience={exp}
                  index={index}
                  isLast={isLast}
                  isFirst={isFirst}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

interface TimelineItemProps {
  experience: typeof experiences[0]
  index: number
  isLast: boolean
  isFirst: boolean
}

function TimelineItem({ experience, index, isLast, isFirst }: TimelineItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-150px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative flex items-start ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          className="relative"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{
            duration: 0.5,
            delay: index * 0.15 + 0.2,
            type: 'spring',
            stiffness: 200,
          }}
        >
          <div className="w-4 h-4 bg-gradient-to-br from-silver-400 to-silver-600 rounded-full border-3 border-gray-950 shadow-lg" />
          {isFirst && (
            <motion.div
              className="absolute inset-0 bg-silver-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          )}
        </motion.div>
      </div>

      {/* Content Card */}
      <div
        className={`w-full md:w-[45%] ${
          index % 2 === 0 ? 'md:pr-12 pl-16' : 'md:pl-12 pr-16 md:ml-auto'
        }`}
      >
        <motion.div
          className="glass-effect p-6 md:p-7 rounded-xl border border-white/10 hover:border-silver-400/40 transition-all duration-500 group relative overflow-hidden"
          whileHover={{ y: -5, scale: 1.02 }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: index * 0.15 + 0.1,
          }}
        >
          {/* Year Badge */}
          <div className="absolute top-4 right-4">
            <motion.span
              className="px-3 py-1 bg-gradient-to-r from-silver-600/20 to-silver-500/20 text-silver-300 rounded-full text-xs font-semibold border border-silver-400/20"
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.15 + 0.3,
                type: 'spring',
                stiffness: 200,
              }}
            >
              {experience.year}
            </motion.span>
          </div>

          {/* Content */}
          <div className="pr-16">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-gray-100 mb-2 group-hover:text-silver-200 transition-colors">
                  {experience.title}
                </h3>
                <p className="text-silver-300 font-semibold mb-3 text-base md:text-lg">
                  {experience.company}
                </p>
              </div>
              <Briefcase className="text-silver-400/40 flex-shrink-0 ml-3" size={24} />
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-silver-400 mb-4">
              <div className="flex items-center space-x-2">
                <Calendar size={16} className="text-silver-500" />
                <span className="font-light">{experience.period}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-silver-500" />
                <span className="font-light">{experience.location}</span>
              </div>
            </div>

            <span className="inline-block px-3 py-1.5 glass-effect text-silver-300 rounded-full text-xs font-medium border border-white/10 mb-4">
              {experience.type}
            </span>

            <p className="text-silver-300 text-sm md:text-base mb-5 leading-relaxed font-light">
              {experience.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  className="px-3 py-1.5 glass-effect text-silver-300 rounded-full text-xs font-medium border border-white/10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    delay: index * 0.15 + 0.2 + skillIndex * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ scale: 1.1, borderColor: 'rgba(192, 192, 192, 0.4)' }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Hover Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-silver-400/0 via-silver-400/5 to-silver-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            initial={false}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
