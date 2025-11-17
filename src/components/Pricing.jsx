import { Check } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$0',
      period: 'forever',
      cta: 'Start Now',
      features: [
        'AI matching (lite)',
        'Apply to 5 collabs / month',
        'Instant story payouts',
      ],
    },
    {
      name: 'Pro',
      highlight: true,
      price: '$29',
      period: 'month',
      cta: 'Find brands fast',
      features: [
        'AI matching (full)',
        'Unlimited collab applications',
        'AI strategy + creator companion',
        'Priority support',
      ],
    },
    {
      name: 'Scale',
      price: '$99',
      period: 'month',
      cta: 'Talk to us',
      features: [
        'Team seats',
        'Advanced analytics',
        'Custom workflow & approvals',
      ],
    },
  ]

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">Simple pricing</h2>
          <p className="mt-2 text-neutral-600">Stories pay fast. Posts get love. Pick your pace.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`p-6 rounded-2xl border bg-white shadow-sm ${p.highlight ? 'border-purple-500 ring-2 ring-purple-200' : 'border-purple-200/60'}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="font-semibold">{p.name}</h3>
                {p.highlight && <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-700">Popular</span>}
              </div>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-3xl font-bold">{p.price}</span>
                <span className="text-sm text-neutral-500">/{p.period}</span>
              </div>
              <ul className="mt-4 grid gap-2 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2"><Check className="text-purple-600" size={16} /> <span>{f}</span></li>
                ))}
              </ul>
              <a href="#cta" className={`mt-6 inline-block w-full text-center px-4 py-2 rounded-xl font-semibold ${p.highlight ? 'bg-gradient-to-r from-purple-400 to-purple-700 text-white' : 'border border-purple-200 hover:bg-purple-50'}`}>{p.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
