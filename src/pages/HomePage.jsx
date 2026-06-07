import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HeroScene from '../components/HeroScene.jsx'

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target) }
        })
      },
      { threshold: 0.1 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

const slides = [
  {
    icon: 'fa-trophy',
    title: 'National Champions 2025',
    desc: 'Won Best Cyber Society at the national cybersecurity summit, competing against 30+ universities across Pakistan.',
  },
  {
    icon: 'fa-calendar-check',
    title: 'CTF Arena 2026 — Aug 15-16',
    desc: 'Our flagship event returns with web exploitation, cryptography, reverse engineering, and forensics challenges.',
  },
  {
    icon: 'fa-chalkboard-user',
    title: 'Weekly Hands-on Labs',
    desc: 'Every Saturday: practical sessions on penetration testing, malware analysis, and secure coding.',
  },
  {
    icon: 'fa-handshake',
    title: 'Industry Partners',
    desc: 'Collaborating with leading infosec firms including Offensive Security, Cisco, and local SIEM providers.',
  },
]

function InfoSlider() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setActive((a) => (a + 1) % slides.length), 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="overflow-hidden rounded-lg border-2 border-[#1e2d45] bg-[#131a2b]">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div key={i} className="min-w-full flex items-start gap-5 p-6 sm:p-8">
              <div className="w-14 h-14 rounded-lg bg-cyan-500/10 border-2 border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                <i className={`fas ${s.icon} text-xl text-cyan-400`}></i>
              </div>
              <div>
                <h3 className="text-white font-space font-bold text-lg sm:text-xl">{s.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base mt-2 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === active ? 'bg-cyan-400 w-6' : 'bg-[#1e2d45] hover:bg-cyan-500/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function HomePage() {
  const heroRef = useRef(null)
  useReveal()

  return (
    <>
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0f19] pt-16">
        <HeroScene containerRef={heroRef} />

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div data-reveal>
            <span className="inline-block px-3 sm:px-4 py-1.5 mb-6 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400 border-2 border-cyan-500/40 rounded bg-cyan-500/5">
              <span className="hidden sm:inline">University of Engineering &amp; Technology, Lahore</span>
              <span className="sm:hidden">UET Lahore</span>
            </span>
          </div>

          <h1 data-reveal className="font-space text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
            <span className="text-white">Securing </span>
            <span className="text-cyan-400">Tomorrow,</span>
            <br />
            <span className="text-white">Today.</span>
          </h1>

          <p data-reveal className="mt-6 text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Empowering the next generation of cybersecurity professionals through hands-on workshops, CTF competitions, and industry collaboration.
          </p>

          <div data-reveal className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 font-bold text-black bg-cyan-500 rounded hover:bg-cyan-400 transition-colors tracking-wide text-sm sm:text-base"
            >
              Join Society
            </Link>
            <Link
              to="/events"
              className="px-8 py-3.5 font-bold text-cyan-400 border-2 border-cyan-500/50 rounded hover:bg-cyan-500/10 transition-colors tracking-wide text-sm sm:text-base"
            >
              Upcoming Events
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-[#0b0f19] border-t border-b border-[#1e2d45]">
        <div className="max-w-7xl mx-auto flex justify-center gap-10 sm:gap-20">
          {[
            { num: '50+', label: 'Active Members' },
            { num: '10+', label: 'Workshops' },
            { num: '6', label: 'CTF Events' },
            { num: '3+', label: 'Partners' },
          ].map((s, i) => (
            <div key={s.label} data-reveal className="text-center" style={{ transitionDelay: `${i * 200}ms` }}>
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400">{s.num}</div>
              <div className="text-[10px] sm:text-xs text-gray-500 mt-1 uppercase tracking-widest font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 bg-[#0b0f19]">
        <div className="max-w-7xl mx-auto">
          <div data-reveal className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-space font-bold text-white">
              Highlights & <span className="text-cyan-400">Updates</span>
            </h2>
            <p className="mt-3 text-gray-400 max-w-xl mx-auto">
              Stay in the loop with our latest achievements, upcoming events, and weekly activities.
            </p>
          </div>

          <InfoSlider />
        </div>
      </section>

      <section className="py-20 px-4 bg-[#0b0f19] border-t border-[#1e2d45]">
        <div className="max-w-7xl mx-auto text-center">
          <div data-reveal>
            <h2 className="text-3xl sm:text-4xl font-space font-bold text-white">
              Why Join <span className="text-cyan-400">CSS UET</span>?
            </h2>
            <p className="mt-3 text-gray-400 max-w-xl mx-auto">
              What you gain as part of the Cyber Security Society at UET Lahore.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              { icon: 'fa-flag', title: 'Hands-on CTFs', desc: 'Compete in inter-university Capture The Flag challenges and sharpen your offensive & defensive skills.' },
              { icon: faUsers, title: 'Workshops & Talks', desc: 'Learn from industry experts through monthly workshops on ethical hacking, cryptography, and network security.' },
              { icon: 'fa-handshake', title: 'Career Growth', desc: 'Connect with top infosec firms, gain internship opportunities, and build your professional network.' },
            ].map((f, i) => (
              <div key={f.title} data-reveal className="p-8 bg-[#131a2b] border-2 border-[#1e2d45] rounded-lg text-left hover:border-cyan-500/40 transition-colors" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="w-12 h-12 rounded bg-cyan-500/10 border-2 border-cyan-500/30 flex items-center justify-center mb-5">
                  <i className={`fas ${f.icon} text-lg text-cyan-400`}></i>
                </div>
                <h3 className="text-white font-space font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

const faUsers = 'fa-users'
