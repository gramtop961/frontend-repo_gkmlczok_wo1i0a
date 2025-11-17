export default function Testimonials() {
  const quotes = [
    {
      name: 'Aisha · Fashion Creator',
      text: 'Matched with two clean skincare brands in one afternoon. Briefs were actually good. Instant story payout = chef\'s kiss.'
    },
    {
      name: 'Leo · Campaign Manager',
      text: 'Finally: fast story waves and thoughtful post content. The AI ideas are surprisingly on brand.'
    },
    {
      name: 'Mina · Beauty Creator',
      text: 'It\'s giving “organized bestie.” No chaos DMs, just offers that fit.'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">Love notes</h2>
        <p className="mt-2 text-neutral-600">A few cute receipts from creators and brands.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <div key={q.name} className="p-6 rounded-2xl border border-purple-200/60 bg-white shadow-sm">
              <p className="text-neutral-700">“{q.text}”</p>
              <p className="mt-4 text-sm text-neutral-500">{q.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
