import Image from 'next/image'
import { Phone, ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image – Åge med hammer, fjord og logo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bilder/aage-hoved.jpg"
          alt="Åge Vik – tømrer i Bergen, med hammer og fjordutsikt"
          fill
          priority
          className="object-cover object-right-top"
          sizes="100vw"
        />
        {/* Strong left overlay to mask embedded photo text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c3d1d] via-[#1c3d1d]/80 to-[#1c3d1d]/25" />
        {/* Strong bottom overlay to mask "Kvalitet fra begynnelse til slutt" text */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#edf5ed] via-[#1c3d1d]/60 to-transparent" />
      </div>

      {/* Grain texture */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content – aligned left so Åge is visible on right */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-xl">
          {/* Badge */}
          <div
            className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-[#4da3f5]/40 bg-[#1e6ec8]/30 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm shadow-[0_0_20px_rgba(30,110,200,0.3)]"
            style={{ animation: 'fadeUp 0.5s ease forwards', opacity: 0 }}
          >
            <span>⭐⭐⭐⭐⭐</span>
            <span>100% anbefalt av alle kunder</span>
          </div>

          {/* H1 */}
          <h1
            className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            style={{ animation: 'fadeUp 0.5s ease 0.1s forwards', opacity: 0 }}
          >
            Kvalitet fra{' '}
            <span className="bg-gradient-to-r from-[#4da3f5] to-[#1e6ec8] bg-clip-text text-transparent">
              begynnelse til slutt
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="mt-5 text-lg text-white/75 sm:text-xl leading-relaxed"
            style={{ animation: 'fadeUp 0.5s ease 0.2s forwards', opacity: 0 }}
          >
            Erfaren tømrer i Bergen · 20+ år · Lokalt eiet
          </p>

          {/* CTAs */}
          <div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ animation: 'fadeUp 0.5s ease 0.3s forwards', opacity: 0 }}
          >
            <a
              href="tel:92816022"
              className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#1e6ec8] hover:bg-[#185db0] active:scale-95 px-7 py-3.5 text-base font-semibold text-white transition-all duration-200 shadow-[0_4px_20px_rgba(30,110,200,0.5)] hover:shadow-[0_6px_28px_rgba(30,110,200,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4da3f5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1c3d1d]"
            >
              <Phone className="h-5 w-5" />
              Ring 928 16 022
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-7 py-3.5 text-base font-semibold text-white hover:bg-white/10 hover:border-white/50 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1c3d1d]"
            >
              Få gratis befaring
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Micro-copy */}
          <p
            className="mt-4 text-sm text-white/50"
            style={{ animation: 'fadeUp 0.5s ease 0.4s forwards', opacity: 0 }}
          >
            Svarer innen 24 timer · Ingen binding
          </p>
        </div>
      </div>
    </section>
  )
}
