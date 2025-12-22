'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Cloud, Code, Database, Wrench, Zap, CheckCircle2 } from 'lucide-react'

interface Skill {
  name: string
  level: number
  category: 'language' | 'framework' | 'database' | 'tool' | 'cloud'
  year?: string
  parent?: string
}

const skillTree: Skill[] = [
  // Core Languages
  { name: 'JavaScript', level: 95, category: 'language', year: '2019' },
  { name: 'TypeScript', level: 92, category: 'language', year: '2020' },
  { name: 'Java', level: 85, category: 'language', year: '2019' },
  { name: 'Python', level: 85, category: 'language', year: '2021' },
  { name: 'HTML5', level: 95, category: 'language', year: '2019' },
  { name: 'CSS3', level: 95, category: 'language', year: '2019' },
  { name: 'SQL', level: 88, category: 'language', year: '2019' },

  // Frontend Frameworks
  { name: 'React', level: 95, category: 'framework', parent: 'JavaScript', year: '2020' },
  { name: 'Next.js', level: 95, category: 'framework', parent: 'React', year: '2021' },
  { name: 'Angular', level: 88, category: 'framework', parent: 'TypeScript', year: '2019' },
  { name: 'Tailwind CSS', level: 92, category: 'framework', parent: 'CSS3', year: '2021' },

  // Backend & APIs
  { name: 'Node.js', level: 90, category: 'framework', parent: 'JavaScript', year: '2020' },
  { name: 'REST APIs', level: 90, category: 'framework', parent: 'Node.js', year: '2020' },
  { name: 'GraphQL', level: 80, category: 'framework', parent: 'Node.js', year: '2022' },

  // Cloud & Infrastructure
  { name: 'AWS', level: 95, category: 'cloud', year: '2021' },
  { name: 'Serverless', level: 88, category: 'cloud', parent: 'AWS', year: '2021' },
  { name: 'Kubernetes', level: 85, category: 'cloud', parent: 'AWS', year: '2022' },
  { name: 'Docker', level: 85, category: 'tool', parent: 'Kubernetes', year: '2021' },
  { name: 'Terraform', level: 80, category: 'tool', parent: 'AWS', year: '2022' },

  // Databases
  { name: 'PostgreSQL', level: 88, category: 'database', parent: 'SQL', year: '2020' },
  { name: 'MongoDB', level: 85, category: 'database', parent: 'Node.js', year: '2021' },
  { name: 'Oracle SQL', level: 80, category: 'database', parent: 'SQL', year: '2019' },
  { name: 'Redis', level: 80, category: 'database', parent: 'Node.js', year: '2022' },

  // Tools & DevOps
  { name: 'Git', level: 95, category: 'tool', year: '2019' },
  { name: 'CI/CD', level: 85, category: 'tool', parent: 'Git', year: '2021' },
  { name: 'Pentaho', level: 75, category: 'tool', parent: 'Java', year: '2019' },
]

const categoryConfig = {
  language: { icon: Code, color: 'from-blue-500 to-cyan-400', bg: 'bg-blue-500/20', border: 'border-blue-400/30' },
  framework: { icon: Zap, color: 'from-purple-500 to-pink-400', bg: 'bg-purple-500/20', border: 'border-purple-400/30' },
  database: { icon: Database, color: 'from-emerald-500 to-teal-400', bg: 'bg-emerald-500/20', border: 'border-emerald-400/30' },
  tool: { icon: Wrench, color: 'from-orange-500 to-amber-400', bg: 'bg-orange-500/20', border: 'border-orange-400/30' },
  cloud: { icon: Cloud, color: 'from-indigo-500 to-violet-400', bg: 'bg-indigo-500/20', border: 'border-indigo-400/30' },
}

