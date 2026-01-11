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

// Progetti reali dalle sezioni Skills
const projects: Project[] = [
  // Siti Web / Cloud
  {
    id: 'savo-antincendi',
    title: 'Savo Antincendi',
    category: 'Sito Web' as const,
    description: 'Sito web professionale per azienda leader nei sistemi antincendio. Piattaforma completa con presentazione servizi, portfolio progetti e area riservata clienti.',
    date: '2025-01',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    link: 'https://www.savoantincendi.it/',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    icon: Globe,
  },
  {
    id: 'drone-mappatura',
    title: 'Riprese Aeree e Mappatura 3D',
    category: 'Video Drone' as const,
    description: 'Riprese aeree professionali di monumenti storici e mappatura 3D del territorio. Fotografia aerea ad alta risoluzione con fotogrammetria e post-produzione.',
    date: '2025-01',
    image: '/photos/drone-sanluca.jpg',
    videoLink: 'https://www.youtube.com/watch?v=example',
    tags: ['DJI Mavic', 'Fotogrammetria', 'Mappatura 3D', '4K'],
    icon: Camera,
  },
  {
    id: 'giochi-3d',
    title: 'Giochi per Bambini Personalizzati',
    category: 'Modello 3D' as const,
    description: 'Creazione di giochi 3D unici partendo dai disegni dei bambini. Modellazione, stampa 3D e finitura di giocattoli personalizzati che trasformano l\'immaginazione in realtà.',
    date: '2025-01',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80',
    link: '#',
    tags: ['Blender', '3D Modeling', '3D Printing', 'Custom'],
    icon: Box,
  },
  {
    id: 'wesync',
    title: 'Wesync - Piattaforma Cloud',
    category: 'Sito Web' as const,
    description: 'Co-founder di Wesync, azienda specializzata in soluzioni cloud e sviluppo software. Architetture scalabili, AI-powered applications e servizi cloud enterprise.',
    date: '2024-12',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    link: 'https://wesync.dev',
    tags: ['AWS', 'Cloud Architecture', 'Next.js', 'AI/ML'],
    icon: Globe,
  },
  {
    id: 'fpv-drone',
    title: 'FPV Drone Racing',
    category: 'Video Drone' as const,
    description: 'Pilotaggio FPV (First Person View) per riprese dinamiche e acrobatiche. Voli ad alta velocità, manovre complesse e riprese immersive per video sportivi.',
    date: '2024-12',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80',
    videoLink: 'https://www.youtube.com/watch?v=example',
    tags: ['FPV Drone', 'Racing', 'Acrobatic', 'High-Speed'],
    icon: Camera,
  },
  {
    id: 'specchio-infinito',
    title: 'Cornice Specchio Infinito',
    category: 'Modello 3D' as const,
    description: 'Design e realizzazione di cornice specchio infinito custom made. Progettazione 3D, modellazione precisa e assemblaggio con LED e specchi per effetto ottico infinito.',
    date: '2024-12',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    link: '#',
    tags: ['Blender', '3D Design', 'LED Integration', 'Optical'],
    icon: Box,
  },
  {
    id: 'ubify',
    title: 'Ubify - Cassa Fiscale All-in-One',
    category: 'Sito Web' as const,
    description: 'Piattaforma completa per gestione fiscale e di cassa. Sistema all-in-one con registratore telematico conforme alle normative fiscali 2025.',
    date: '2024-11',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    link: 'https://ubify.it/',
    tags: ['Next.js', 'Fiscal', 'Payment Systems', 'TypeScript'],
    icon: Globe,
  },
  {
    id: 'drone-commerciale',
    title: 'Riprese Aeree Commerciali',
    category: 'Video Drone' as const,
    description: 'Produzione video aereo per campagne pubblicitarie e documentari. Post-produzione professionale con color grading avanzato e stabilizzazione 4K.',
    date: '2024-11',
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&q=80',
    videoLink: 'https://www.youtube.com/watch?v=example',
    tags: ['DJI Mavic', 'Premiere Pro', 'Color Grading', '4K'],
    icon: Camera,
  },
  {
    id: 'maniglie-custom',
    title: 'Maniglie e Utensili Custom Made',
    category: 'Modello 3D' as const,
    description: 'Design e produzione di maniglie e utensili personalizzati per case. Modellazione 3D, prototipazione e stampa 3D di accessori unici su misura.',
    date: '2024-11',
    image: 'https://images.unsplash.com/photo-1565191999001-551c187427bb?w=800&q=80',
    link: '#',
    tags: ['Blender', 'CAD Design', '3D Printing', 'Product Design'],
    icon: Box,
  },
  {
    id: 'glmspace',
    title: 'GLM Space - E-Commerce',
    category: 'Sito Web' as const,
    description: 'Piattaforma e-commerce completa con sistema logistico integrato. Gestione inventario, pagamenti, spedizioni e dashboard analytics per prodotti beauty.',
    date: '2024-10',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    link: 'https://glmspace.com/',
    tags: ['E-Commerce', 'Logistics', 'Payment Gateway', 'Analytics'],
    icon: Globe,
  },
  {
    id: 'bilim-network',
    title: 'Bilim Network - Forum',
    category: 'Sito Web' as const,
    description: 'Piattaforma community per organizzazioni di Agroecologia. Forum interattivo, gestione contenuti, sistema di membership e networking.',
    date: '2024-09',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    link: 'https://bilim.network/',
    tags: ['Forum System', 'Community', 'Content Management', 'Membership'],
    icon: Globe,
  },
  {
    id: 'calori-scafuri',
    title: 'Calori & Scafuri',
    category: 'Sito Web' as const,
    description: 'Sito vetrina professionale per consulenza finanziaria e patrimoniale. Design elegante, sezioni servizi, blog e sistema di prenotazione consulenze.',
    date: '2024-08',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    link: 'https://www.caloriscafuri.it/',
    tags: ['Next.js', 'Financial', 'Booking System', 'Blog'],
    icon: Globe,
  },
  {
    id: 'futuro-naturale',
    title: 'Futuro Naturale',
    category: 'Sito Web' as const,
    description: 'Sito vetrina per centro estetico a Bologna. Presentazione trattamenti, prenotazioni online, gallery e informazioni contatti con design moderno.',
    date: '2024-07',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    link: 'https://www.futuronaturale.it/',
    tags: ['Next.js', 'Booking System', 'Gallery', 'Responsive'],
    icon: Globe,
  },
  {
    id: 'otherwise',
    title: 'Otherwise Athletics',
    category: 'Sito Web' as const,
    description: 'Landing page per palestra CrossFit a Ferrara. Design moderno, presentazione programmi, mindset e gallery. Focus su functional fitness e community.',
    date: '2024-06',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    link: 'https://otherwise-landing.vercel.app/',
    tags: ['Next.js', 'Framer Motion', 'Landing Page', 'Animation'],
    icon: Globe,
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

  const cardsPerView = 3
  const totalSlides = Math.ceil(projects.length / cardsPerView)

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1)
    }, 6000)

    return () => clearInterval(timer)
  }, [currentIndex])

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection
      if (nextIndex < 0) nextIndex = totalSlides - 1
      if (nextIndex >= totalSlides) nextIndex = 0
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
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const startIdx = currentIndex * cardsPerView
  const visibleProjects = projects.slice(startIdx, startIdx + cardsPerView)

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
              <motion.div className="inline-block relative">
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

            <p className="text-xs sm:text-sm md:text-base text-silver-400 mb-4 md:mb-6 font-light">
              Architettura Cloud, Full Stack Development, Pilotaggio Droni & Modellazione 3D
            </p>

            {/* Social Links */}
            <div className="flex justify-center flex-wrap gap-2 md:gap-3">
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

          {/* Carousel - 3 Cards */}
          <div className="relative flex-1 flex items-center justify-center mb-8">
            <div className="w-full max-w-6xl mx-auto">
              {/* Main Carousel */}
              <div className="relative min-h-[520px] flex items-center justify-center">
                <AnimatePresence initial={false} custom={direction} mode="wait">
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                      {visibleProjects.map((project, idx) => {
                        const Icon = project.icon
                        return (
                          <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800/50 hover:border-silver-400/50 transition-all duration-300"
                            whileHover={{ y: -8, scale: 1.02 }}
                          >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                              <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                              
                              {/* Category Badge */}
                              <div className="absolute top-3 left-3 px-3 py-1 rounded-full glass-effect text-xs font-medium text-silver-200 flex items-center gap-1.5">
                                <Icon size={14} />
                                {project.category}
                              </div>

                              {/* Play Button for Videos */}
                              {project.videoLink && (
                                <motion.div
                                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <div className="w-12 h-12 rounded-full bg-silver-500/90 backdrop-blur-sm flex items-center justify-center">
                                    <Play size={20} className="text-gray-950 ml-0.5" fill="currentColor" />
                                  </div>
                                </motion.div>
                              )}
                            </div>

                            {/* Project Info */}
                            <div className="p-4">
                              <div className="flex items-start justify-between mb-2">
                                <h3 className="text-base font-bold text-gray-100 line-clamp-2 flex-1">
                                  {project.title}
                                </h3>
                                {project.link && (
                                  <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-2 p-1.5 rounded-full bg-silver-500/10 hover:bg-silver-500/20 transition-colors flex-shrink-0"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <ExternalLink size={14} className="text-silver-300" />
                                  </a>
                                )}
                              </div>

                              <p className="text-xs text-silver-400 mb-3 line-clamp-2">
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
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={() => paginate(-1)}
                  className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 rounded-full glass-effect hover:border-silver-400/50 transition-all duration-300 group"
                  aria-label="Previous projects"
                >
                  <ChevronLeft size={24} className="text-silver-300 group-hover:text-silver-100 transition-colors" />
                </button>
                <button
                  onClick={() => paginate(1)}
                  className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 rounded-full glass-effect hover:border-silver-400/50 transition-all duration-300 group"
                  aria-label="Next projects"
                >
                  <ChevronRight size={24} className="text-silver-300 group-hover:text-silver-100 transition-colors" />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6 md:mt-8">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? 'w-8 md:w-10 h-2 bg-gradient-to-r from-silver-600 to-silver-500'
                        : 'w-2 h-2 bg-silver-500/30 hover:bg-silver-500/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Project Counter */}
              <div className="text-center mt-4 text-sm text-silver-400">
                {currentIndex + 1} / {totalSlides} <span className="text-silver-500">({projects.length} progetti totali)</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center gap-4 pt-4"
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
