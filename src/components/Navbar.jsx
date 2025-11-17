import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-neutral-950/70 border-b border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-purple-400 via-violet-500 to-purple-700 shadow-lg grid place-items-center text-white">
              <Sparkles size={18} />
            </div>
            <span className="font-semibold text-lg tracking-tight">Hikayat</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-neutral-600 hover:text-black transition">Features</a>
            <a href="#how" className="text-neutral-600 hover:text-black transition">How it works</a>
            <a href="#pricing" className="text-neutral-600 hover:text-black transition">Pricing</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="px-4 py-2 rounded-xl border border-black/10 hover:border-black/20 transition">Log in</a>
            <a href="#cta" className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-400 to-purple-700 text-white hover:opacity-90 transition">Start Now</a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-black/10">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-2">
              <a onClick={() => setOpen(false)} href="#features" className="px-3 py-2 rounded-lg hover:bg-black/5">Features</a>
              <a onClick={() => setOpen(false)} href="#how" className="px-3 py-2 rounded-lg hover:bg-black/5">How it works</a>
              <a onClick={() => setOpen(false)} href="#pricing" className="px-3 py-2 rounded-lg hover:bg-black/5">Pricing</a>
              <div className="h-px bg-black/10 my-2" />
              <a href="#" className="px-3 py-2 rounded-lg">Log in</a>
              <a href="#cta" className="px-3 py-2 rounded-lg bg-gradient-to-r from-purple-400 to-purple-700 text-white">Start Now</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
