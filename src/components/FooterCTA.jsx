export default function FooterCTA() {
  return (
    <section id="cta" className="relative py-16 md:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-100/70 via-purple-50 to-white" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 md:p-10 rounded-3xl border border-purple-200/60 bg-white shadow-sm text-center">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900">Collaborations in minutes, not weeks.</h3>
          <p className="mt-2 text-neutral-600">Hop in, match up, post a story, get paid. Posts? We\'ll make them sparkle.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#" className="px-5 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-400 to-purple-700 shadow-sm hover:opacity-90 transition">Start Now</a>
            <a href="#features" className="px-5 py-3 rounded-xl font-semibold border border-purple-200 hover:bg-purple-50">Find brands fast</a>
          </div>
        </div>
      </div>
    </section>
  )
}
