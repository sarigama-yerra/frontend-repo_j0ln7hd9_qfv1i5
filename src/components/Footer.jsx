import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-[#080d1a] py-10 text-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="text-white/80">© {new Date().getFullYear()} Fábio Valêncio</div>
          <nav className="flex flex-wrap gap-4 text-sm text-white/70">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="https://github.com" target="_blank" className="hover:text-white">GitHub</a>
            <a href="#" className="hover:text-white">Resume PDF</a>
            <a href="#oss" className="hover:text-white">Open-source</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
