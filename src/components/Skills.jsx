import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Bot, Database, Cloud, Palette, Workflow } from 'lucide-react'

const tiles = [
  { title: 'Backend & Architecture', icon: Cpu },
  { title: 'AI & Agents', icon: Bot },
  { title: 'Vector Search', icon: Database },
  { title: 'DevOps & Infra', icon: Cloud },
  { title: 'UX & Product', icon: Palette },
  { title: 'Full-cycle Delivery', icon: Workflow },
]

const Tile = ({ title, Icon, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: i * 0.08 }}
    className="group flex items-center gap-3 rounded-2xl border border-sky-400/20 bg-white/[0.03] p-4 text-white shadow-[0_10px_30px_rgba(2,6,23,0.4)] backdrop-blur-md"
  >
    <div className="rounded-xl border border-sky-400/30 bg-sky-400/10 p-2 text-sky-300 transition group-hover:shadow-[0_0_30px_rgba(56,189,248,0.3)]">
      <Icon className="h-5 w-5" />
    </div>
    <div className="text-sm font-medium text-white/90">{title}</div>
  </motion.div>
)

const Skills = () => {
  return (
    <section id="skills" className="relative w-full bg-[#0b1326] py-20">
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Skill Matrix</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((t, i) => (
            <Tile key={t.title} title={t.title} Icon={t.icon} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
