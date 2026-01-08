import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import StructuredData from '@/components/StructuredData'
import './globals.css'

export const metadata: Metadata = {
  title: 'Riccardo Terzaghi - Cloud Engineer, Pilota Droni & Modellazione 3D',
  description: 'Cloud Architect e Co-Founder di Wesync. Specializzato in architetture cloud AWS, sviluppo full stack, pilotaggio droni professionali e modellazione 3D. Portfolio completo con progetti innovativi.',
  keywords: [
    'Cloud Engineer',
    'Full Stack Developer',
    'AWS',
    'Next.js',
    'React',
    'TypeScript',
    'Pilota Droni',
    'Drone Pilot',
    'Modellazione 3D',
    '3D Modeling',
    'Blender',
    'Wesync',
    'Bologna',
    'Portfolio',
    'Fotogrammetria',
    'Riprese Aeree',
    'Cloud Architecture',
    'Serverless',
    'Microservices'
  ],
  authors: [{ name: 'Riccardo Terzaghi' }],
  creator: 'Riccardo Terzaghi',
  publisher: 'Riccardo Terzaghi',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Riccardo Terzaghi - Cloud Engineer, Pilota Droni & Modellazione 3D',
    description: 'Cloud Architect e Co-Founder di Wesync. Specializzato in architetture cloud AWS, sviluppo full stack, pilotaggio droni professionali e modellazione 3D.',
    type: 'website',
    locale: 'it_IT',
    siteName: 'Riccardo Terzaghi Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Riccardo Terzaghi - Cloud Engineer, Pilota Droni & Modellazione 3D',
    description: 'Cloud Architect e Co-Founder di Wesync. Specializzato in architetture cloud AWS, sviluppo full stack, pilotaggio droni professionali e modellazione 3D.',
  },
  verification: {
    google: '',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
