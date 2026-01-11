import HeroGallery from '@/components/HeroGallery'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950">
      <Navigation />
      <HeroGallery />
      <About />
      <Experience />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}

