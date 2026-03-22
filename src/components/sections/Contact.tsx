'use client'

import { useState, FormEvent } from 'react'
import { Phone, Send, CheckCircle, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [service, setService] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const data = {
      name:        (form.elements.namedItem('name') as HTMLInputElement).value,
      phone:       (form.elements.namedItem('phone') as HTMLInputElement).value,
      service,
      description: (form.elements.namedItem('description') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="kontakt" className="py-20 sm:py-24 bg-[#edf5ed]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#1e6ec8]">
              Kom i gang
            </p>
            <h2 className="font-display text-3xl font-bold text-[#1a2b1a] sm:text-4xl">
              Book gratis befaring
            </h2>
            <p className="mt-3 text-[#5a6e5a] max-w-xl mx-auto">
              Fortell oss hva du trenger hjelp med. Vi er lokale i Bergen og kjenner terrenget.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Left: phone CTA + form */}
          <AnimateOnScroll>
            <div className="flex flex-col gap-6">
              {/* Big phone CTA */}
              <a
                href="tel:92816022"
                className="group flex items-center justify-between rounded-xl border border-[#1e6ec8]/30 bg-[#1e6ec8]/8 px-6 py-5 hover:bg-[#1e6ec8]/15 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1e6ec8] text-white">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs text-[#5a6e5a]">Ring oss direkte</p>
                    <p className="font-display text-xl font-bold text-[#1a2b1a]">928 16 022</p>
                  </div>
                </div>
                <span className="text-[#1e6ec8] text-sm font-medium group-hover:underline">Ring nå →</span>
              </a>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-[#cce0cc]" />
                <span className="text-xs text-[#5a6e5a]">eller send forespørsel</span>
                <div className="flex-1 h-px bg-[#cce0cc]" />
              </div>

              {/* Contact form */}
              {status === 'success' ? (
                <div className="flex flex-col items-center gap-3 rounded-xl border border-[#1e6ec8]/30 bg-white p-8 text-center">
                  <CheckCircle className="h-10 w-10 text-[#1e6ec8]" />
                  <h3 className="font-display text-xl font-bold text-[#1a2b1a]">Takk for henvendelsen!</h3>
                  <p className="text-sm text-[#5a6e5a]">
                    Vi tar kontakt innen 24 timer. Har du hast, ring oss på{' '}
                    <a href="tel:92816022" className="text-[#1e6ec8] hover:underline">928 16 022</a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="name">Navn *</Label>
                      <Input id="name" name="name" placeholder="Ola Nordmann" required />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="phone">Telefon *</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="900 00 000" required />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label>Tjeneste</Label>
                    <Select onValueChange={setService}>
                      <SelectTrigger>
                        <SelectValue placeholder="Velg type oppdrag" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tak">Takarbeid</SelectItem>
                        <SelectItem value="vinduer">Vinduer & dører</SelectItem>
                        <SelectItem value="bad">Bad & våtrom</SelectItem>
                        <SelectItem value="kledning">Kledning & utvendig</SelectItem>
                        <SelectItem value="tilbygg">Tilbygg & rehabilitering</SelectItem>
                        <SelectItem value="vannskade">Vannskadeopprydding</SelectItem>
                        <SelectItem value="annet">Annet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="description">
                      Kort om prosjektet{' '}
                      <span className="text-[#5a6e5a] font-normal">(valgfritt)</span>
                    </Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="F.eks: Skal skifte tak på enebolig ca. 150 kvm..."
                      rows={3}
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-red-600">
                      Noe gikk galt. Ring oss på{' '}
                      <a href="tel:92816022" className="underline">928 16 022</a> i stedet.
                    </p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    variant="green"
                    disabled={status === 'loading'}
                    className="w-full gap-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Sender...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send forespørsel
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-[#5a6e5a]">
                    Kontakt oss – vi gir deg svar innen 24 timer
                  </p>
                </form>
              )}
            </div>
          </AnimateOnScroll>

          {/* Right: map + contact info */}
          <AnimateOnScroll delay={1}>
            <div className="flex flex-col gap-5">
              {/* Static map */}
              <a
                href="https://maps.google.com/?q=Storeboten+40,+Bergen,+Norway"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-xl border border-[#cce0cc] aspect-video bg-white"
                aria-label="Se Storeboten 40, Bergen i Google Maps"
              >
                {/* Map visual */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1e6ec8] shadow-[0_0_30px_rgba(30,110,200,0.3)]">
                    <MapPin className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-center">
                    <p className="font-display font-bold text-[#1a2b1a]">Storeboten 40</p>
                    <p className="text-sm text-[#5a6e5a]">Bergen, Norge</p>
                  </div>
                  <span className="text-xs text-[#1e6ec8] font-medium group-hover:underline">
                    Åpne i Google Maps →
                  </span>
                </div>

                {/* Grid pattern background */}
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: 'linear-gradient(#2d6b2e 1px, transparent 1px), linear-gradient(90deg, #2d6b2e 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />
              </a>

              {/* Contact info cards */}
              <div className="rounded-xl border border-[#cce0cc] bg-white p-5 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-[#1e6ec8] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-[#5a6e5a]">Telefon</p>
                    <a href="tel:92816022" className="font-semibold text-[#1a2b1a] hover:text-[#1e6ec8] transition-colors">
                      928 16 022
                    </a>
                  </div>
                </div>
                <div className="h-px bg-[#cce0cc]" />
                <div className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-[#1e6ec8] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-xs text-[#5a6e5a]">E-post</p>
                    <a href="mailto:agevik@tomrar.no" className="font-semibold text-[#1a2b1a] hover:text-[#1e6ec8] transition-colors">
                      agevik@tomrar.no
                    </a>
                  </div>
                </div>
                <div className="h-px bg-[#cce0cc]" />
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#1e6ec8] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-[#5a6e5a]">Adresse</p>
                    <p className="font-semibold text-[#1a2b1a]">Storeboten 40, Bergen</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
