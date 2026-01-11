'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code } from 'lucide-react'

const skillCategories = [
  {
    title: 'Linguaggi',
    skills: [
      'JavaScript',
      'HTML5',
      'CSS3',
      'TypeScript',
      'SQL',
      'Java',
      'Python',
    ],
  },
  {
    title: 'Framework',
    skills: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'Node.js',
      'REST APIs',
      'Angular',
      'GraphQL',
    ],
  },
  {
    title: 'Cloud',
    skills: ['AWS', 'Serverless', 'Kubernetes'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section
      ref={ref}
      id="skills"
      className="py-20 md:py-32 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-silver-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-effect mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Code size={20} className="text-silver-400" />
            <span className="text-silver-300 text-sm font-medium">
              Technical Skills
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-100">
            Skill <span className="text-gradient-silver">Tree</span>
          </h2>
          <p className="text-silver-400 text-lg md:text-xl max-w-2xl mx-auto">
            Competenze acquisite negli anni
          </p>
        </motion.div>

        {/* Skill Tree */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8 md:gap-10"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="relative"
            >
              {/* Category Card */}
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-silver-400/50 transition-all duration-300 group">
                {/* Glow Effect */}
                <motion.div className="absolute inset-0 bg-gradient-to-br from-silver-400/0 via-silver-400/5 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Category Title */}
                  <h3 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-silver-600 to-silver-400" />
                    {category.title}
                  </h3>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          duration: 0.5,
                        }}
                        className="group/skill"
                      >
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                          <motion.div
                            className="w-1.5 h-1.5 rounded-full bg-silver-400"
                            whileHover={{ scale: 1.5 }}
                          />
                          <span className="text-silver-300 group-hover/skill:text-silver-100 transition-colors font-medium">
                            {skill}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-silver-400/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-silver-400 to-transparent rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}
