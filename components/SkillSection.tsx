'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useMemo } from 'react'
import { Cloud, Camera, Box, ExternalLink, ArrowRight, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface Project {
  title: string
  description: string
  image?: string
  technologies: string[]
  link?: string
  year: string
}

interface SkillSectionProps {
  id: string
  title: string
  subtitle: string
  icon: typeof Cloud
  description: string
  technologies: { name: string; level: number }[]
  projects: Project[]
  gradientFrom: string
  gradientTo: string
}

export default function SkillSection({
  id,
  title,
  subtitle,
  icon: Icon,
  description,
  technologies,
  projects,
  gradientFrom,
  gradientTo,
}: SkillSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Memoize per performance con molti progetti
  const sortedProjects = useMemo(
    () => [...projects].sort((a, b) => {
      // Ordina per anno (più recenti prima)
      const yearA = parseInt(a.year.split('-')[0]) || 0
      const yearB = parseInt(b.year.split('-')[0]) || 0
      return yearB - yearA
    }),
    [projects]
  )

  // Mostra solo i primi 3 progetti come highlight
  const highlightedProjects = sortedProjects.slice(0, 3)
  const remainingCount = sortedProjects.length - 3

  return (
    <section
      id={id}
      ref={ref}
      className="py-16 md:py-20 lg:py-24 relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-5`}
      />

      {/* Grid Pattern */}
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
        {/* Header - Compatto e Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 md:mb-12 lg:mb-16"
        >
          <motion.div
            className="inline-flex items-center justify-center mb-3 md:mb-4"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <div
              className={`p-2.5 md:p-3 rounded-xl bg-gradient-to-br ${gradientFrom} ${gradientTo} bg-opacity-20 border border-white/10`}
            >
              <Icon size={32} className="md:w-9 md:h-9 text-silver-300" />
            </div>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-3 tracking-tight px-4">
            <span className="text-gray-100">{title}</span>
          </h2>
          <div className="w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-silver-400 to-transparent mx-auto mb-3 md:mb-4" />
          <p className="text-base sm:text-lg md:text-xl text-silver-300 font-light max-w-2xl mx-auto leading-relaxed px-4">
            {description}
          </p>
        </motion.div>

        {/* Highlight Projects - Solo 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-8 md:mb-10">
            {highlightedProjects.map((project, index) => (
              <ProjectCard
                key={`${project.title}-${index}`}
                project={project}
                index={index}
                isInView={isInView}
                gradientFrom={gradientFrom}
                gradientTo={gradientTo}
                Icon={Icon}
              />
            ))}
          </div>

          {/* View All Projects Button */}
          {remainingCount > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <Link
                href={`#${id}-portfolio`}
                className="inline-flex items-center space-x-2 px-6 py-3 glass-effect border border-white/10 hover:border-silver-400/40 rounded-xl text-silver-300 hover:text-silver-200 transition-all duration-300 group"
              >
                <span className="font-medium">Vedi tutti i progetti</span>
                <span className="text-xs text-silver-400 group-hover:text-silver-300">
                  ({sortedProjects.length} totali)
                </span>
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: Project
  index: number
  isInView: boolean
  gradientFrom: string
  gradientTo: string
  Icon: typeof Cloud
}

function ProjectCard({
  project,
  index,
  isInView,
  gradientFrom,
  gradientTo,
  Icon,
}: ProjectCardProps) {
  // Ottimizzazione: animazioni più leggere per molti progetti
  const animationDelay = Math.min(index * 0.05, 1) // Max 1s delay

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.4,
        delay: animationDelay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative h-full"
      whileHover={{ y: -6 }}
    >
      <div className="glass-effect rounded-xl overflow-hidden h-full hover:border-silver-400/40 transition-all duration-500 border border-white/10 relative flex flex-col">
        {/* Project Image - Responsive Height */}
        <div
          className={`relative h-48 sm:h-52 md:h-56 lg:h-60 bg-gradient-to-br ${gradientFrom} ${gradientTo} bg-opacity-20 overflow-hidden flex-shrink-0`}
        >
          {project.image ? (
            <>
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                loading="lazy"
                quality={85}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/60 to-transparent"
                initial={false}
              />
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon size={56} className="text-silver-400/30" />
            </div>
          )}

          {/* Overlay on Hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-gray-950/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={false}
          />

          {/* Link Badge - Responsive */}
          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 sm:p-2 rounded-lg glass-effect border border-white/20 hover:border-silver-400/50 transition-all opacity-0 group-hover:opacity-100 z-10"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink size={14} className="sm:w-4 sm:h-4 text-silver-300" />
            </motion.a>
          )}

          {/* Year Badge */}
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
            <span className="px-2 py-1 bg-gray-950/80 backdrop-blur-sm text-silver-300 rounded-md text-xs font-medium border border-white/10">
              {project.year}
            </span>
          </div>
        </div>

        {/* Content - Flex grow per altezza uniforme */}
        <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
          <div className="flex-1">
            <motion.h4
              className="text-base sm:text-lg md:text-xl font-bold text-gray-100 mb-1.5 group-hover:text-silver-200 transition-colors line-clamp-2"
              whileHover={{ x: 2 }}
            >
              {project.title}
            </motion.h4>

            <p className="text-silver-300 text-xs sm:text-sm mb-3 md:mb-4 leading-relaxed line-clamp-2 sm:line-clamp-3 font-light">
              {project.description}
            </p>
          </div>

          {/* Technologies - Responsive */}
          <div className="flex flex-wrap gap-1.5 mb-3 md:mb-4">
            {project.technologies.slice(0, 3).map((tech, techIndex) => (
              <motion.span
                key={tech}
                className={`px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs font-medium rounded-full bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-opacity-15 text-silver-300 border border-white/10`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  delay: animationDelay + techIndex * 0.03,
                }}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs font-medium rounded-full glass-effect text-silver-400 border border-white/10">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Link - Responsive */}
          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs sm:text-sm text-silver-400 group-hover:text-silver-200 transition-colors font-medium mt-auto"
              whileHover={{ x: 4 }}
            >
              <span className="mr-1.5">Visita sito</span>
              <ArrowRight
                size={12}
                className="sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform"
              />
            </motion.a>
          )}
        </div>

        {/* Hover Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />

        {/* Glow Effect on Hover */}
        <motion.div
          className={`absolute -inset-0.5 bg-gradient-to-r ${gradientFrom} ${gradientTo} opacity-0 group-hover:opacity-20 blur-xl -z-10 transition-opacity duration-500`}
          initial={false}
        />
      </div>
    </motion.div>
  )
}
