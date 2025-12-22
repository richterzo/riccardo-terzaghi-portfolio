import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Riccardo Terzaghi - Cloud Engineer & Full Stack Developer',
  description: 'Cloud Architect with experience in web architectures, cloud services, both frontend and backend languages, responsive frameworks, databases and best code practices.',
  keywords: ['Cloud Engineer', 'Full Stack Developer', 'AWS', 'Next.js', 'React', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Riccardo Terzaghi' }],
  openGraph: {
    title: 'Riccardo Terzaghi - Cloud Engineer & Full Stack Developer',
    description: 'Cloud Architect with experience in web architectures, cloud services, both frontend and backend languages, responsive frameworks, databases and best code practices.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
