import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Docod.ai',
    subtitle: 'AI-powered developer documentation + task guidance',
    bullets: [
      'Nest.js backend',
      'Agentic workflows',
      'Context-aware task generation',
      'Semantic search',
      'Vector embeddings',
      'System design templates',
      'Guides developers inside IDE flows',
    ],
    accent: 'from-sky-400/20 to-blue-500/10',
  },
  {
    title: 'Douro.ai',
    subtitle: 'Full multi-agent orchestration platform',
    bullets: [
      'Python + agent framework',
      'Routing, memory, guardrails, cognitive modules',
      'Multi-tenant architecture',
      'SOC2/GDPR-oriented design',
      'Integrates with LLMs, APIs, internal tools',
      'Observability layer for AI pipelines',
    ],
    accent: 'from-indigo-400/20 to-purple-500/10',
  },
  {
    title: 'Buscr',
    subtitle: 'AI-powered search engine',
    bullets: [
      'Crawling + indexing',
      'Ranking & deduplication',
      'Vector search + embeddings',
      'LLM summarization',
      'Product, price and research modes',
      'Single-person built Google-style MVP',
    ],
    accent: 'from-emerald-400/20 to-teal-500/10',
  },
  {
    title: 'Educa+',
    subtitle: 'Large-scale education platform',
    bullets: [
      'PHP system used by 50,000+ students/year',
      'Enrollment, attendance, academic records',
      'Government-level reliability',
      'Multi-school architecture',
      'To be open-sourced (2025)',
    ],
    accent: 'from-amber-400/20 to-orange-500/10',
  },
  {
    title: 'Codenroll.dev',
    subtitle: 'End-to-end AI-first education platform',
    bullets: [
      'Courses',
      'Subscriptions',
      'Automated newsletter',
      'LLM explanations',
      'Modern stack',
    ],
    accent: 'from-pink-400/20 to-rose-500/10',
  },
]

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-sm`}
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 transition group-hover:opacity-100`} />
    <div className="relative">
      <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-1 text-sm text-white/80">{project.subtitle}</p>
      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {project.bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/70" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
)

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-[#0a1020] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_90%_10%,rgba(37,99,235,0.12),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Featured Projects</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
