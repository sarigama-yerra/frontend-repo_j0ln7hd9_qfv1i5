import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const projects = [
  {
    title: 'Docod.ai',
    subtitle: 'AI-powered developer documentation + task guidance',
    tech: ['TS', 'Nest', 'Postgres', 'pgvector', 'LLM', 'RAG'],
    bullets: [
      'Agentic workflows and context-aware tasks',
      'Semantic search with embeddings',
      'System design templates and DX focus',
    ],
    accent: 'from-sky-400/15 to-blue-500/10',
  },
  {
    title: 'Douro.ai',
    subtitle: 'Multi-agent orchestration platform',
    tech: ['Python', 'Agents', 'Graph', 'Redis', 'LLM', 'Observability'],
    bullets: [
      'Graph-based routing, memory, guardrails',
      'Multi-tenant architecture and audit trail',
      'Reliable execution at scale',
    ],
    accent: 'from-indigo-400/15 to-purple-500/10',
  },
  {
    title: 'Buscr',
    subtitle: 'AI-powered search engine',
    tech: ['Crawler', 'Ranking', 'Vector', 'LLM', 'Summaries'],
    bullets: [
      'Crawling, indexing, deduplication',
      'Vector search with LLM summarization',
      'Research, product, and price modes',
    ],
    accent: 'from-emerald-400/15 to-teal-500/10',
  },
  {
    title: 'Educa+',
    subtitle: 'Large-scale education platform',
    tech: ['PHP', 'Postgres', 'Infra', 'SaaS'],
    bullets: [
      'Used by 50,000+ students/year',
      'Enrollment, attendance, academic records',
      'Government-level reliability',
    ],
    accent: 'from-amber-400/15 to-orange-500/10',
  },
  {
    title: 'Codenroll.dev',
    subtitle: 'AI-first education platform',
    tech: ['Next', 'Stripe', 'LLM', 'Automations'],
    bullets: [
      'Courses, subscriptions, newsletter',
      'LLM explanations and tutoring',
      'Modern, scalable stack',
    ],
    accent: 'from-pink-400/15 to-rose-500/10',
  },
]

const ProjectCard = ({ project, index, onOpen }) => (
  <motion.button
    type="button"
    onClick={() => onOpen(project)}
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-left text-white backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)]`}
  >
    <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 transition group-hover:opacity-100`} />
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(200px_80px_at_20%_10%,rgba(255,255,255,0.06),transparent)] opacity-0 transition group-hover:opacity-100" />
    <div className="relative">
      <h3 className="text-xl font-semibold tracking-tight transition group-hover:-translate-y-0.5">{project.title}</h3>
      <p className="mt-1 text-sm text-white/80">{project.subtitle}</p>
      <div className="mt-4 flex flex-wrap gap-2 opacity-0 transition group-hover:opacity-100">
        {project.tech.map((t) => (
          <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80">{t}</span>
        ))}
      </div>
    </div>
    <div className="relative mt-4">
      <ul className="space-y-2 text-sm text-white/80">
        {project.bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/70" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.button>
)

const Modal = ({ open, onClose, project }) => (
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="relative mx-4 w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b1020] p-0 shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <div>
              <div className="text-sm text-white/60">Case Study</div>
              <h3 className="text-xl font-semibold text-white">{project?.title}</h3>
            </div>
            <button onClick={onClose} className="rounded-md p-2 text-white/70 hover:bg-white/10"><X className="h-5 w-5" /></button>
          </div>
          <div className="grid gap-6 p-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold">Architecture</h4>
              <div className="mt-3 rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-4 text-sm text-white/80">
                • Client → API Gateway → Services → DBs
                <br />
                • Agent Graph: Router → Tools → Memory → Guardrails
                <br />
                • Observability: traces, events, metrics
              </div>
              <h4 className="mt-6 font-semibold">Tech Decisions</h4>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                <li>— Typed APIs, modular domains</li>
                <li>— Event-driven pipelines</li>
                <li>— Vector search for semantic retrieval</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Code Insight</h4>
              <pre className="mt-3 max-h-80 overflow-auto rounded-lg border border-white/10 bg-[#0e1426] p-4 text-[12px] leading-relaxed text-sky-100"><code>{`// Pseudo example
router.post('/search', async (req, res) => {
  const q = embed(req.body.query)
  const results = await vectorIndex.similarity(q, { topK: 8 })
  return res.json(rerank(results))
})`}</code></pre>
              <h4 className="mt-6 font-semibold">Impact</h4>
              <div className="mt-3 grid grid-cols-3 gap-3 text-center text-white/90">
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="text-2xl font-bold">50k+</div>
                  <div className="text-xs text-white/60">students</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="text-2xl font-bold">-40%</div>
                  <div className="text-xs text-white/60">onboarding</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="text-2xl font-bold">SaaS</div>
                  <div className="text-xs text-white/60">end-to-end</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
)

const Projects = () => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  const onOpen = (p) => {
    setSelected(p)
    setOpen(true)
  }

  return (
    <section id="projects" className="relative w-full bg-[#0a1020] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_90%_10%,rgba(37,99,235,0.12),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Featured Projects</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} onOpen={onOpen} />
          ))}
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} project={selected} />
    </section>
  )
}

export default Projects
