import Certifications from '@/components/Certifications'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <Navigation />
      <div className="pt-20">
        <Certifications />
      </div>
      <Footer />
    </main>
  )
}
