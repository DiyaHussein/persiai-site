import { useEffect, useRef, useCallback } from "react"
import { gsap } from "gsap"
import AnimatedButton from "@/components/ui/animated-button"
import heroBg from "@/assets/hero-bg.png"

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const init = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const particles: { x: number; y: number; vx: number; vy: number; r: number; o: number }[] = []
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4 - 0.2,
        r: Math.random() * 1.5 + 0.5,
        o: Math.random() * 0.5 + 0.2,
      })
    }

    let animId: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201,169,97,${p.o})`
        ctx.fill()
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  useEffect(() => { init() }, [init])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const trustRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    // Background ken burns
    gsap.fromTo(bgRef.current, { scale: 1.15 }, { scale: 1, duration: 3, ease: "power2.out" })

    // Text reveal
    tl.fromTo(titleRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 0.3)
      .fromTo(subRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.6)
      .fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.9)
      .fromTo(trustRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 }, 1.2)
  }, [])

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#080c14]">
      {/* Ken Burns background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#080c14]/50 via-transparent to-[#080c14]/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080c14]/60 via-transparent to-transparent" />

      {/* Floating gold particles */}
      <ParticleCanvas />

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-8 opacity-60">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a961] animate-pulse" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#6b7280] font-medium">
              AI Automation Agency
            </span>
          </div>

          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white leading-[0.92]"
          >
            Systems that
            <br />
            <span className="text-[#c9a961]">never sleep.</span>
          </h1>

          <p ref={subRef} className="mt-6 text-lg text-[#8b92a0] max-w-md leading-relaxed">
            WhatsApp agents, workflow engines, AI systems — built to run in the dark so your business never stops.
          </p>

          <div ref={ctaRef} className="mt-8">
            <a href="#contact">
              <AnimatedButton className="px-8 py-3 text-base">
                Book a Consultation
              </AnimatedButton>
            </a>
          </div>

          <p ref={trustRef} className="mt-16 text-xs text-[#4b5260] tracking-wider uppercase">
            Trusted by businesses across Kuwait &amp; Romania
          </p>
        </div>
      </div>
    </section>
  )
}
