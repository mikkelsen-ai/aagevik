'use client'

import { useState, useEffect } from 'react'
import { Phone } from 'lucide-react'

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 sm:hidden transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a
        href="tel:92816022"
        className="flex items-center justify-center gap-2.5 w-full bg-[#c28009] hover:bg-[#9e6807] active:bg-[#7d5306] py-4 text-white font-semibold text-base transition-colors shadow-[0_-4px_20px_rgba(194,128,9,0.4)]"
      >
        <Phone className="h-5 w-5" />
        Ring 928 16 022 – gratis befaring
      </a>
    </div>
  )
}
