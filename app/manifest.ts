import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Riccardo Terzaghi - Portfolio',
    short_name: 'RT Portfolio',
    description: 'Cloud Architect e Co-Founder di Wesync. Specializzato in architetture cloud AWS, sviluppo full stack, pilotaggio droni professionali e modellazione 3D.',
    start_url: '/',
    display: 'standalone',
    background_color: '#030712',
    theme_color: '#c0c0c0',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

