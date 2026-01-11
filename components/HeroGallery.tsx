'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Linkedin, Mail, Github, ExternalLink, Globe } from 'lucide-react'
import { useRef } from 'react'
import Image from 'next/image'

interface Project {
  id: string
  title: string
  description: string
  image: string
  link?: string
  tags: string[]
  year: string
}

// 9 progetti nell'ordine specifico
const projects: Project[] = [
  {
    id: 'workout-tracker',
    title: 'Workout Tracking APP',
    description: 'Applicazione mobile-first per tracciamento allenamenti, progressi e statistiche fitness. Dashboard personalizzata con grafici e analytics.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    link: '#',
    tags: ['React Native', 'TypeScript', 'Firebase', 'Analytics'],
    year: '2026',
  },
  {
    id: 'apx',
    title: 'APX',
    description: 'APX è la disciplina sportiva che unisce allenamento funzionale ad alta intensità e tiro laser. Landing page per il primo evento APX 2026.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    link: 'https://apx-landing.vercel.app/',
    tags: ['Next.js', 'Framer Motion', 'Landing Page', 'Fitness'],
    year: '2025',
  },
  {
    id: 'otherwise',
    title: 'Otherwise Athletics',
    description: 'Landing page per palestra CrossFit a Ferrara. Design moderno, presentazione programmi, mindset e gallery. Focus su functional fitness e community.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    link: 'https://otherwise-landing.vercel.app/',
    tags: ['Next.js', 'Framer Motion', 'Landing Page'],
    year: '2024',
  },
  {
    id: 'savo-antincendi',
    title: 'Savo Antincendi',
    description: 'Sito web professionale per azienda leader nei sistemi antincendio. Vendita, noleggio, manutenzione presidi antincendio. Pronto intervento 24/7 e formazione.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    link: 'https://savo-landing.vercel.app/',
    tags: ['Next.js', 'React', 'Landing Page', 'Safety'],
    year: '2025',
  },
  {
    id: 'ubify',
    title: 'Ubify',
    description: 'Piattaforma completa per gestione fiscale e di cassa. Sistema all-in-one con registratore telematico conforme alle normative fiscali 2025.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    link: 'https://ubify.it/',
    tags: ['Next.js', 'Fiscal Compliance', 'Payment Systems'],
    year: '2024',
  },
  {
    id: 'glmspace',
    title: 'GLM Space',
    description: 'Piattaforma e-commerce completa con sistema logistico integrato. Gestione inventario, pagamenti, spedizioni e dashboard analytics per prodotti beauty.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    link: 'https://glmspace.com/',
    tags: ['E-Commerce', 'Logistics', 'Payment Gateway'],
    year: '2024',
  },
  {
    id: 'calori-scafuri',
    title: 'Calori & Scafuri',
    description: 'Consulenti finanziari e patrimoniali certificati EFPA a Bologna. Oltre 20 anni di esperienza, gestione completa del patrimonio e strategie personalizzate.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    link: 'https://www.caloriscafuri.it/',
    tags: ['Next.js', 'Financial', 'Booking System', 'Blog'],
    year: '2024',
  },
  {
    id: 'futuro-naturale',
    title: 'Futuro Naturale',
    description: 'Sito vetrina per centro estetico a Bologna. Presentazione trattamenti, prenotazioni online, gallery e informazioni contatti con design moderno.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    link: 'https://www.futuronaturale.it/',
    tags: ['Next.js', 'Booking System', 'Gallery'],
    year: '2024',
  },
  {
    id: 'bilim-network',
    title: 'Bilim Network',
    description: 'Community di organizzazioni per l\'Agroecologia dall\'Europa dell\'Est, Asia Centrale e Occidentale. Forum, news, dialoghi e networking per biodiversità e patrimonio culturale.',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80',
    link: 'https://bilim.network/',
    tags: ['WordPress', 'Forum', 'Community', 'Agroecology'],
    year: '2024',
  },
]

export default function HeroGallery() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

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

          {/* Horizontal Scrollable Gallery */}
          <div className="relative mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Gallery Container */}
              <div className="relative">
                {/* Scroll Container */}
                <div className="overflow-x-auto overflow-y-hidden pb-6 scrollbar-hide snap-x snap-mandatory">
                  <div className="flex gap-4 md:gap-6 px-4 md:px-0" style={{ width: 'max-content' }}>
                    {projects.map((project, idx) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                        className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800/50 hover:border-silver-400/50 transition-all duration-300 snap-start flex-shrink-0"
                        style={{ width: '280px', maxWidth: '85vw' }}
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
                          
                          {/* Year Badge */}
                          <div className="absolute top-3 right-3 px-3 py-1 rounded-full glass-effect text-xs font-medium text-silver-200">
                            {project.year}
                          </div>

                          {/* Link Icon */}
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute top-3 left-3 p-2 rounded-full bg-silver-500/10 hover:bg-silver-500/20 backdrop-blur-sm transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Globe size={16} className="text-silver-300" />
                            </a>
                          )}
                        </div>

                        {/* Project Info */}
                        <div className="p-4">
                          <h3 className="text-lg font-bold text-gray-100 mb-2 line-clamp-1">
                            {project.title}
                          </h3>

                          <p className="text-xs text-silver-400 mb-3 line-clamp-3 leading-relaxed">
                            {project.description}
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
                    ))}
                  </div>
                </div>

                {/* Scroll Indicators */}
                <div className="absolute left-0 top-0 bottom-6 w-20 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none md:hidden" />
                <div className="absolute right-0 top-0 bottom-6 w-20 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none md:hidden" />
              </div>

              {/* Scroll Hint */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-center mt-4 text-xs md:text-sm text-silver-500"
              >
                <span className="md:hidden">← Scorri per vedere tutti i progetti →</span>
                <span className="hidden md:inline">{projects.length} progetti totali</span>
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
