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
        className="flex items-center justify-center gap-2.5 w-full bg-[#4ade80] hover:bg-[#22c55e] active:bg-[#16a34a] py-4 text-green-950 font-semibold text-base transition-colors shadow-[0_-6px_24px_rgba(74,222,128,0.55),0_-2px_8px_rgba(34,197,94,0.35)]"
      >
        <Phone className="h-5 w-5" />
        Ring 928 16 022 – gratis befaring
      </a>
    </div>
  )
}