export default function SkillTree() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  // Organize skills by category and hierarchy
  const organizedSkills = skillTree.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  // Sort by level and year
  Object.keys(organizedSkills).forEach((category) => {
    organizedSkills[category].sort((a, b) => {
      if (b.level !== a.level) return b.level - a.level
      return (a.year || '0').localeCompare(b.year || '0')
    })
  })

  return (
    <section
      id="skill-tree"
      ref={ref}
      className="py-16 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900"
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
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            <span className="text-gray-100">Skill Tree</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-silver-400 to-transparent mx-auto mb-4" />
          <p className="text-base sm:text-lg text-silver-400 font-light max-w-2xl mx-auto">
            Le competenze acquisite negli anni, organizzate per categoria e livello
          </p>
        </motion.div>

        {/* Skill Tree Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {Object.entries(organizedSkills).map(([category, skills], categoryIndex) => {
            const config = categoryConfig[category as keyof typeof categoryConfig]
            const Icon = config.icon

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="relative"
              >
                {/* Category Header */}
                <div className={`${config.bg} ${config.border} border rounded-xl p-4 mb-4 backdrop-blur-sm`}>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${config.color} bg-opacity-30`}>
                      <Icon size={24} className="text-silver-200" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-100 capitalize">
                      {category === 'language' ? 'Linguaggi' : category === 'framework' ? 'Framework' : category === 'database' ? 'Database' : category === 'tool' ? 'Tools' : 'Cloud'}
                    </h3>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {skills.map((skill, skillIndex) => {
                    const isHovered = hoveredSkill === skill.name
                    const parentSkill = skill.parent ? skillTree.find(s => s.name === skill.parent) : null

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="relative group"
                      >
                        {/* Connection Line (if has parent) */}
                        {parentSkill && (
                          <motion.div
                            className="absolute -left-4 top-1/2 w-4 h-0.5 bg-gradient-to-r from-silver-400/30 to-transparent"
                            initial={{ scaleX: 0 }}
                            animate={isInView ? { scaleX: 1 } : {}}
                            transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2 }}
                          />
                        )}

                        {/* Skill Card */}
                        <motion.div
                          className={`glass-effect rounded-lg border border-white/10 hover:border-silver-400/40 p-4 transition-all duration-300 cursor-pointer relative overflow-hidden ${
                            isHovered ? 'scale-105' : ''
                          }`}
                          whileHover={{ y: -2 }}
                        >
                          {/* Level Bar Background */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                          <div className="relative z-10">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-1">
                                  <h4 className="text-base font-bold text-gray-100 group-hover:text-silver-200 transition-colors">
                                    {skill.name}
                                  </h4>
                                  {skill.level >= 90 && (
                                    <CheckCircle2 size={16} className="text-emerald-400" />
                                  )}
                                </div>
                                {skill.parent && (
                                  <p className="text-xs text-silver-500 font-light mb-1">
                                    ← {skill.parent}
                                  </p>
                                )}
                                {skill.year && (
                                  <p className="text-xs text-silver-400 font-light">
                                    Dal {skill.year}
                                  </p>
                                )}
                              </div>
                              <div className={`px-2 py-1 rounded-md ${config.bg} border ${config.border} text-xs font-bold text-silver-200`}>
                                {skill.level}%
                              </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="relative h-2 bg-gray-800/50 rounded-full overflow-hidden mt-3">
                              <motion.div
                                className={`h-full bg-gradient-to-r ${config.color} rounded-full`}
                                initial={{ width: 0 }}
                                animate={isInView ? { width: `${skill.level}%` } : {}}
                                transition={{
                                  duration: 1,
                                  delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                                  ease: 'easeOut',
                                }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
                            </div>
                          </div>

                          {/* Hover Glow */}
                          <motion.div
                            className={`absolute -inset-0.5 bg-gradient-to-r ${config.color} opacity-0 group-hover:opacity-20 blur-md -z-10 transition-opacity duration-300`}
                            initial={false}
                          />
                        </motion.div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-wrap justify-center gap-6 text-sm text-silver-400">
            <div className="flex items-center space-x-2">
              <CheckCircle2 size={16} className="text-emerald-400" />
              <span>Competenza Master (90%+)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
              <span>Linguaggi</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-400" />
              <span>Framework</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-violet-400" />
              <span>Cloud</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

