import { Sparkles, Bolt, Brain, MessageSquareHeart, Clock, BadgeCheck, Rocket, DollarSign, PlaySquare, Instagram, TikTok } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: Brain,
      title: 'AI Matchmaking',
      desc: 'We pair creators and brands with spooky-good accuracy. Niche, tone, and audience fit — nailed.'
    },
    {
      icon: Sparkles,
      title: 'AI Campaign Strategy',
      desc: 'Briefs, hooks, and content angles tailored to your vibe — in minutes.'
    },
    {
      icon: MessageSquareHeart,
      title: 'AI Companion',
      desc: 'Your cheeky sidekick for scripts, captions, and negotiations. Never pitch alone.'
    }
  ]

  return (
    <section id="features" className="relative py-16 md:py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">Why creators love Hikayat</h2>
          <p className="mt-3 text-neutral-600">Made for Instagram & TikTok — friendly, fast, and just a little cheeky.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl border border-purple-200/60 bg-white shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-xl grid place-items-center bg-gradient-to-tr from-purple-200 to-purple-400 text-purple-900">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-neutral-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-purple-200/60 bg-white shadow-sm">
            <div className="flex items-center gap-3 text-sm text-neutral-600">
              <BadgeCheck className="text-purple-600" size={16} /> Instant story collabs & payouts
            </div>
            <p className="mt-2 text-neutral-600">Story campaigns move at creator speed — match, approve, done.</p>
          </div>
          <div className="p-6 rounded-2xl border border-purple-200/60 bg-white shadow-sm">
            <div className="flex items-center gap-3 text-sm text-neutral-600">
              <Clock className="text-purple-600" size={16} /> Post campaigns take longer (worth it)
            </div>
            <p className="mt-2 text-neutral-600">We craft the concept with you so the post actually lands.</p>
          </div>
        </div>

        <div className="mt-12 p-6 rounded-2xl border border-purple-200/60 bg-white shadow-sm flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-neutral-700">
            <Instagram size={20} className="text-purple-600" />
            <TikTok size={20} className="text-purple-600" />
            <span className="text-sm">Built specifically for Instagram & TikTok workflows</span>
          </div>
          <a href="#cta" className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-400 to-purple-700 text-white text-sm font-semibold">Find brands fast</a>
        </div>
      </div>
    </section>
  )
}
