'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Calendar, MapPin, Briefcase, ChevronDown, ChevronUp } from 'lucide-react'

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
    title: 'Technical Instructor',
    company: 'Fondazione Et Labora',
    location: 'Milano, Lombardia, Italia',
    period: 'nov 2023 - feb 2024',
    type: 'In sede',
    description: 'Teaching AWS re/Start, a cohort-based workforce development training program that prepares individuals for careers in the cloud and connects them to potential employers.',
    skills: ['Amazon Web Services (AWS)', 'Technical Training'],
    year: '2023',
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
    title: 'Software Engineer',
    company: 'Capgemini',
    location: 'Milano, Lombardia, Italia',
    period: 'gen 2019 - gen 2021',
    type: 'A tempo pieno',
    description: 'Full-stack development for a TELCO client, creating a comprehensive dashboard to monitor wired and wireless coverage in Italy.',
    skills: ['Angular', 'Oracle SQL Developer', 'Java', 'Pentaho'],
    year: '2019',
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
      className="py-16 md:py-20 relative bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden"
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 tracking-tight">
            <span className="text-gray-100">My Journey</span>
          </h2>
          <div className="w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-silver-400 to-transparent mx-auto mb-3" />
          <p className="text-sm sm:text-base text-silver-400 font-light max-w-xl mx-auto">
            Dal passato al presente: il mio percorso professionale
          </p>
        </motion.div>

        {/* Compact Vertical Timeline */}
        <div className="relative">
          {/* Timeline Line - Animated */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gray-800/50">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-silver-500 via-silver-400 to-silver-500 origin-top"
              style={{
                height: `${lineProgress}%`,
              }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Timeline Items - Compact */}
          <div className="space-y-4 md:space-y-6">
            {experiences.map((exp, index) => (
              <TimelineItem
                key={index}
                experience={exp}
                index={index}
                isFirst={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface TimelineItemProps {
  experience: typeof experiences[0]
  index: number
  isFirst: boolean
}

function TimelineItem({ experience, index, isFirst }: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative pl-12 md:pl-16"
    >
      {/* Timeline Dot */}
      <div className="absolute left-6 md:left-8 transform -translate-x-1/2 z-10">
        <motion.div
          className="relative"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{
            duration: 0.4,
            delay: index * 0.08 + 0.1,
            type: 'spring',
            stiffness: 200,
          }}
        >
          <div className="w-3 h-3 bg-gradient-to-br from-silver-400 to-silver-600 rounded-full border-2 border-gray-950 shadow-md" />
          {isFirst && (
            <motion.div
              className="absolute inset-0 bg-silver-400 rounded-full"
              animate={{
                scale: [1, 1.4, 1],
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

      {/* Compact Card */}
      <motion.div
        className="glass-effect rounded-lg border border-white/10 hover:border-silver-400/30 transition-all duration-300 overflow-hidden"
        whileHover={{ x: 4 }}
      >
        {/* Compact Header - Always Visible */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-4 md:p-5 flex items-center justify-between group"
        >
          <div className="flex-1 text-left">
            <div className="flex items-start justify-between mb-1.5">
              <div className="flex-1">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-100 mb-0.5 group-hover:text-silver-200 transition-colors">
                  {experience.title}
                </h3>
                <p className="text-sm sm:text-base text-silver-300 font-semibold">
                  {experience.company}
                </p>
              </div>
              <Briefcase className="text-silver-400/40 flex-shrink-0 ml-3" size={18} />
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-silver-400 mt-2">
              <div className="flex items-center space-x-1">
                <Calendar size={12} />
                <span className="font-light">{experience.period}</span>
              </div>
              <span className="px-2 py-0.5 glass-effect text-silver-300 rounded-full text-xs font-medium border border-white/10">
                {experience.type}
              </span>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="ml-4 flex-shrink-0"
          >
            <ChevronDown size={20} className="text-silver-400" />
          </motion.div>
        </button>

        {/* Expandable Details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="px-4 md:px-5 pb-4 md:pb-5 pt-0 border-t border-white/10">
                <div className="flex items-center space-x-2 text-xs text-silver-400 mb-3 pt-3">
                  <MapPin size={14} />
                  <span className="font-light">{experience.location}</span>
                </div>
                <p className="text-sm text-silver-300 mb-4 leading-relaxed font-light">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {experience.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-2.5 py-1 glass-effect text-silver-300 rounded-full text-xs font-medium border border-white/10"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: skillIndex * 0.05,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{ scale: 1.1, borderColor: 'rgba(192, 192, 192, 0.3)' }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
