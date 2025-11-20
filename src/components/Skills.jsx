import React from 'react'

const groups = [
  {
    title: 'Backend & Architecture',
    items: ['NodeJS, TypeScript, NestJS', 'Postgres, Redis, pgvector', 'Microservices, event-driven', 'Domain-driven design', 'Clean architecture'],
  },
  {
    title: 'AI & Agent Systems',
    items: ['LLM orchestration', 'Embeddings & vector search', 'RAG pipelines', 'Autonomous agents', 'Agent graphs, routing, guardrails, memory'],
  },
  {
    title: 'Product & Full-Cycle Delivery',
    items: ['UX flows', 'IA documentation', 'System design', 'CI/CD', 'Cloud infra', 'Testing & observability'],
  },
  {
    title: 'Frontend',
    items: ['Next.js', 'React', 'Tailwind', 'Figma-ready workflows'],
  },
]

const SkillBlock = ({ title, items }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
    <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
    <ul className="mt-4 space-y-2 text-sm text-white/80">
      {items.map((i) => (
        <li key={i} className="flex gap-2">
          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/70" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  </div>
)

const Skills = () => {
  return (
    <section id="skills" className="relative w-full bg-[#0b1326] py-20">
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Skill Matrix</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <SkillBlock key={g.title} title={g.title} items={g.items} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
