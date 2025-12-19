'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Code, Cloud, Camera, Box } from 'lucide-react'

const projects = [
  {
    title: 'Piattaforma Cloud Scalabile',
    category: 'Cloud & Full Stack',
    icon: Cloud,
    description:
      'Architettura cloud serverless per applicazioni web ad alta scalabilità. Implementazione con AWS, Next.js e microservizi.',
    skills: [
      'AWS Architecture',
      'Next.js',
      'Serverless',
      'TypeScript',
      'Microservices',
    ],
    link: '#',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Riprese Aeree Professionali',
    category: 'Pilota di Droni',
    icon: Camera,
    description:
      'Progetti di riprese aeree e mappatura 3D con droni professionali. Fotogrammetria e ispezioni industriali.',
    skills: [
      'Pilotaggio Droni',
      'Fotogrammetria',
      'Mappatura 3D',
      'Riprese Aeree',
      'Post-Produzione',
    ],
    link: '#',
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Modelli 3D e Rendering',
    category: 'Modellazione 3D',
    icon: Box,
    description:
      'Design e modellazione 3D per visualizzazione, rendering fotorealistico e prototipazione digitale.',
    skills: [
      'Blender',
      '3D Modeling',
      'Texturing',
      'Rendering',
      'Animation',
    ],
    link: '#',
    color: 'from-purple-500 to-pink-500',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 relative"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Gradient Header */}
                <div className={`bg-gradient-to-br ${project.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent size={40} className="text-white" />
                    </motion.div>
                    <div className="flex space-x-2">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-white/80 mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className={`px-3 py-1 bg-gradient-to-r ${project.color} bg-opacity-10 text-gray-700 rounded-full text-xs font-medium`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          delay: index * 0.15 + skillIndex * 0.05,
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Hover effect overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`}
                  initial={false}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

