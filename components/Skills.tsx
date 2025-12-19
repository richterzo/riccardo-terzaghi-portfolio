'use client'

import SkillSection from './SkillSection'
import { Cloud, Camera, Box } from 'lucide-react'

const cloudProjects = [
  {
    title: 'Wesync',
    description: 'Co-founder di Wesync, azienda specializzata in soluzioni cloud e sviluppo software. Architetture scalabili, AI-powered applications e servizi cloud enterprise.',
    technologies: ['AWS', 'Cloud Architecture', 'Next.js', 'TypeScript', 'AI/ML', 'Microservices'],
    link: 'https://wesync.dev/',
    year: '2024 - Presente',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
  },
  {
    title: 'GLM Space - E-Commerce',
    description: 'Piattaforma e-commerce completa con sistema logistico integrato. Gestione inventario, pagamenti, spedizioni e dashboard analytics per prodotti beauty professionali.',
    technologies: ['Next.js', 'E-Commerce', 'Logistics System', 'Payment Gateway', 'Inventory Management'],
    link: 'https://glmspace.com/',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
  },
  {
    title: 'Bilim Network - Forum',
    description: 'Piattaforma community per organizzazioni di Agroecologia. Forum interattivo, gestione contenuti, sistema di membership e networking per Eastern Europe, Central and Western Asia.',
    technologies: ['Next.js', 'Forum System', 'Community Platform', 'Content Management', 'Membership'],
    link: 'https://bilim.network/',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
  },
  {
    title: 'Calori & Scafuri',
    description: 'Sito vetrina professionale per consulenza finanziaria e patrimoniale. Design elegante, sezioni servizi, blog e sistema di prenotazione consulenze.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
    link: 'https://www.caloriscafuri.it/',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
  },
  {
    title: 'Futuro Naturale',
    description: 'Sito vetrina per centro estetico a Bologna. Presentazione trattamenti, prenotazioni online, gallery e informazioni contatti con design moderno e accattivante.',
    technologies: ['Next.js', 'React', 'Booking System', 'Gallery', 'Responsive Design'],
    link: 'https://www.futuronaturale.it/',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800',
  },
  {
    title: 'Otherwise Athletics',
    description: 'Landing page per palestra CrossFit a Ferrara. Design moderno, presentazione programmi, mindset e gallery. Focus su functional fitness e community.',
    technologies: ['Next.js', 'React', 'Framer Motion', 'Landing Page', 'Animation'],
    link: 'https://otherwise-landing.vercel.app/',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
  },
]

