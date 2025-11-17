import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-violet-200 bg-gradient-to-r from-violet-600 via-violet-700 to-violet-800 text-white">
          <div className="absolute -left-20 -top-10 h-40 w-40 bg-violet-400/30 rounded-full blur-2xl" />
          <div className="absolute -right-10 -bottom-10 h-40 w-40 bg-violet-500/30 rounded-full blur-2xl" />
          <div className="p-8 sm:p-12 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium ring-1 ring-inset ring-white/20">
                <Sparkles size={16} /> AI Matchmaking for creators
              </div>
              <h3 className="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight">Ready to find your next brand in minutes?</h3>
              <p className="mt-2 text-violet-100/90">Connect your socials and let Hikayat do the cheeky legwork. Instagram and TikTok welcome.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-violet-800 hover:bg-violet-50 transition">
                  Collaborations in minutes
                  <ArrowRight className="ml-2" size={18} />
                </a>
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 transition">
                  Find brands fast
                </a>
              </div>
            </div>
            <div className="md:justify-self-end">
              <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-inset ring-white/20">
                <p className="text-violet-100/90 text-sm">Instant story payouts when posted. Posts require approval and are released after review.</p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-center">
                  <div className="rounded-xl bg-white text-violet-800 p-3">
                    <div className="text-2xl font-extrabold">2m</div>
                    <div className="text-xs font-medium">Avg. match time</div>
                  </div>
                  <div className="rounded-xl bg-white/10 p-3">
                    <div className="text-2xl font-extrabold">6x</div>
                    <div className="text-xs font-medium">Faster brief setup</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
