# Portfolio Riccardo Terzaghi

Portfolio professionale moderno e interattivo costruito con Next.js 15, TypeScript, Tailwind CSS e Framer Motion.

Cloud Engineer, Pilota Droni e Modellazione 3D - Co-Founder @ Wesync

## 🚀 Caratteristiche

- **Design Moderno**: Interfaccia elegante con palette grigio/argento e effetti glass morphism
- **Font Premium**: Geist by Vercel per tipografia professionale
- **Animazioni Fluide**: Microanimazioni avanzate con Framer Motion e particelle interattive
- **Portfolio Completo**: Tre aree di competenza (Cloud, Droni, 3D) con progetti dettagliati
- **Timeline Interattiva**: Esperienze lavorative con animazioni scroll-based
- **Responsive**: Ottimizzato per tutti i dispositivi (mobile-first)
- **Performance**: Ottimizzato per velocità, SEO e Core Web Vitals
- **SEO Avanzato**: Metadata completi, sitemap, robots.txt e structured data (JSON-LD)
- **PWA Ready**: Manifest e ottimizzazioni per Progressive Web App
- **Sicurezza**: Headers di sicurezza configurati (CSP, HSTS, X-Frame-Options)

## 🛠️ Tecnologie

- **Next.js 15** - Framework React con App Router
- **TypeScript** - Tipizzazione statica
- **Tailwind CSS** - Styling utility-first
- **Framer Motion** - Animazioni fluide
- **Geist Font** - Font premium by Vercel
- **Lucide React** - Icone moderne

## 📦 Installazione

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Build per produzione
npm run build

# Avvia in produzione
npm start
```

Apri [http://localhost:3000](http://localhost:3000) nel browser per vedere il risultato.

## 📁 Struttura Progetto

```
├── app/
│   ├── layout.tsx          # Layout principale con metadata SEO
│   ├── page.tsx            # Pagina home
│   ├── globals.css         # Stili globali e ottimizzazioni
│   ├── sitemap.ts          # Sitemap dinamica per SEO
│   └── manifest.ts         # PWA manifest
├── components/
│   ├── Navigation.tsx      # Barra di navigazione sticky
│   ├── GameHero.tsx        # Hero con particelle interattive
│   ├── About.tsx           # Sezione about con stats
│   ├── Experience.tsx      # Timeline verticale esperienze
│   ├── Skills.tsx          # Tre aree di competenza
│   ├── SkillSection.tsx    # Sezione skill con portfolio completo
│   ├── SkillTree.tsx       # Albero competenze interattivo
│   ├── FullPortfolio.tsx   # Portfolio dettagliato per area
│   ├── Certifications.tsx  # Certificazioni AWS
│   ├── Contact.tsx         # Form contatti
│   ├── Footer.tsx          # Footer con links
│   └── StructuredData.tsx  # JSON-LD structured data
└── public/
    ├── photos/             # Immagini progetti
    └── robots.txt          # Robots.txt per SEO
```

## 🎨 Personalizzazione

Modifica i contenuti nei componenti per personalizzare il portfolio:
- Informazioni personali in `GameHero.tsx` e `About.tsx`
- Esperienze in `Experience.tsx`
- Progetti in `Skills.tsx` (cloudProjects, droneProjects, modelingProjects)
- Certificazioni in `Certifications.tsx`
- Metadata SEO in `app/layout.tsx`
- Structured data in `components/StructuredData.tsx`

## 📊 Portfolio Progetti

### Cloud & Full Stack (8 progetti)
- Wesync, Savo Antincendi, Ubify
- GLM Space, Bilim Network
- Calori & Scafuri, Futuro Naturale, Otherwise Athletics

### Pilota Droni (3 progetti)
- Riprese aeree e mappatura 3D
- FPV Drone racing e acrobatico
- Riprese commerciali e documentari

### Modellazione 3D (3 progetti)
- Giochi personalizzati per bambini
- Cornice specchio infinito
- Maniglie e utensili custom made

## 🔍 SEO & Performance

- ✅ Metadata completi (Open Graph, Twitter Cards)
- ✅ Sitemap dinamica
- ✅ Robots.txt configurato
- ✅ Structured Data (JSON-LD)
- ✅ PWA Manifest
- ✅ Image optimization (AVIF, WebP)
- ✅ Security headers (HSTS, CSP, X-Frame-Options)
- ✅ Performance optimizations (lazy loading, content-visibility)
- ✅ Accessibility (reduced motion support)

## 📝 Licenza

Questo progetto è privato e personale.

## 🔗 Link

- **Repository**: [GitHub](https://github.com/richterzo/riccardo-terzaghi-portfolio)
- **Wesync**: [wesync.dev](https://wesync.dev)
