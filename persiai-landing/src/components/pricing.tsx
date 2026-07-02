const plans = [
  {
    name: "SMB Starter",
    price: "150 KD",
    period: "/mo",
    desc: "Small businesses ready to automate.",
    features: ["1 WhatsApp chatbot", "Lead capture & qualification", "Email/SMS automation", "Monthly report", "WhatsApp support"],
  },
  {
    name: "SMB Growth",
    price: "350 KD",
    period: "/mo",
    desc: "Growing businesses — full-stack automation.",
    features: ["Everything in Starter", "CRM integration", "Review management", "AI analytics dashboard", "Social media automation", "Priority support"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Complex operations at scale.",
    features: ["Everything in Growth", "Multi-location systems", "Inventory management", "Team workflows", "Custom integrations", "Dedicated manager"],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header — brutalist */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs tracking-[0.3em] uppercase text-[#6b7280] font-medium">
            Pricing
          </span>
          <div className="flex-1 h-px bg-[#1a2035]" />
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-[#e6e8ed] mb-4">
          Simple.<span className="accent-underline">Transparent.</span>
        </h2>
        <p className="text-[#6b7280] text-lg mb-16 max-w-xl">
          One-time setup + monthly maintenance. No hidden fees, no surprises.
        </p>

        {/* Cards — flat, minimal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a2035] max-w-5xl">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`p-8 bg-[#0d1220] ${
                p.featured ? 'ring-1 ring-[#c9a961]/30 relative' : ''
              }`}
            >
              {p.featured && (
                <div className="absolute -top-px left-8 right-8 h-px bg-[#c9a961]" />
              )}

              <p className="text-xs tracking-[0.2em] uppercase text-[#6b7280] font-medium mb-4">
                {p.name}
              </p>

              <div className="mb-2">
                <span className="text-4xl font-extrabold text-[#e6e8ed] tracking-tighter">
                  {p.price}
                </span>
                {p.period && (
                  <span className="text-[#6b7280] text-sm ml-1">{p.period}</span>
                )}
              </div>

              <p className="text-[#6b7280] text-sm mb-8">{p.desc}</p>

              <ul className="space-y-3 mb-8">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-[#9ca3af]">
                    <span className="text-[#c9a961] mt-0.5 shrink-0">—</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 text-sm font-semibold transition-colors ${
                  p.featured
                    ? 'bg-[#c9a961] text-[#080c14] hover:bg-[#d4b76b]'
                    : 'border border-[#1a2035] text-[#e6e8ed] hover:border-[#c9a961]'
                }`}
              >
                {p.name === "Enterprise" ? "Talk to Us" : "Get Started"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
