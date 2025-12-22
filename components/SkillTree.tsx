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
  language: { icon: Code, color: 'from-cloud-500 to-cloud-400', bg: 'bg-cloud-500/20', border: 'border-cloud-400/30' },
  framework: { icon: Zap, color: 'from-cloud-600 to-cloud-400', bg: 'bg-cloud-600/20', border: 'border-cloud-400/30' },
  database: { icon: Database, color: 'from-cloud-500 to-cloud-300', bg: 'bg-cloud-500/20', border: 'border-cloud-300/30' },
  tool: { icon: Wrench, color: 'from-silver-500 to-silver-400', bg: 'bg-silver-500/20', border: 'border-silver-400/30' },
  cloud: { icon: Cloud, color: 'from-cloud-600 to-cloud-400', bg: 'bg-cloud-600/20', border: 'border-cloud-400/30' },
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
      className="py-8 md:py-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-6 md:mb-8"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-2 tracking-tight">
            <span className="text-gray-100">Skill Tree</span>
          </h3>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-silver-400 to-transparent mx-auto mb-2" />
          <p className="text-sm text-silver-400 font-light max-w-xl mx-auto">
            Competenze acquisite negli anni
          </p>
        </motion.div>

        {/* Skill Tree Grid - Compact */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {Object.entries(organizedSkills).map(([category, skills], categoryIndex) => {
            const config = categoryConfig[category as keyof typeof categoryConfig]
            const Icon = config.icon

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: categoryIndex * 0.05 }}
                className="relative"
              >
                {/* Category Header - Compact */}
                <div className={`${config.bg} ${config.border} border rounded-lg p-2 mb-2 backdrop-blur-sm`}>
                  <div className="flex items-center space-x-2">
                    <div className={`p-1 rounded bg-gradient-to-br ${config.color} bg-opacity-30`}>
                      <Icon size={16} className="text-silver-200" />
                    </div>
                    <h4 className="text-sm font-bold text-gray-100 capitalize">
                      {category === 'language' ? 'Linguaggi' : category === 'framework' ? 'Framework' : category === 'database' ? 'Database' : category === 'tool' ? 'Tools' : 'Cloud'}
                    </h4>
                  </div>
                </div>

                {/* Skills List - Compact */}
                <div className="space-y-1.5">
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

                        {/* Skill Card - Compact */}
                        <motion.div
                          className={`glass-effect rounded-md border border-white/10 hover:border-silver-400/40 p-2 transition-all duration-300 cursor-pointer relative overflow-hidden ${
                            isHovered ? 'scale-105' : ''
                          }`}
                          whileHover={{ y: -1 }}
                        >
                          <div className="relative z-10">
                            <div className="flex items-center justify-between mb-1">
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-1">
                                  <h5 className="text-xs font-semibold text-gray-100 group-hover:text-silver-200 transition-colors truncate">
                                    {skill.name}
                                  </h5>
                                  {skill.level >= 90 && (
                                    <CheckCircle2 size={12} className="text-emerald-400 flex-shrink-0" />
                                  )}
                                </div>
                              </div>
                            </div>

                            {/* Progress Bar - Compact */}
                            <div className="relative h-1 bg-gray-800/50 rounded-full overflow-hidden">
                              <motion.div
                                className={`h-full bg-gradient-to-r ${config.color} rounded-full`}
                                initial={{ width: 0 }}
                                animate={isInView ? { width: `${skill.level}%` } : {}}
                                transition={{
                                  duration: 0.8,
                                  delay: categoryIndex * 0.05 + skillIndex * 0.03 + 0.2,
                                  ease: 'easeOut',
                                }}
                              />
                            </div>
                          </div>

                          {/* Hover Glow */}
                          <motion.div
                            className={`absolute -inset-0.5 bg-gradient-to-r ${config.color} opacity-0 group-hover:opacity-20 blur-sm -z-10 transition-opacity duration-300`}
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

      </div>
    </section>
  )
}

