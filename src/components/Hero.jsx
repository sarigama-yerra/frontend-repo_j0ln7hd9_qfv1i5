import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0f1f] text-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* soft gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1f]/60 via-[#0a0f1f]/40 to-[#0a0f1f]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_70%_20%,rgba(56,189,248,0.12),transparent)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 pb-24 pt-28 sm:px-8 lg:px-12 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            Portugal • Available for selected collaborations
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Fábio Valêncio
          </h1>
          <p className="mt-2 text-lg text-white/80 sm:text-xl">Senior Full-Cycle Engineer & AI Architect</p>
          <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
            I build complete AI-powered platforms — from architecture to production — including orchestration engines, developer tools, search systems and large-scale education software.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => scrollTo('projects')} className="rounded-lg bg-sky-400/90 px-5 py-3 text-sm font-semibold text-slate-900 shadow-[0_0_25px_rgba(56,189,248,0.35)] transition hover:bg-sky-300">
              View My Work
            </button>
            <button onClick={() => scrollTo('contact')} className="rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
