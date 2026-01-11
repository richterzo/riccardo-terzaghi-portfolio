'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Linkedin, Mail, Github, ExternalLink, Globe, ChevronRight, ChevronLeft } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  link?: string
  tags: string[]
  year: string
  category: string
  client?: string
}

// 9 progetti nell'ordine specifico
const projects: Project[] = [
  {
    id: 'workout-tracker',
    title: 'Workout Tracking APP',
    subtitle: 'Fitness & Analytics',
    description: 'App mobile-first per tracciamento allenamenti, progressi e statistiche fitness. Dashboard personalizzata con grafici real-time, gestione esercizi e analytics avanzate.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    link: '#',
    tags: ['React Native', 'TypeScript', 'Firebase', 'Analytics'],
    year: '2026',
    category: 'Mobile App',
    client: 'Personal Project',
  },
  {
    id: 'apx',
    title: 'APX',
    subtitle: 'Fitness & Laser Shooting',
    description: 'Disciplina sportiva innovativa che unisce allenamento funzionale ad alta intensità e tiro laser. Landing page dinamica per il primo evento APX 2026 con countdown e iscrizioni.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    link: 'https://apx-landing.vercel.app/',
    tags: ['Next.js', 'Framer Motion', 'Landing Page', 'Fitness'],
    year: '2025',
    category: 'Landing Page',
    client: 'APX Sports',
  },
  {
    id: 'otherwise',
    title: 'Otherwise Athletics',
    subtitle: 'CrossFit Gym Ferrara',
    description: 'Sito web completo per palestra CrossFit a Ferrara. Design moderno con sezioni programmi, mindset, gallery fotografica, orari WOD e form contatti integrato.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    link: 'https://otherwise-landing.vercel.app/',
    tags: ['Next.js', 'Framer Motion', 'Landing Page', 'Booking'],
    year: '2024',
    category: 'Website',
    client: 'Otherwise Athletics',
  },
  {
    id: 'savo-antincendi',
    title: 'Savo Antincendi',
    subtitle: 'Fire Safety Systems',
    description: 'Sito web aziendale per leader sistemi antincendio. Catalogo prodotti, servizi manutenzione, pronto intervento 24/7, formazione certificata e area clienti riservata.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    link: 'https://savo-landing.vercel.app/',
    tags: ['Next.js', 'React', 'CMS', 'E-commerce'],
    year: '2025',
    category: 'Corporate Website',
    client: 'Savo Antincendi',
  },
  {
    id: 'ubify',
    title: 'Ubify',
    subtitle: 'Fiscal Cash Register System',
    description: 'Piattaforma SaaS per gestione fiscale e di cassa. Registratore telematico conforme normative 2025, gestione incassi automatica, fatturazione e integrazione hardware POS.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    link: 'https://www.ubify.it/',
    tags: ['Next.js', 'Fiscal Compliance', 'Payment Systems', 'SaaS'],
    year: '2024',
    category: 'SaaS Platform',
    client: 'Ubify',
  },
  {
    id: 'glmspace',
    title: 'GLM Space',
    subtitle: 'Beauty E-commerce',
    description: 'E-commerce completo per prodotti beauty professionali. Sistema logistico integrato, gestione multi-warehouse, pagamenti sicuri, tracking spedizioni e dashboard analytics real-time.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    link: 'https://glmspace.com/',
    tags: ['E-Commerce', 'Logistics', 'Payment Gateway', 'Analytics'],
    year: '2024',
    category: 'E-commerce',
    client: 'GLM Space',
  },
  {
    id: 'calori-scafuri',
    title: 'Calori & Scafuri',
    subtitle: 'Financial Consultancy',
    description: 'Sito professionale per consulenti finanziari certificati EFPA. 20+ anni esperienza, 3 sedi (Bologna, Ferrara), sistema prenotazioni, blog finanziario e area clienti.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    link: 'https://www.caloriscafuri.it/',
    tags: ['Next.js', 'Financial', 'Booking System', 'Blog'],
    year: '2024',
    category: 'Corporate Website',
    client: 'Calori & Scafuri',
  },
  {
    id: 'futuro-naturale',
    title: 'Futuro Naturale',
    subtitle: 'Beauty Center Bologna',
    description: 'Sito elegante per centro estetico Bologna. Catalogo trattamenti dettagliato, sistema prenotazioni online integrato, gallery fotografica professionale e informazioni contatti.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    link: 'https://www.futuronaturale.it/',
    tags: ['Next.js', 'Booking System', 'Gallery', 'SEO'],
    year: '2024',
    category: 'Business Website',
    client: 'Futuro Naturale',
  },
  {
    id: 'bilim-network',
    title: 'Bilim Network',
    subtitle: 'Agroecology Community',
    description: 'Piattaforma internazionale per organizzazioni Agroecologia da Europa Est e Asia. Forum collaborativo, news, case studies, dialoghi, eventi e networking per biodiversità.',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80',
    link: 'https://bilim.network/',
    tags: ['WordPress', 'Forum', 'Community', 'Multilanguage'],
    year: '2024',
    category: 'Community Platform',
    client: 'Bilim Alliance',
  },
]

