import { SpotlightNavbar } from "@/components/ui/spotlight-navbar"

const navItems = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
]

export function Nav() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4">
      <SpotlightNavbar
        items={navItems}
        defaultActiveIndex={0}
      />
    </div>
  )
}
