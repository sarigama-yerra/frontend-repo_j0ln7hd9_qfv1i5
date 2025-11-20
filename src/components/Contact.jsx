import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-[#0a0f1f] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">Let’s build something exceptional.</h3>
              <p className="mt-2 text-white/80">Email • LinkedIn • GitHub • Calendly</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:hello@fabiovalencio.com" className="rounded-lg bg-sky-400/90 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-sky-300">Email</a>
              <a href="https://www.linkedin.com" target="_blank" className="rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">LinkedIn</a>
              <a href="https://github.com" target="_blank" className="rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">GitHub</a>
              <a href="https://calendly.com" target="_blank" className="rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">Calendly</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
