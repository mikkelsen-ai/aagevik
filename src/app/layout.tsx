import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tømrar Bergen – Åge Vik | 20+ års erfaring',
  description:
    'Erfaren tømrer i Bergen siden 2003. Tak, vinduer, bad, kledning og rehabilitering. 100% anbefalt av alle kunder. Ring 928 16 022 – gratis befaring.',
  keywords: [
    'tømrer bergen',
    'takarbeid bergen',
    'baderomsrenovering bergen',
    'vinduer bergen',
    'kledning bergen',
    'tømrer',
    'åge vik',
  ],
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    url: 'https://agevik.no',
    siteName: 'Åge Vik Tømrer',
    title: 'Tømrar Bergen – Åge Vik | 20+ års erfaring',
    description:
      'Erfaren tømrer i Bergen siden 2003. 100% anbefalt av alle kunder. Ring 928 16 022 for gratis befaring.',
    images: [
      {
        url: '/bilder/480938558_1155680902930196_5186019735562947220_n.jpg',
        width: 1200,
        height: 630,
        alt: 'Åge Vik Tømrer – Bergen',
      },
    ],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://agevik.no' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://agevik.no',
  name: 'Åge Vik Tømrer',
  description:
    'Erfaren tømrer i Bergen siden 2003. Takarbeid, vinduer, bad, kledning og rehabilitering.',
  url: 'https://agevik.no',
  telephone: '+4792816022',
  email: 'agevik@tomrar.no',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Storeboten 40',
    addressLocality: 'Bergen',
    addressCountry: 'NO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 60.3913,
    longitude: 5.3221,
  },
  areaServed: {
    '@type': 'City',
    name: 'Bergen',
  },
  priceRange: '$$',
  openingHours: ['Mo-Fr 07:00-17:00'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tømrertjenester',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Takarbeid Bergen' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vinduer og dører Bergen' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Baderomsrenovering Bergen' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kledning Bergen' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tilbygg Bergen' } },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#f8f6f2] text-[#1a2b1a] font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
