import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(null)
  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div key={idx} className="rounded-xl border border-teal-400/20 bg-white/5 overflow-hidden">
          <button
            onClick={() => setOpen(open === idx ? null : idx)}
            className="w-full flex items-center justify-between px-4 md:px-6 py-4 text-left"
          >
            <span className="text-white font-medium">{item.q}</span>
            <ChevronDown className={`w-5 h-5 text-teal-300 transition-transform ${open === idx ? 'rotate-180' : ''}`} />
          </button>
          <div
            className={`grid transition-all duration-400 ease-in-out ${open === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
          >
            <div className="overflow-hidden px-4 md:px-6 pb-4 text-slate-300 text-sm">
              {item.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
