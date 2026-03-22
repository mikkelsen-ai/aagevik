import Image from 'next/image'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

export function FeaturedTestimonial() {
  return (
    <section className="py-12 sm:py-16 bg-[#f8f6f2]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="relative rounded-2xl border border-[#cce0cc] bg-white shadow-[var(--shadow-card)] overflow-hidden">
            <div className="flex flex-col sm:flex-row">
              {/* Quote side */}
              <div className="flex flex-col justify-center p-6 sm:p-8 sm:w-3/5">
                {/* Decorative line */}
                <div className="mb-4 h-px w-16 bg-gradient-to-r from-[#2d6b2e]/40 to-transparent" />

                {/* Stars */}
                <div className="mb-3 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-[#1e6ec8]" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote mark */}
                <div className="mb-2 font-display text-4xl leading-none text-[#1e6ec8]/20 select-none">"</div>

                <blockquote className="font-display text-base sm:text-lg font-semibold text-[#1a2b1a] leading-relaxed">
                  Åge Vik og medarbeidere har gjort en strålende jobb med å skifte tak på huset mitt.
                  De jobber raskt og fulgte avtalt tidsskjema og prisoverslag.
                </blockquote>

                <div className="mt-4 flex items-center gap-3">
                  <div>
                    <p className="text-sm font-semibold text-[#1a2b1a]">Siv Stoldal</p>
                    <p className="text-xs text-[#5a6e5a]">Bergen, 2025 · Takskifte</p>
                  </div>
                </div>

                <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-[#1e6ec8]/20 bg-[#1e6ec8]/8 px-3 py-1 text-xs font-medium text-[#1e6ec8] self-start">
                  Kan varmt anbefales!
                </div>
              </div>

              {/* Image side */}
              <div className="relative sm:w-2/5 h-48 sm:h-auto">
                <Image
                  src="/bilder/taket.jpg"
                  alt="Ferdig takarbeid utført av Åge Vik"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent sm:bg-gradient-to-l sm:from-black/20 sm:to-transparent" />
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
