import { CheckCircle, Handshake, Search, Wand2 } from 'lucide-react'

export default function HowItWorks() {
  const stepsCreators = [
    { icon: Search, title: 'Tell us your vibe', desc: 'Instagram/TikTok niches, audience, your best formats.' },
    { icon: Wand2, title: 'Get instant matches', desc: 'AI finds brands that actually fit your style.' },
    { icon: Handshake, title: 'Collab & cash out', desc: 'Stories pay out fast. Posts are planned with care.' },
  ]

  const stepsBrands = [
    { icon: Search, title: 'Share your goals', desc: 'Audience, tone, budget — we keep it tidy.' },
    { icon: Wand2, title: 'See a smart plan', desc: 'AI drafts angles, hooks, and sample scripts.' },
    { icon: CheckCircle, title: 'Approve & launch', desc: 'Instant story waves, well-crafted post drops.' },
  ]

  const Step = ({ Icon, title, desc }) => (
    <div className="flex items-start gap-4 p-4 rounded-xl border border-purple-200/60 bg-white">
      <div className="h-10 w-10 rounded-lg grid place-items-center bg-gradient-to-tr from-purple-200 to-purple-400 text-purple-900">
        <Icon size={18} />
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-neutral-600">{desc}</p>
      </div>
    </div>
  )

  return (
    <section id="how" className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">How it works</h2>
        <p className="mt-2 text-neutral-600">Two flows, same energy — fast, friendly, focused.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-purple-900">For Creators</h3>
            <div className="mt-4 grid gap-3">
              {stepsCreators.map((s) => (
                <Step key={s.title} Icon={s.icon} title={s.title} desc={s.desc} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-purple-900">For Brands</h3>
            <div className="mt-4 grid gap-3">
              {stepsBrands.map((s) => (
                <Step key={s.title} Icon={s.icon} title={s.title} desc={s.desc} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
