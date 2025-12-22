'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Cloud, Camera, Box, ExternalLink, ArrowRight, X, Search } from 'lucide-react'

interface Project {
  title: string
  description: string
  image?: string
  technologies: string[]
  link?: string
  year: string
}

interface FullPortfolioProps {
  id: string
  title: string
  icon: typeof Cloud
  projects: Project[]
  gradientFrom: string
  gradientTo: string
}

export default function FullPortfolio({
  id,
  title,
  icon: Icon,
  projects,
  gradientFrom,
  gradientTo,
}: FullPortfolioProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [searchTerm, setSearchTerm] = useState('')

  // Filter projects based on search
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.technologies.some((tech) =>
      tech.toLowerCase().includes(searchTerm.toLowerCase())
    )
  )

  return (
    <section
      id={id}
      ref={ref}
      className="py-16 md:py-20 lg:py-24 relative overflow-hidden scroll-mt-20"
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div
              className={`p-3 rounded-xl bg-gradient-to-br ${gradientFrom} ${gradientTo} bg-opacity-20 border border-white/10`}
            >
              <Icon size={36} className="text-silver-300" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 tracking-tight">
            <span className="text-gray-100">Portfolio Completo - </span>
            <span className="text-gradient-silver">{title}</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-silver-400 to-transparent mx-auto mb-4" />
          <p className="text-sm sm:text-base text-silver-400 font-light">
            {projects.length} progetti totali
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 md:mb-12 max-w-md mx-auto"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-silver-400" size={18} />
            <input
              type="text"
              placeholder="Cerca progetti..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 glass-effect border border-white/10 rounded-xl text-silver-300 placeholder-silver-500 focus:border-silver-400/50 focus:outline-none transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-silver-400 hover:text-silver-200 transition-colors"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </motion.div>

        {/* All Projects Grid - Scalabile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {filteredProjects.map((project, index) => (
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
          ) : (
            <div className="text-center py-12">
              <p className="text-silver-400 font-light">
                Nessun progetto trovato per "{searchTerm}"
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  isInView,
  gradientFrom,
  gradientTo,
  Icon,
}: {
  project: Project
  index: number
  isInView: boolean
  gradientFrom: string
  gradientTo: string
  Icon: typeof Cloud
}) {
  const animationDelay = Math.min(index * 0.03, 0.5)

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
        {/* Project Image */}
        <div
          className={`relative h-44 sm:h-48 md:h-52 bg-gradient-to-br ${gradientFrom} ${gradientTo} bg-opacity-20 overflow-hidden flex-shrink-0`}
        >
          {project.image ? (
            <>
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement
                  target.style.display = 'none'
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/60 to-transparent"
                initial={false}
              />
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon size={48} className="text-silver-400/30" />
            </div>
          )}

          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-2 right-2 p-1.5 rounded-lg glass-effect border border-white/20 hover:border-silver-400/50 transition-all opacity-0 group-hover:opacity-100 z-10"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink size={14} className="text-silver-300" />
            </motion.a>
          )}

          <div className="absolute top-2 left-2">
            <span className="px-2 py-0.5 bg-gray-950/80 backdrop-blur-sm text-silver-300 rounded text-xs font-medium border border-white/10">
              {project.year}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 flex-1 flex flex-col">
          <div className="flex-1">
            <h4 className="text-base sm:text-lg font-bold text-gray-100 mb-1.5 group-hover:text-silver-200 transition-colors line-clamp-2">
              {project.title}
            </h4>
            <p className="text-silver-300 text-xs sm:text-sm mb-3 leading-relaxed line-clamp-2 font-light">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.technologies.slice(0, 2).map((tech) => (
              <span
                key={tech}
                className={`px-2 py-0.5 text-xs font-medium rounded-full bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-opacity-15 text-silver-300 border border-white/10`}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 2 && (
              <span className="px-2 py-0.5 text-xs font-medium rounded-full glass-effect text-silver-400 border border-white/10">
                +{project.technologies.length - 2}
              </span>
            )}
          </div>

          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs text-silver-400 group-hover:text-silver-200 transition-colors font-medium"
              whileHover={{ x: 4 }}
            >
              <span className="mr-1.5">Visita</span>
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          )}
        </div>

        {/* Hover Effects */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  )
}

