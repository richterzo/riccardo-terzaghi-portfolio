'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Linkedin, Github, Send } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="py-32 relative bg-gradient-to-b from-gray-900 to-gray-950"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-gray-100">Get In </span>
            <span className="text-gradient-silver">Touch</span>
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-silver-400 to-transparent mx-auto mb-8" />
          <p className="text-lg text-silver-300 max-w-2xl mx-auto font-light leading-relaxed">
            Sempre aperto a discutere nuovi progetti, idee creative o opportunità
            per far parte delle tue visioni.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-100 mb-6">
                Let's Connect
              </h3>
              <p className="text-silver-300 mb-8 leading-relaxed font-light">
                Che tu abbia un progetto in mente, voglia collaborare o semplicemente
                dire ciao, mi piacerebbe sentirti!
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'riccardo@example.com', href: 'mailto:riccardo@example.com' },
                { icon: Linkedin, label: 'LinkedIn', value: 'riccardoterzaghi', href: 'https://www.linkedin.com/in/riccardoterzaghi' },
                { icon: Github, label: 'GitHub', value: 'github.com/riccardoterzaghi', href: 'https://github.com' },
              ].map((contact, index) => {
                const Icon = contact.icon
                return (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 p-5 glass-effect rounded-xl border border-white/10 hover:border-silver-400/30 transition-all duration-300 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <div className="p-3 rounded-xl glass-effect group-hover:bg-white/10 transition-colors border border-white/10">
                      <Icon className="text-silver-400 group-hover:text-silver-200 transition-colors" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-100 group-hover:text-silver-200 transition-colors">
                        {contact.label}
                      </div>
                      <div className="text-sm text-silver-400 font-light">{contact.value}</div>
                    </div>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            className="glass-effect p-8 rounded-2xl border border-white/10"
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-silver-300 mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 glass-effect border border-white/10 rounded-xl focus:ring-2 focus:ring-silver-400/50 focus:border-silver-400/50 transition-all text-gray-100 placeholder-silver-500"
                  placeholder="Il tuo nome"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-silver-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 glass-effect border border-white/10 rounded-xl focus:ring-2 focus:ring-silver-400/50 focus:border-silver-400/50 transition-all text-gray-100 placeholder-silver-500"
                  placeholder="la.tua@email.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-silver-300 mb-2"
                >
                  Messaggio
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 glass-effect border border-white/10 rounded-xl focus:ring-2 focus:ring-silver-400/50 focus:border-silver-400/50 transition-all resize-none text-gray-100 placeholder-silver-500"
                  placeholder="Il tuo messaggio..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-silver-600 to-silver-500 text-gray-950 py-4 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Invia Messaggio</span>
                <Send size={20} />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
