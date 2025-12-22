'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { ArrowDown, Linkedin, Mail, Github, Sparkles } from 'lucide-react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

export default function GameHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 50, stiffness: 100 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  // Initialize particles
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const newParticles: Particle[] = []
    for (let i = 0; i < 100; i++) {
      newParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }
    setParticles(newParticles)
    setIsLoaded(true)
  }, [])

  // Animate particles
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !isLoaded) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      setParticles((prev) =>
        prev.map((p) => {
          let newX = p.x + p.vx
          let newY = p.y + p.vy

          // Bounce off edges
          if (newX < 0 || newX > canvas.width) p.vx *= -1
          if (newY < 0 || newY > canvas.height) p.vy *= -1

          // Attract to mouse
          const dx = mousePos.x - p.x
          const dy = mousePos.y - p.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 150) {
            p.vx += dx * 0.0001
            p.vy += dy * 0.0001
          }

          // Draw particle
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(192, 192, 192, ${p.opacity})`
          ctx.fill()

          // Draw connections
          prev.forEach((other) => {
            const dx = other.x - p.x
            const dy = other.y - p.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            if (distance < 100) {
              ctx.beginPath()
              ctx.moveTo(p.x, p.y)
              ctx.lineTo(other.x, other.y)
              ctx.strokeStyle = `rgba(192, 192, 192, ${0.08 * (1 - distance / 100)})`
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          })

          return {
            ...p,
            x: newX < 0 ? 0 : newX > canvas.width ? canvas.width : newX,
            y: newY < 0 ? 0 : newY > canvas.height ? canvas.height : newY,
          }
        })
      )

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isLoaded, mousePos])

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleResize = () => {
      const canvas = canvasRef.current
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [mouseX, mouseY])

  return (
    <section
      ref={containerRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
    >
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-30"
        style={{ zIndex: 0 }}
      />

      {/* Glitch Grid Overlay */}
      <div className="absolute inset-0 opacity-10" style={{ zIndex: 1 }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(192,192,192,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(192,192,192,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Floating Orbs with Mouse Interaction */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-silver-500/10 rounded-full blur-3xl"
        style={{
          x: useTransform(x, (value) => value * 0.1),
          y: useTransform(y, (value) => value * 0.1),
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cloud-500/10 rounded-full blur-3xl"
        style={{
          x: useTransform(x, (value) => value * -0.1),
          y: useTransform(y, (value) => value * -0.1),
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
      >
        {/* Glitch Text Effect */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
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
            <div className="relative w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-silver-600 via-silver-500 to-gray-800 flex items-center justify-center text-4xl font-bold text-gray-950 shadow-2xl border border-silver-400/30">
              RT
            </div>
            {/* Sparkle Effect */}
            <motion.div
              className="absolute -top-2 -right-2"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <Sparkles size={24} className="text-silver-400" />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 tracking-tight px-4"
        >
          <motion.span
            className="text-gray-100"
            animate={{
              textShadow: [
                '0 0 10px rgba(192,192,192,0.5)',
                '0 0 20px rgba(192,192,192,0.8)',
                '0 0 10px rgba(192,192,192,0.5)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            Riccardo{' '}
          </motion.span>
          <motion.span
            className="text-gradient-silver"
            animate={{
              textShadow: [
                '0 0 10px rgba(192,192,192,0.5)',
                '0 0 20px rgba(192,192,192,0.8)',
                '0 0 10px rgba(192,192,192,0.5)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          >
            Terzaghi
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-silver-300 mb-3 md:mb-4 font-light px-4"
        >
          Cloud Engineer & Co-Founder @{' '}
          <a
            href="https://wesync.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-silver-200 hover:text-silver-100 underline transition-colors"
          >
            Wesync
          </a>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-silver-400 max-w-3xl mx-auto mb-10 md:mb-12 font-light leading-relaxed px-4"
        >
          Architettura Cloud, Full Stack Development, Pilotaggio Droni & Modellazione 3D
        </motion.p>

        {/* Social Links with Hover Effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center flex-wrap gap-4 sm:gap-6 mb-12 md:mb-16 px-4"
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
                whileHover={{ scale: 1.15, y: -8, rotate: [0, -10, 10, -10, 0] }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.2 + index * 0.1,
                  type: 'spring',
                  stiffness: 200,
                }}
              >
                <Icon size={24} className="text-silver-300 group-hover:text-silver-100 transition-colors" />
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-silver-400/0 via-silver-400/30 to-silver-400/0 opacity-0 group-hover:opacity-100"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                />
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-silver-400/20 blur-xl opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </motion.a>
            )
          })}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
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
            <span className="mb-2 sm:mb-3 text-xs sm:text-sm font-light tracking-wider uppercase">Esplora</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <ArrowDown size={20} className="sm:w-6 sm:h-6 group-hover:text-silver-100" />
            </motion.div>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

