export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#050507]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-600">© 2026 Persi AI. All rights reserved.</p>
        <div className="flex gap-6 text-sm text-zinc-600">
          <a href="#" className="hover:text-zinc-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  )
}
