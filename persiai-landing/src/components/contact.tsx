import { motion } from "framer-motion"
import AnimatedButton from "@/components/ui/animated-button"
import heroBg from "@/assets/hero-bg.png"

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-[#080c14]/90" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-20">
          <span className="text-xs tracking-[0.3em] uppercase text-[#6b7280] font-medium">Contact</span>
          <div className="flex-1 h-px bg-[#1a2035]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — copy + contact methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-[#e6e8ed] leading-[1.05] mb-6">
              Let's build
              <br />
              <span className="text-[#c9a961]">something.</span>
            </h2>
            <p className="text-[#8b92a0] text-lg leading-relaxed mb-10 max-w-md">
              Free 30-minute consultation. We'll map your workflow and show you exactly where automation saves you time and money.
            </p>

            <div className="space-y-5">
              <a href="mailto:hello@persiai.tech" className="flex items-center gap-4 group">
                <div className="w-10 h-10 border border-[#1a2035] flex items-center justify-center group-hover:border-[#c9a961] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a961" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#e6e8ed]">Email</p>
                  <p className="text-sm text-[#6b7280]">hello@persiai.tech</p>
                </div>
              </a>
              <a href="https://wa.me/40791189585" className="flex items-center gap-4 group">
                <div className="w-10 h-10 border border-[#1a2035] flex items-center justify-center group-hover:border-[#c9a961] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a961" strokeWidth="2">
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Zm0 0a5 5 0 0 0 5 5" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#e6e8ed]">WhatsApp</p>
                  <p className="text-sm text-[#6b7280]">+40 791 189 585</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-5">
              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-[#6b7280] mb-2">Name</label>
                <input
                  type="text" name="name" required
                  className="w-full px-4 py-3 bg-[#0d1220] border border-[#1a2035] text-[#e6e8ed] text-sm focus:border-[#c9a961] focus:outline-none transition-colors placeholder:text-[#3a4050]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-[#6b7280] mb-2">Email</label>
                <input
                  type="email" name="email" required
                  className="w-full px-4 py-3 bg-[#0d1220] border border-[#1a2035] text-[#e6e8ed] text-sm focus:border-[#c9a961] focus:outline-none transition-colors placeholder:text-[#3a4050]"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-[#6b7280] mb-2">Phone</label>
                <input
                  type="tel" name="phone"
                  className="w-full px-4 py-3 bg-[#0d1220] border border-[#1a2035] text-[#e6e8ed] text-sm focus:border-[#c9a961] focus:outline-none transition-colors placeholder:text-[#3a4050]"
                  placeholder="+40 7XX XXX XXX"
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-[#6b7280] mb-2">What do you need automated?</label>
                <textarea
                  name="message" rows={4} required
                  className="w-full px-4 py-3 bg-[#0d1220] border border-[#1a2035] text-[#e6e8ed] text-sm focus:border-[#c9a961] focus:outline-none transition-colors resize-none placeholder:text-[#3a4050]"
                  placeholder="Tell us about your business and what you want to automate..."
                />
              </div>
              <AnimatedButton className="w-full py-3 text-base" type="submit">
                Send Inquiry
              </AnimatedButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
