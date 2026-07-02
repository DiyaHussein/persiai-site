import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import heroBg from "@/assets/hero-bg.png"

gsap.registerPlugin(ScrollTrigger)

const steps = [
  { num: "01", title: "We Talk", desc: "Free consultation. We map your workflow, find bottlenecks, identify the highest-ROI automation opportunities." },
  { num: "02", title: "We Build", desc: "Custom AI system built and tested in your environment. WhatsApp bots, workflow engines, dashboards — whatever you need." },
  { num: "03", title: "You Scale", desc: "Your business runs smoother, faster, cheaper. Ongoing optimization and new automations as you grow." },
]

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: i * 0.15,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="how" className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-25"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-[#080c14]/88" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-20">
          <span className="text-xs tracking-[0.3em] uppercase text-[#6b7280] font-medium">Process</span>
          <div className="flex-1 h-px bg-[#1a2035]" />
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-[#e6e8ed] mb-20">
          How It <span className="text-[#c9a961]">Works</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a2035]">
          {steps.map((s, i) => (
            <div
              key={i}
              ref={(el) => { cardRefs.current[i] = el }}
              className="p-8 bg-[#0d1220]/90 backdrop-blur-sm"
            >
              <p className="text-5xl font-extrabold tracking-tighter text-[#c9a961]/20 mb-6">{s.num}</p>
              <h3 className="text-lg font-bold text-[#e6e8ed] mb-2">{s.title}</h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
