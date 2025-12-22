'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Cloud, Camera, Box, ExternalLink, ArrowRight } from 'lucide-react'

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

  return (
    <section
      id={id}
      ref={ref}
      className="py-20 md:py-24 relative overflow-hidden"
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
        {/* Header - Compatto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            className="inline-flex items-center justify-center mb-4"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <div
              className={`p-3 rounded-xl bg-gradient-to-br ${gradientFrom} ${gradientTo} bg-opacity-20 border border-white/10`}
            >
              <Icon size={36} className="text-silver-300" />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-3 tracking-tight">
            <span className="text-gray-100">{title}</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-silver-400 to-transparent mx-auto mb-4" />
          <p className="text-lg md:text-xl text-silver-300 font-light max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Portfolio Projects - Design Compatto e Affascinante */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative"
                whileHover={{ y: -8 }}
              >
                <div className="glass-effect rounded-xl overflow-hidden h-full hover:border-silver-400/40 transition-all duration-500 border border-white/10 relative">
                  {/* Project Image - Anteprima */}
                  <div
                    className={`relative h-56 md:h-64 bg-gradient-to-br ${gradientFrom} ${gradientTo} bg-opacity-20 overflow-hidden`}
                  >
                    {project.image ? (
                      <>
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6, ease: 'easeOut' }}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none'
                          }}
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/60 to-transparent"
                          initial={false}
                        />
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon size={64} className="text-silver-400/30" />
                      </div>
                    )}

                    {/* Overlay on Hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-gray-950/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={false}
                    />

                    {/* Link Badge */}
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-3 right-3 p-2 rounded-lg glass-effect border border-white/20 hover:border-silver-400/50 transition-all opacity-0 group-hover:opacity-100"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={16} className="text-silver-300" />
                      </motion.a>
                    )}
                  </div>

                  <div className="p-5 md:p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <motion.h4
                          className="text-lg md:text-xl font-bold text-gray-100 mb-1 group-hover:text-silver-200 transition-colors"
                          whileHover={{ x: 2 }}
                        >
                          {project.title}
                        </motion.h4>
                        <span className="text-xs text-silver-500 font-light">
                          {project.year}
                        </span>
                      </div>
                    </div>

                    <p className="text-silver-300 text-sm mb-4 leading-relaxed line-clamp-2 font-light">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className={`px-2.5 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-opacity-15 text-silver-300 border border-white/10`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{
                              delay: 0.4 + index * 0.08 + techIndex * 0.05,
                            }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2.5 py-1 text-xs font-medium rounded-full glass-effect text-silver-400 border border-white/10">
                          +{project.technologies.length - 3}
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
                        <span className="mr-1.5">Visita sito</span>
                        <ArrowRight
                          size={14}
                          className="group-hover:translate-x-1 transition-transform"
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
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