export default function HeroGallery() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  // Check scroll position
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const checkScroll = () => {
      setCanScrollLeft(container.scrollLeft > 0)
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      )
    }

    container.addEventListener('scroll', checkScroll)
    checkScroll()

    return () => container.removeEventListener('scroll', checkScroll)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current
    if (!container) return

    const scrollAmount = 300
    const targetScroll = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount)
    
    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    })
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

            <p className="text-sm sm:text-base md:text-lg text-silver-300 mb-4 md:mb-6 font-light">
              Freelancer
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

          {/* Horizontal Scrollable Gallery */}
          <div className="relative mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Gallery Container */}
              <div className="relative">
                {/* Navigation Arrows */}
                {canScrollLeft && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => scroll('left')}
                    className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full glass-effect hover:border-silver-400/50 transition-all duration-300 group shadow-xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft size={24} className="text-silver-300 group-hover:text-silver-100 transition-colors" />
                  </motion.button>
                )}
                {canScrollRight && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => scroll('right')}
                    className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full glass-effect hover:border-silver-400/50 transition-all duration-300 group shadow-xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight size={24} className="text-silver-300 group-hover:text-silver-100 transition-colors" />
                    {/* Pulse Animation */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-silver-400"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </motion.button>
                )}

                {/* Scroll Container */}
                <div 
                  ref={scrollContainerRef}
                  className="overflow-x-auto overflow-y-hidden pb-6 scrollbar-hide snap-x snap-mandatory"
                >
                  <div className="flex gap-4 md:gap-6 px-4 md:px-0" style={{ width: 'max-content' }}>
                    {projects.map((project, idx) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                        className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800/50 hover:border-silver-400/50 transition-all duration-300 snap-start flex-shrink-0"
                        style={{ width: '320px', maxWidth: '85vw' }}
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
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                          
                          {/* Category Badge */}
                          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-gray-950/80 backdrop-blur-sm text-xs font-medium text-silver-300 border border-silver-500/20">
                            {project.category}
                          </div>

                          {/* Year Badge */}
                          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-silver-600/90 backdrop-blur-sm text-xs font-bold text-gray-950">
                            {project.year}
                          </div>

                          {/* Link Icon */}
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute bottom-3 right-3 p-2 rounded-full bg-silver-500/90 hover:bg-silver-400 backdrop-blur-sm transition-colors shadow-lg"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink size={16} className="text-gray-950" />
                            </a>
                          )}
                        </div>

                        {/* Project Info */}
                        <div className="p-5">
                          <div className="mb-3">
                            <h3 className="text-lg font-bold text-gray-100 mb-1 line-clamp-1">
                              {project.title}
                            </h3>
                            <p className="text-xs text-silver-400 font-medium">
                              {project.subtitle}
                            </p>
                          </div>

                          <p className="text-xs text-silver-400 mb-3 line-clamp-3 leading-relaxed">
                            {project.description}
                          </p>

                          {/* Client */}
                          {project.client && (
                            <p className="text-xs text-silver-500 mb-3">
                              Cliente: <span className="text-silver-400">{project.client}</span>
                            </p>
                          )}

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.slice(0, 4).map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-2 py-1 bg-silver-500/10 text-silver-300 rounded text-xs font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Hover Glow Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-silver-400/0 via-silver-400/5 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Scroll Indicators - Stronger Gradients */}
                <div className="absolute left-0 top-0 bottom-6 w-32 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent pointer-events-none z-10" />
                <div className="absolute right-0 top-0 bottom-6 w-32 bg-gradient-to-l from-gray-900 via-gray-900/80 to-transparent pointer-events-none z-10" />
              </div>

              {/* Scroll Hint with Animation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-center mt-4"
              >
                <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-silver-500">
                  <motion.span
                    animate={{ x: [0, 10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="md:hidden"
                  >
                    ←
                  </motion.span>
                  <span className="md:hidden">Scorri per vedere tutti i progetti</span>
                  <span className="hidden md:inline">{projects.length} progetti • Scorri per esplorare</span>
                  <motion.span
                    animate={{ x: [0, 10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="md:hidden"
                  >
                    →
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
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

      {/* Custom Scrollbar Hide */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
