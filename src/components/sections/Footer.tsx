import Image from 'next/image'
import { Phone, MapPin, Mail } from 'lucide-react'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#1e3a5f] bg-[#0a1f3a] py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Tømrar Åge Vik"
                width={120}
                height={48}
                className="h-10 w-auto object-contain brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-sm text-[#8fa98f] leading-relaxed max-w-xs">
              Erfaren tømrer i Bergen siden 2003. Takarbeid, vinduer, bad, kledning og rehabilitering.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-[#f2efe9] mb-4">Kontakt</h3>
            <div className="flex flex-col gap-3">
              <a
                href="tel:92816022"
                className="flex items-center gap-2.5 text-sm text-[#8fa98f] hover:text-[#4da3f5] transition-colors"
              >
                <Phone className="h-4 w-4 text-[#4da3f5]" />
                928 16 022
              </a>
              <a
                href="mailto:agevik@tomrar.no"
                className="flex items-center gap-2.5 text-sm text-[#8fa98f] hover:text-[#4da3f5] transition-colors"
              >
                <Mail className="h-4 w-4 text-[#4da3f5]" />
                agevik@tomrar.no
              </a>
              <div className="flex items-start gap-2.5 text-sm text-[#8fa98f]">
                <MapPin className="h-4 w-4 text-[#4da3f5] shrink-0 mt-0.5" />
                Storeboten 40, Bergen
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-[#f2efe9] mb-4">Tjenester</h3>
            <div className="flex flex-col gap-2">
              {['Takarbeid Bergen', 'Vinduer & dører', 'Bad & våtrom', 'Kledning', 'Tilbygg', 'Vannskade'].map((s) => (
                <p key={s} className="text-sm text-[#8fa98f]">{s}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-[#1e3a5f] pt-6 flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between">
          <p className="text-xs text-[#8fa98f]">
            © {year} Åge Vik Tømrer · Bergen
          </p>
          <p className="text-xs text-[#8fa98f]">
            Drevet siden 2003
          </p>
        </div>
      </div>
    </footer>
  )
}
