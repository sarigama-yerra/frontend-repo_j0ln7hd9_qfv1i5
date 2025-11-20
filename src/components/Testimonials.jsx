import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'CTO, EdTech Co.',
    quote: 'Fábio ships end-to-end systems with clarity and speed. The architecture is thoughtful, the UX polished, and the results measurable.',
  },
  {
    name: 'Founder, AI Startup',
    quote: 'From agent orchestration to product strategy, he thinks like a builder and a founder. We moved from idea to SaaS in weeks.',
  },
  {
    name: 'Engineering Manager',
    quote: 'His code reads like documentation and his documentation reads like a plan. Teams accelerate around him.',
  },
]

const Card = ({ t, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.45, delay: i * 0.05 }}
    className="min-w-[280px] flex-1 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-white backdrop-blur-md"
  >
    <div className="text-5xl leading-none text-white/20">“</div>
    <p className="mt-2 text-white/85">{t.quote}</p>
    <div className="mt-4 text-sm text-white/60">{t.name}</div>
  </motion.div>
)

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative w-full bg-[#0a0f1f] py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Testimonials</h2>
        <div className="mt-6 flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none]"><style>{`.no-scrollbar::-webkit-scrollbar{display:none}`}</style>
          {testimonials.map((t, i) => (
            <Card key={i} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
