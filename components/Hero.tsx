'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Linkedin, Mail, Github } from 'lucide-react'
import { useRef } from 'react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section
      ref={containerRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-silver-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-light/10 rounded-full blur-3xl"
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
        style={{ opacity, scale, y }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <motion.div
              className="inline-block relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-silver-400/20 to-accent-light/20 rounded-full blur-xl"
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
              <div className="relative w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-silver-600 via-silver-500 to-gray-800 flex items-center justify-center text-4xl font-bold text-gray-950 shadow-2xl border border-silver-400/30">
                RT
              </div>
            </motion.div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
          >
            <span className="text-gray-100">Riccardo </span>
            <span className="text-gradient-silver">Terzaghi</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-silver-300 mb-4 font-light"
          >
            Cloud Engineer & Co-Founder @ <a href="https://wesync.dev/" target="_blank" rel="noopener noreferrer" className="text-silver-200 hover:text-silver-100 underline">Wesync</a>
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-silver-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
          >
            Architettura Cloud, Full Stack Development, Pilotaggio Droni & Modellazione 3D
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 mb-16"
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
                  className="group relative p-4 rounded-full glass-effect hover:border-silver-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <Icon size={24} className="text-silver-300 group-hover:text-silver-100 transition-colors" />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-silver-400/0 via-silver-400/20 to-silver-400/0 opacity-0 group-hover:opacity-100"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                  />
                </motion.a>
              )
            })}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.a
              href="#cloud-architecture"
              className="flex flex-col items-center text-silver-400 hover:text-silver-200 transition-colors group"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <span className="mb-3 text-sm font-light tracking-wider uppercase">Esplora</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <ArrowDown size={24} className="group-hover:text-silver-100" />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
