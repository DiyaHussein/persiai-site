import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import heroBg from "@/assets/hero-bg.png"

gsap.registerPlugin(ScrollTrigger)

const industries = [
  { name: "Dental & Medical", desc: "Appointment booking, patient follow-ups, prescription reminders." },
  { name: "Restaurants", desc: "Order automation, reservation management, review collection." },
  { name: "Hotels & Real Estate", desc: "Booking bots, property inquiry auto-responders, tenant management." },
  { name: "Law Firms", desc: "Client intake, document automation, case status updates." },
  { name: "Salons & Fitness", desc: "Booking systems, membership renewals, class reminders." },
  { name: "Auto & E-commerce", desc: "Inventory sync, order tracking, customer support automation." },
]

export function Industries() {
  const trackRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!trackRef.current) return
      const cards = trackRef.current.children
      const totalWidth = Array.from(cards).reduce((acc, c) => acc + (c as HTMLElement).offsetWidth + 16, 0)
      const viewWidth = window.innerWidth

      gsap.fromTo(
        trackRef.current,
        { x: 0 },
        {
          x: -(totalWidth - viewWidth + 48),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: `+=${totalWidth}`,
            scrub: 0.5,
            pin: false,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="industries" className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-25"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-[#080c14]/88" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="flex items-center gap-4 mb-20">
          <span className="text-xs tracking-[0.3em] uppercase text-[#6b7280] font-medium">Industries</span>
          <div className="flex-1 h-px bg-[#1a2035]" />
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-[#e6e8ed] mb-6">
          Built for <span className="text-[#c9a961]">Your</span> Industry
        </h2>
        <p className="text-[#6b7280] text-lg max-w-xl">
          Purpose-built automations — not generic templates.
        </p>
      </div>

      {/* Horizontal scrolling track */}
      <div ref={trackRef} className="relative flex gap-4 px-6 md:px-12 will-change-transform">
        {industries.map((ind, i) => (
          <div
            key={i}
            className="shrink-0 w-64 md:w-80 p-6 border border-[#1a2035] bg-[#0d1220]/80 backdrop-blur-sm"
          >
            <div className="w-1 h-6 bg-[#c9a961] mb-4" />
            <h3 className="text-base font-bold text-[#e6e8ed] mb-2">{ind.name}</h3>
            <p className="text-sm text-[#6b7280] leading-relaxed">{ind.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
