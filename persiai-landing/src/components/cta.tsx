import { GlowBorderCard } from "@/components/ui/glow-border-card"
import AnimatedButton from "@/components/ui/animated-button"

export function CTA() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#050508]">
      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
        <GlowBorderCard
          colorPreset="aurora"
          width="100%"
          aspectRatio="auto"
          borderRadius="1.5rem"
          borderWidth="2px"
          blurAmount="1em"
          inset="-2px"
          className="p-10 md:p-16"
        >
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Ready to Automate?
            </h2>
            <p className="mt-4 text-zinc-400 text-lg max-w-md">
              Free 30-minute consultation. We'll map your workflow and show you exactly where AI saves you time and money.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/40791189585">
                <AnimatedButton className="px-8 py-3">
                  Message on WhatsApp
                </AnimatedButton>
              </a>
              <a
                href="mailto:hello@persiai.tech"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-zinc-700 text-white font-medium text-sm hover:border-zinc-500 transition-colors"
              >
                Email Us
              </a>
            </div>
            <p className="mt-6 text-sm text-zinc-600">hello@persiai.tech</p>
          </div>
        </GlowBorderCard>
      </div>
    </section>
  )
}
