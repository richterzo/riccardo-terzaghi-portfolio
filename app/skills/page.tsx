import Skills from '@/components/Skills'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <Navigation />
      <div className="pt-20">
        <Skills />
      </div>
      <Footer />
    </main>
  )
}