const droneProjects = [
  {
    title: 'Riprese Aeree Monumenti',
    description: 'Riprese aeree professionali di monumenti storici. Fotografia aerea ad alta risoluzione del Santuario di San Luca a Bologna, con post-produzione e color grading professionale.',
    technologies: ['DJI Mavic', 'Fotografia Aerea', 'Post-Produzione', 'Color Grading', '4K'],
    year: '2024',
    image: '/photos/drone-sanluca.jpg',
  },
  {
    title: 'Mappatura 3D Territorio',
    description: 'Progetto di fotogrammetria per mappatura tridimensionale di area industriale. Elaborazione dati con software specializzati e generazione modelli 3D ad alta precisione.',
    technologies: ['DJI Phantom', 'Fotogrammetria', 'Agisoft Metashape', 'GIS', '3D Modeling'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1473968512647-3f4478c51442?w=800&q=80',
  },
  {
    title: 'Riprese Aeree Commerciali',
    description: 'Produzione video aereo per campagne pubblicitarie e documentari. Post-produzione professionale con color grading avanzato e stabilizzazione 4K.',
    technologies: ['DJI Mavic', 'Premiere Pro', 'Color Grading', '4K Video', 'Stabilization'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
  },
]

const modelingProjects = [
  {
    title: 'Giochi per Bambini Personalizzati',
    description: 'Creazione di giochi 3D unici partendo dai disegni dei bambini. Modellazione, stampa 3D e finitura di giocattoli personalizzati che trasformano l\'immaginazione in realtà.',
    technologies: ['Blender', '3D Modeling', '3D Printing', 'Design Personalizzato', 'Post-Processing'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80',
  },
  {
    title: 'Cornice Specchio Infinito',
    description: 'Design e realizzazione di cornice specchio infinito custom made. Progettazione 3D, modellazione precisa e assemblaggio con LED e specchi per effetto ottico infinito.',
    technologies: ['Blender', '3D Design', 'LED Integration', 'Custom Manufacturing', 'Optical Design'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
  },
  {
    title: 'Maniglie e Utensili Custom Made',
    description: 'Design e produzione di maniglie e utensili personalizzati per case. Modellazione 3D, prototipazione e stampa 3D di accessori unici su misura per interni ed esterni.',
    technologies: ['Blender', 'CAD Design', '3D Printing', 'Custom Manufacturing', 'Product Design'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
  },
]

export default function Skills() {
  return (
    <>
      <SkillSection
        id="cloud-architecture"
        title="Architettura Cloud & Full Stack"
        subtitle="Soluzioni Scalabili e Moderne"
        icon={Cloud}
        description="Progettazione e sviluppo di architetture cloud enterprise, applicazioni web full stack e sistemi distribuiti ad alta performance. Esperienza in AWS, microservizi, serverless computing e DevOps. Co-founder di Wesync."
        technologies={[
          { name: 'AWS Cloud Architecture', level: 95 },
          { name: 'Next.js & React', level: 95 },
          { name: 'TypeScript', level: 92 },
          { name: 'Node.js & Backend', level: 90 },
          { name: 'E-Commerce Systems', level: 88 },
          { name: 'Serverless Architecture', level: 88 },
          { name: 'Kubernetes & Docker', level: 85 },
          { name: 'CI/CD & DevOps', level: 85 },
        ]}
        projects={cloudProjects}
        gradientFrom="from-blue-600"
        gradientTo="to-cyan-500"
      />

      <SkillSection
        id="drone-pilot"
        title="Pilota di Droni"
        subtitle="Riprese Aeree e Mappatura Professionale"
        icon={Camera}
        description="Pilotaggio professionale di droni per riprese aeree, mappatura 3D, ispezioni industriali e fotogrammetria. Certificazioni ENAC e esperienza con droni DJI Enterprise."
        technologies={[
          { name: 'Pilotaggio Professionale', level: 90 },
          { name: 'Riprese Aeree 4K', level: 88 },
          { name: 'Fotogrammetria', level: 85 },
          { name: 'Mappatura 3D', level: 85 },
          { name: 'Ispezioni Industriali', level: 82 },
          { name: 'Post-Produzione Video', level: 80 },
          { name: 'Analisi Termografica', level: 75 },
          { name: 'GIS & Cartografia', level: 70 },
        ]}
        projects={droneProjects}
        gradientFrom="from-emerald-600"
        gradientTo="to-teal-500"
      />

      <SkillSection
        id="3d-modeling"
        title="Modellazione 3D"
        subtitle="Design e Visualizzazione Professionale"
        icon={Box}
        description="Design e modellazione 3D per visualizzazione architettonica, rendering fotorealistico, prototipazione e animazione. Competenze avanzate in Blender, texturing e lighting design."
        technologies={[
          { name: 'Blender', level: 90 },
          { name: '3D Modeling', level: 88 },
          { name: 'Texturing & Materials', level: 85 },
          { name: 'Rendering Fotorealistico', level: 82 },
          { name: 'Animation & Rigging', level: 75 },
          { name: 'CAD Design', level: 70 },
          { name: '3D Printing Prep', level: 75 },
          { name: 'VR/AR Ready', level: 70 },
        ]}
        projects={modelingProjects}
        gradientFrom="from-purple-600"
        gradientTo="to-pink-500"
      />
    </>
  )
}
