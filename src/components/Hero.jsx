import React, { useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import Spline from '@splinetool/react-spline'

// Subtle particle lines canvas
const Particles = () => {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf
    const DPR = window.devicePixelRatio || 1

    const resize = () => {
      canvas.width = canvas.clientWidth * DPR
      canvas.height = canvas.clientHeight * DPR
    }
    resize()
    window.addEventListener('resize', resize)

    const dots = Array.from({ length: 36 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.08 * DPR,
      vy: (Math.random() - 0.5) * 0.08 * DPR,
    }))

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.globalAlpha = 0.7
      for (let i = 0; i < dots.length; i++) {
        const a = dots[i]
        a.x += a.vx
        a.y += a.vy
        if (a.x < 0 || a.x > canvas.width) a.vx *= -1
        if (a.y < 0 || a.y > canvas.height) a.vy *= -1
        // draw dot
        ctx.fillStyle = 'rgba(56,189,248,0.6)'
        ctx.beginPath()
        ctx.arc(a.x, a.y, 1.2 * DPR, 0, Math.PI * 2)
        ctx.fill()
        // connect nearby
        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 < 12000 * DPR) {
            ctx.strokeStyle = 'rgba(56,189,248,0.08)'
            ctx.lineWidth = 1 * DPR
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(tick)
    }
    tick()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])
  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
}

const Magnetic = ({ children, strength = 20 }) => {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rx = useSpring(x, { stiffness: 300, damping: 20 })
  const ry = useSpring(y, { stiffness: 300, damping: 20 })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const dx = e.clientX - (rect.left + rect.width / 2)
      const dy = e.clientY - (rect.top + rect.height / 2)
      x.set((dx / rect.width) * strength)
      y.set((dy / rect.height) * strength)
    }
    const onLeave = () => {
      x.set(0)
      y.set(0)
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [strength, x, y])

  return (
    <motion.div ref={ref} style={{ x: rx, y: ry }}>
      {children}
    </motion.div>
  )
}

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden bg-[#070b16] text-white">
      {/* Spline background */}
      <div className="absolute inset-0 opacity-[0.85]">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient + particles overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_20%,rgba(56,189,248,0.18),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#070b16]/60 via-[#070b16]/40 to-[#070b16]" />
      <Particles />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 pb-28 pt-36 sm:px-8 lg:px-12 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            Portugal • Available for selected collaborations
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Fábio Valêncio
          </h1>
          <p className="mt-2 text-lg text-white/80 sm:text-xl">Senior Full-Cycle Engineer & AI Architect</p>
          <div className="mt-2 h-px w-24 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
          <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
            I build complete AI-powered platforms — orchestration engines, search systems, developer tools and large-scale SaaS.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Magnetic>
              <button onClick={() => scrollTo('projects')} className="rounded-lg bg-sky-400/90 px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_0_25px_rgba(56,189,248,0.35)] transition hover:bg-sky-300">
                View my work
              </button>
            </Magnetic>
            <Magnetic>
              <a href="#" className="rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Download CV
              </a>
            </Magnetic>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
