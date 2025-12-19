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
      className="py-32 relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-5`} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center justify-center mb-6"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${gradientFrom} ${gradientTo} bg-opacity-20 border border-white/10`}>
              <Icon size={48} className="text-silver-300" />
            </div>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            <span className="text-gray-100">{title}</span>
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-silver-400 to-transparent mx-auto mb-6" />
          <p className="text-xl text-silver-300 font-light max-w-2xl mx-auto mb-4">
            {subtitle}
          </p>
          <p className="text-lg text-silver-400 font-light max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold text-gray-200 mb-8 text-center">
            Competenze Tecniche
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="glass-effect p-6 rounded-xl hover:border-silver-400/30 transition-all duration-300 group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-200 font-medium group-hover:text-silver-200 transition-colors">
                    {tech.name}
                  </span>
                  <span className={`text-sm font-semibold bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent`}>
                    {tech.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-800/50 rounded-full h-1.5 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-full`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${tech.level}%` } : { width: 0 }}
                    transition={{
                      duration: 1.2,
                      delay: 0.4 + index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-gray-100 mb-12 text-center">
            Portfolio Lavori
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="group relative"
              >
                <div className="glass-effect rounded-2xl overflow-hidden h-full hover:border-silver-400/30 transition-all duration-500">
                  {/* Project Image */}
                  <div className={`relative h-48 bg-gradient-to-br ${gradientFrom} ${gradientTo} bg-opacity-20 overflow-hidden`}>
                    {project.image ? (
                      <>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/50 to-transparent"
                          initial={false}
                        />
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon size={64} className="text-silver-400/30" />
                      </div>
                    )}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={false}
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-gray-100 mb-1 group-hover:text-silver-200 transition-colors">
                          {project.title}
                        </h4>
                        <span className="text-sm text-silver-400">{project.year}</span>
                      </div>
                      {project.link && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg glass-effect hover:bg-white/10 transition-colors"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink size={18} className="text-silver-400" />
                        </motion.a>
                      )}
                    </div>

                    <p className="text-silver-300 text-sm mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-opacity-20 text-silver-300 border border-white/10`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 text-xs font-medium rounded-full glass-effect text-silver-400">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <motion.div
                      className="flex items-center text-sm text-silver-400 group-hover:text-silver-200 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <span className="mr-2">Dettagli</span>
                      <ArrowRight size={16} />
                    </motion.div>
                  </div>

                  {/* Hover Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
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

