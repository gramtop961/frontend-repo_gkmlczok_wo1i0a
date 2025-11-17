import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-100 via-purple-50 to-white" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full blur-3xl opacity-50 bg-purple-300" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full blur-3xl opacity-50 bg-violet-200" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 md:pt-20 md:pb-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-medium border border-purple-200">
              Built for Instagram & TikTok
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900">
              Collaborations in minutes, not weeks.
            </h1>
            <p className="mt-4 text-neutral-600 md:text-lg">
              Hikayat is the cheeky AI matchmaker for creators and brands. Smart pairing, instant story collabs & payouts, thoughtful post campaigns when they need more time.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="px-5 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-400 to-purple-700 shadow-sm hover:opacity-90 transition">Start Now</a>
              <a href="#features" className="px-5 py-3 rounded-xl font-semibold bg-white/70 border border-purple-200 hover:bg-white transition">Find brands fast</a>
            </div>
            <div className="mt-5 flex items-center gap-3 text-sm text-neutral-500">
              <div className="h-1.5 w-1.5 rounded-full bg-purple-500" /> Instant collaboration for Stories
              <div className="h-1.5 w-1.5 rounded-full bg-purple-300" /> Posts may take longer (we’ll plan it with you)
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-purple-200/60 bg-white shadow-sm">
            <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" />
          </div>
        </div>
      </div>
    </section>
  )
}
