'use client'

import { motion } from 'framer-motion'
import { Linkedin, Mail, Github, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-950 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2 text-gradient-silver">Riccardo Terzaghi</h3>
            <p className="text-silver-400 font-light">Web Developer Freelancer</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            {[
              { icon: Linkedin, href: 'https://www.linkedin.com/in/riccardoterzaghi', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:riccardo@example.com', label: 'Email' },
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
            ].map((social) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-3 rounded-xl glass-effect border border-white/10 text-silver-400 hover:text-silver-200 hover:border-silver-400/30 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} />
                </motion.a>
              )
            })}
          </div>

          <motion.button
            onClick={scrollToTop}
            className="p-3 glass-effect rounded-xl border border-white/10 hover:border-silver-400/30 transition-all duration-300 text-silver-400 hover:text-silver-200"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center text-silver-500 text-sm font-light">
          <p>&copy; {new Date().getFullYear()} Riccardo Terzaghi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
