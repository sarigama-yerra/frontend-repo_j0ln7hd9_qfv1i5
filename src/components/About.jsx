import React from 'react'
import { Brain, Boxes, CloudCog, LayoutGrid, Network } from 'lucide-react'

const Chip = ({ icon: Icon, label }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs text-slate-200">
    <Icon className="h-3.5 w-3.5 text-sky-300" />
    <span>{label}</span>
  </div>
)

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#0b1224] py-20 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_10%,rgba(56,189,248,0.08),transparent)]" />
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">About Me</h2>
            <p className="mt-4 text-slate-300">
              I’m a Senior Full-Cycle Engineer with strong experience in backend architecture, AI integration, autonomous agents and product development.
              I built <strong>Docod.ai</strong> (AI-guided documentation & developer workflows), <strong>Douro.ai</strong> (agent orchestration platform), and <strong>Buscr</strong> (AI-powered search engine with ranking, crawling, vector search and summarization).
            </p>
            <p className="mt-4 text-slate-300">
              I also developed <strong>Educa+</strong>, a platform used by more than 50,000 public school students every year, and contributed to open-source projects including the first Postgres vector integration for FlowAI (2023).
            </p>
            <p className="mt-4 text-slate-300">
              I enjoy creating complete products from scratch — backend, frontend, AI, infra, UX and documentation — always prioritizing clarity, scalability and developer experience.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <Chip icon={Boxes} label="Backend (Node/Nest)" />
              <Chip icon={Brain} label="AI & Agents" />
              <Chip icon={Network} label="Vector search" />
              <Chip icon={CloudCog} label="DevOps / Cloud" />
              <Chip icon={LayoutGrid} label="Product & UX" />
              <Chip icon={Network} label="Systems Architecture" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
