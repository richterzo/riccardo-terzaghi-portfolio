'use client'

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Linkedin, Mail, Github, ExternalLink, Play, Box, Globe, Camera, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
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
    category: 'Sito Web' as const,
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
    category: 'Sito Web' as const,
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
    category: 'Video Drone' as const,
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
    category: 'Modello 3D' as const,
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
    category: 'Sito Web' as const,
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
    category: 'Video Drone' as const,
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
    category: 'Modello 3D' as const,
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
    category: 'Sito Web' as const,
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
    category: 'Video Drone' as const,
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
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1)
    }, 6000) // Change slide every 6 seconds

    return () => clearInterval(timer)
  }, [currentIndex])

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection
      if (nextIndex < 0) nextIndex = projects.length - 1
      if (nextIndex >= projects.length) nextIndex = 0
      return nextIndex
    })
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const currentProject = projects[currentIndex]
  const Icon = currentProject.icon

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
        className="relative z-10 flex flex-col min-h-screen"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 md:pt-24 pb-8">
          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-12"
          >
            <motion.div
              className="mb-4 md:mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="inline-block relative"
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
                <div className="relative w-20 h-20 md:w-28 md:h-28 mx-auto rounded-full bg-gradient-to-br from-silver-600 via-silver-500 to-gray-800 flex items-center justify-center text-xl md:text-3xl font-bold text-gray-950 shadow-2xl border border-silver-400/30">
                  RT
                </div>
              </motion.div>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-3 tracking-tight">
              <span className="text-gray-100">Riccardo </span>
              <span className="text-gradient-silver">Terzaghi</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-silver-300 mb-2 font-light">
              Cloud Engineer & Co-Founder @ <a href="https://wesync.dev/" target="_blank" rel="noopener noreferrer" className="text-silver-200 hover:text-silver-100 underline transition-colors">Wesync</a>
            </p>

            {/* Social Links */}
            <div className="flex justify-center flex-wrap gap-2 md:gap-3 mt-4 md:mt-6">
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/in/riccardoterzaghi', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:riccardo@example.com', label: 'Email' },
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
              ].map((social) => {
                const SocialIcon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group relative p-2 md:p-3 rounded-full glass-effect hover:border-silver-400/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SocialIcon size={18} className="md:w-5 md:h-5 text-silver-300 group-hover:text-silver-100 transition-colors" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Carousel */}
          <div className="relative flex-1 flex items-center justify-center">
            <div className="w-full max-w-5xl mx-auto">
              {/* Main Carousel */}
              <div className="relative h-[500px] sm:h-[550px] md:h-[600px] flex items-center justify-center">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: 'spring', stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                      scale: { duration: 0.2 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x)
                      if (swipe < -swipeConfidenceThreshold) {
                        paginate(1)
                      } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1)
                      }
                    }}
                    className="absolute w-full cursor-grab active:cursor-grabbing"
                  >
                    <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 shadow-2xl">
                      {/* Project Image */}
                      <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                        <Image
                          src={currentProject.image}
                          alt={currentProject.title}
                          fill
                          className="object-cover"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 px-4 py-2 rounded-full glass-effect text-sm font-medium text-silver-200 flex items-center gap-2">
                          <Icon size={18} />
                          {currentProject.category}
                        </div>

                        {/* Play Button for Videos */}
                        {currentProject.videoLink && (
                          <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          >
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-silver-500/90 backdrop-blur-sm flex items-center justify-center">
                              <Play size={32} className="text-gray-950 ml-1" fill="currentColor" />
                            </div>
                          </motion.div>
                        )}
                      </div>

                      {/* Project Info */}
                      <div className="p-6 md:p-8">
                        <div className="flex items-start justify-between mb-3 md:mb-4">
                          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-100 flex-1">
                            {currentProject.title}
                          </h2>
                          {currentProject.link && (
                            <a
                              href={currentProject.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-4 p-3 rounded-full bg-silver-500/10 hover:bg-silver-500/20 transition-colors"
                            >
                              <ExternalLink size={20} className="text-silver-300" />
                            </a>
                          )}
                        </div>

                        <p className="text-base md:text-lg text-silver-400 mb-4 md:mb-6 leading-relaxed">
                          {currentProject.description}
                        </p>

                        {/* Date */}
                        <p className="text-sm text-silver-500 mb-4 md:mb-5">
                          {new Date(currentProject.date).toLocaleDateString('it-IT', { 
                            month: 'long', 
                            year: 'numeric' 
                          })}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {currentProject.tags.map((tag, tagIndex) => (
                            <motion.span
                              key={tagIndex}
                              className="px-3 py-1.5 bg-silver-500/10 text-silver-300 rounded-full text-sm font-medium"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: tagIndex * 0.1 }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={() => paginate(-1)}
                  className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 rounded-full glass-effect hover:border-silver-400/50 transition-all duration-300 group"
                  aria-label="Previous project"
                >
                  <ChevronLeft size={24} className="text-silver-300 group-hover:text-silver-100 transition-colors" />
                </button>
                <button
                  onClick={() => paginate(1)}
                  className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 rounded-full glass-effect hover:border-silver-400/50 transition-all duration-300 group"
                  aria-label="Next project"
                >
                  <ChevronRight size={24} className="text-silver-300 group-hover:text-silver-100 transition-colors" />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6 md:mt-8">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? 'w-8 md:w-10 h-2 bg-gradient-to-r from-silver-600 to-silver-500'
                        : 'w-2 h-2 bg-silver-500/30 hover:bg-silver-500/50'
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>

              {/* Project Counter */}
              <div className="text-center mt-4 text-sm text-silver-400">
                {currentIndex + 1} / {projects.length}
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center gap-4 pt-8"
          >
            <motion.a
              href="/about"
              className="px-6 py-3 glass-effect hover:border-silver-400/50 transition-all duration-300 rounded-full text-silver-300 hover:text-silver-100 text-sm md:text-base font-medium"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Scopri di più
            </motion.a>
            <motion.a
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-silver-600 to-silver-500 hover:from-silver-500 hover:to-silver-400 transition-all duration-300 rounded-full text-gray-950 text-sm md:text-base font-medium shadow-lg shadow-silver-500/50"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contattami
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
