import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { FeaturedTestimonial } from '@/components/sections/FeaturedTestimonial'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Services } from '@/components/sections/Services'
import { Gallery } from '@/components/sections/Gallery'
// import { BeforeAfter } from '@/components/sections/BeforeAfter'
// Aktivér BeforeAfter når Åge sender ekte før/etter-bilder:
// 1. Fjern kommentar-linjene over og under
// 2. Bytt ut plassholderbilder i BeforeAfter.tsx
import { Testimonials } from '@/components/sections/Testimonials'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'
import { StickyMobileCta } from '@/components/sections/StickyMobileCta'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-16 sm:pb-0">
        <Hero />
        <TrustBar />
        <FeaturedTestimonial />
        <HowItWorks />
        <Services />
        <Gallery />
        {/* BeforeAfter skjult til ekte bilder er klare – fjern kommentar under: */}
        {/* <BeforeAfter /> */}
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  )
}
