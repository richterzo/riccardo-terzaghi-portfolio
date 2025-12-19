import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Riccardo Terzaghi - Cloud Engineer & Full Stack Developer',
  description: 'Cloud Architect with experience in web architectures, cloud services, both frontend and backend languages, responsive frameworks, databases and best code practices.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

