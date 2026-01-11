'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Linkedin, Mail, Github, ExternalLink, Play, Box, Globe, Camera } from 'lucide-react'
import { useRef, useState } from 'react'
import Image from 'next/image'

interface Project {
  id: string
  title: string
  category: 'Sito Web' | 'Modello 3D' | 'Video Drone'
  description: string
  date: string
  image: string
  link?: string
  videoLink?: string
  tags: string[]
  icon: any
}

const projects: Project[] = [
  {
    id: 'workout-tracker',
    title: 'App Tracking Workout',
    category: 'Sito Web',
    description: 'Applicazione mobile-first per tracciamento allenamenti, progressi e statistiche fitness. Dashboard personalizzata con grafici e analytics.',
    date: '2026-01-11',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    link: '#',
    tags: ['React Native', 'TypeScript', 'Firebase', 'Analytics'],
    icon: Globe,
  },
  {
    id: 'wesync',
    title: 'Wesync - Piattaforma Cloud',
    category: 'Sito Web',
    description: 'Piattaforma cloud enterprise per gestione progetti e collaborazione team. Architettura serverless AWS con Next.js.',
    date: '2024-12',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    link: 'https://wesync.dev',
    tags: ['Next.js', 'AWS', 'TypeScript', 'Serverless'],
    icon: Globe,
  },
  {
    id: 'drone-bologna',
    title: 'Riprese Aeree San Luca - Bologna',
    category: 'Video Drone',
    description: 'Riprese aeree professionali del Santuario di San Luca e panorama di Bologna. Video cinematografico 4K.',
    date: '2024-10',
    image: '/photos/drone-sanluca.jpg',
    videoLink: 'https://www.youtube.com/watch?v=example',
    tags: ['DJI', '4K', 'Cinematografia', 'Bologna'],
    icon: Camera,
  },
  {
    id: 'architecture-viz',
    title: 'Visualizzazione Architettonica 3D',
    category: 'Modello 3D',
    description: 'Rendering fotorealistico per progetti architettonici residenziali e commerciali. Modellazione completa in Blender.',
    date: '2024-09',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    link: '#',
    tags: ['Blender', 'Rendering', 'Architettura', '3D'],
    icon: Box,
  },
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Scalabile',
    category: 'Sito Web',
    description: 'Piattaforma e-commerce multi-vendor con gestione inventario, pagamenti e analytics in tempo reale.',
    date: '2024-08',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    link: '#',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    icon: Globe,
  },
  {
    id: 'industrial-inspection',
    title: 'Ispezione Industriale con Drone',
    category: 'Video Drone',
    description: 'Mappatura 3D e ispezione di infrastrutture industriali con termocamera. Fotogrammetria avanzata.',
    date: '2024-07',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80',
    videoLink: 'https://www.youtube.com/watch?v=example',
    tags: ['Termografia', 'Mappatura', 'Ispezione', 'Fotogrammetria'],
    icon: Camera,
  },
  {
    id: 'product-design',
    title: 'Design Prodotto & Prototipazione',
    category: 'Modello 3D',
    description: 'Design industriale e prototipazione digitale per prodotti consumer electronics. Texturing PBR.',
    date: '2024-06',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    link: '#',
    tags: ['Product Design', 'CAD', 'Texturing', 'PBR'],
    icon: Box,
  },
  {
    id: 'real-estate-platform',
    title: 'Portale Immobiliare',
    category: 'Sito Web',
    description: 'Piattaforma per agenzie immobiliari con tour virtuali 3D, mappe interattive e CRM integrato.',
    date: '2024-05',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    link: '#',
    tags: ['Vue.js', '3D Tours', 'Maps', 'CRM'],
    icon: Globe,
  },
  {
    id: 'wedding-drone',
    title: 'Matrimonio Luxury - Riprese Aeree',
    category: 'Video Drone',
    description: 'Servizio completo riprese aeree per matrimonio di lusso. Video emozionale con colonna sonora originale.',
    date: '2024-04',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    videoLink: 'https://www.youtube.com/watch?v=example',
    tags: ['Wedding', 'Cinematografia', 'Editing', 'Color Grading'],
    icon: Camera,
  },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export default function HeroGallery() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('Tutti')
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  const categories = ['Tutti', 'Sito Web', 'Modello 3D', 'Video Drone']
  
  const filteredProjects = selectedCategory === 'Tutti' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

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
      ref={containerRef}
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-silver-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 pt-20 md:pt-24 pb-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Header */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-12 md:mb-16"
          >
            <motion.div
              variants={itemVariants}
              className="mb-6 md:mb-8"
            >
              <motion.div
                className="inline-block relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-silver-400/20 to-blue-400/20 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-br from-silver-600 via-silver-500 to-gray-800 flex items-center justify-center text-2xl md:text-4xl font-bold text-gray-950 shadow-2xl border border-silver-400/30">
                  RT
                </div>
              </motion.div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4 tracking-tight px-4"
            >
              <span className="text-gray-100">Riccardo </span>
              <span className="text-gradient-silver">Terzaghi</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-silver-300 mb-2 md:mb-3 font-light px-4"
            >
              Cloud Engineer & Co-Founder @ <a href="https://wesync.dev/" target="_blank" rel="noopener noreferrer" className="text-silver-200 hover:text-silver-100 underline transition-colors">Wesync</a>
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-silver-400 max-w-3xl mx-auto mb-8 md:mb-10 font-light leading-relaxed px-4"
            >
              Architettura Cloud, Full Stack Development, Pilotaggio Droni & Modellazione 3D
            </motion.p>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center flex-wrap gap-3 md:gap-4 mb-8 md:mb-12 px-4"
            >
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/in/riccardoterzaghi', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:riccardo@example.com', label: 'Email' },
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
              ].map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group relative p-3 md:p-4 rounded-full glass-effect hover:border-silver-400/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} className="md:w-6 md:h-6 text-silver-300 group-hover:text-silver-100 transition-colors" />
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-silver-400/0 via-silver-400/20 to-silver-400/0 opacity-0 group-hover:opacity-100"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                    />
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 px-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-silver-600 to-silver-500 text-gray-950 shadow-lg shadow-silver-500/50'
                    : 'glass-effect text-silver-300 hover:text-silver-100 hover:border-silver-400/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Gallery */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-12"
          >
            {filteredProjects.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800/50 hover:border-silver-400/50 transition-all duration-300"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full glass-effect text-xs font-medium text-silver-200 flex items-center gap-1.5">
                      <Icon size={14} />
                      {project.category}
                    </div>

                    {/* Play Button for Videos */}
                    {project.videoLink && (
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-silver-500/90 backdrop-blur-sm flex items-center justify-center">
                          <Play size={24} className="text-gray-950 ml-1" fill="currentColor" />
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-4 md:p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-base md:text-lg font-bold text-gray-100 line-clamp-2 flex-1">
                        {project.title}
                      </h3>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 p-2 rounded-full bg-silver-500/10 hover:bg-silver-500/20 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={16} className="text-silver-300" />
                        </a>
                      )}
                    </div>

                    <p className="text-xs md:text-sm text-silver-400 mb-3 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Date */}
                    <p className="text-xs text-silver-500 mb-3">
                      {new Date(project.date).toLocaleDateString('it-IT', { 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-silver-500/10 text-silver-300 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 text-silver-400 text-xs">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-silver-400/0 via-silver-400/5 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  />
                </motion.div>
              )
            })}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center pt-4"
          >
            <motion.a
              href="#about"
              className="flex flex-col items-center text-silver-400 hover:text-silver-200 transition-colors group"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <span className="mb-2 text-xs md:text-sm font-light tracking-wider uppercase">Scopri di più</span>
              <ArrowDown size={20} className="md:w-6 md:h-6 group-hover:text-silver-100" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
