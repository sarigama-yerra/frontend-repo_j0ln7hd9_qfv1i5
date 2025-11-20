import React from 'react'
import { motion } from 'framer-motion'

const sample = [
  {
    title: 'Docod.ai – Guided Dev Docs',
    problem: 'Teams lacked actionable, evolving documentation tied to code and tasks.',
    decisions: 'Adopted NestJS modules, introduced event-driven pipelines for doc updates, embedded vector search for semantic retrieval.',
    results: 'Reduced onboarding time by 40%, tasks auto-scaffolded from context, higher doc adoption.',
  },
  {
    title: 'Douro.ai – Agent Orchestration',
    problem: 'Complex workflows across tools required robust routing and memory.',
    decisions: 'Graph-based agent routing with guardrails, multi-tenant isolation, observability and audit trail.',
    results: 'Reliable execution at scale, faster iteration cycles for teams.',
  },
]

const CaseCard = ({ c, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: i * 0.06 }}
    className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 text-white shadow-[0_10px_30px_rgba(2,6,23,0.5)]"
  >
    <h3 className="text-lg font-semibold">{c.title}</h3>
    <div className="mt-4 grid gap-2 text-sm text-white/80">
      <div><span className="font-semibold text-white">Problem:</span> {c.problem}</div>
      <div><span className="font-semibold text-white">Technical decisions:</span> {c.decisions}</div>
      <div><span className="font-semibold text-white">Results:</span> {c.results}</div>
    </div>
  </motion.div>
)

const CaseStudies = () => {
  return (
    <section id="cases" className="relative w-full bg-[#0b1224] py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Case Studies</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {sample.map((c, i) => (
            <CaseCard key={c.title} c={c} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
