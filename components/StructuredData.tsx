'use client'

export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Riccardo Terzaghi',
    url: 'https://riccardoterzaghi.com',
    image: 'https://riccardoterzaghi.com/profile.jpg',
    jobTitle: 'Cloud Engineer & Co-Founder',
    worksFor: {
      '@type': 'Organization',
      name: 'Wesync',
      url: 'https://wesync.dev',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bologna',
      addressRegion: 'Emilia Romagna',
      addressCountry: 'IT',
    },
    sameAs: [
      'https://www.linkedin.com/in/riccardoterzaghi',
      'https://github.com/riccardoterzaghi',
    ],
    knowsAbout: [
      'Cloud Computing',
      'AWS',
      'Full Stack Development',
      'Next.js',
      'React',
      'TypeScript',
      'Drone Piloting',
      '3D Modeling',
      'Blender',
      'Photogrammetry',
      'Serverless Architecture',
      'Microservices',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'University',
    },
  }

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Wesync',
    url: 'https://wesync.dev',
    founder: {
      '@type': 'Person',
      name: 'Riccardo Terzaghi',
    },
    description: 'Azienda specializzata in soluzioni cloud e sviluppo software innovativo',
  }

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Riccardo Terzaghi Portfolio',
    url: 'https://riccardoterzaghi.com',
    description: 'Portfolio professionale di Riccardo Terzaghi - Cloud Engineer, Pilota Droni e Modellazione 3D',
    author: {
      '@type': 'Person',
      name: 'Riccardo Terzaghi',
    },
    inLanguage: 'it-IT',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  )
}


