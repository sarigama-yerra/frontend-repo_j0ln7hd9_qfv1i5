import React from 'react'

const items = [
  'FlowAI Postgres vector integration (2023)',
  'PromptAI (10k+ prompts library)',
  'Documentation frameworks',
  'Architecture templates',
  'AI agents libraries (coming soon)'
]

const OpenSource = () => {
  return (
    <section id="oss" className="relative w-full bg-[#0a0f1f] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Open-Source & Public Work</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {items.map((x) => (
            <li key={x} className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/85">{x}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default OpenSource
