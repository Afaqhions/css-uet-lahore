import { useEffect, useRef } from 'react'

const timeline = [
  { year: '2021', title: 'Foundation', desc: 'Cyber Security Society established at UET Lahore with 15 founding members.' },
  { year: '2022', title: 'First CTF', desc: 'Organized the first inter-university Capture The Flag competition with 200+ participants.' },
  { year: '2023', title: 'Workshop Series', desc: 'Launched monthly workshops on ethical hacking, cryptography, and network security.' },
  { year: '2024', title: 'National Recognition', desc: 'Won Best Cyber Society award at national cybersecurity summit.' },
  { year: '2025', title: 'Industry Partnerships', desc: 'Collaborated with leading infosec firms for internship and training programs.' },
]

const coreValues = [
  { icon: 'fa-shield-halved', title: 'Integrity', desc: 'Upholding the highest ethical standards in cybersecurity practices and research.' },
  { icon: 'fa-eye', title: 'Vigilance', desc: 'Staying ahead of emerging threats through continuous learning and awareness.' },
  { icon: 'fa-lightbulb', title: 'Innovation', desc: 'Fostering creative solutions to complex security challenges.' },
]

const coreBody = [
  { name: 'Dr. Usman Ahmad', role: 'Patron / Faculty Advisor', bio: 'Guiding the society with academic leadership and cybersecurity research expertise.' },
  { name: 'Saad Ali Khan', role: 'President', bio: 'Leading the society vision, strategy, and overall operations for the academic year.' },
  { name: 'Fatima Zafar', role: 'Vice President', bio: 'Coordinating internal affairs, deputy leadership, and member engagement initiatives.' },
]

const techTeam = [
  { name: 'Hammad Raza', role: 'Technical Lead', bio: 'Overseeing workshops, CTF challenges, and the technical roadmap of the society.' },
  { name: 'Abdullah Naeem', role: 'Cyber Security Analyst', bio: 'Leading vulnerability research, security assessments, and lab setup for training sessions.' },
  { name: 'Mahnoor Sheikh', role: 'CTF & Labs Lead', bio: 'Designing and managing CTF challenges, hands-on labs, and technical write-ups.' },
]

const nonTechTeam = [
  { name: 'Ayesha Malik', role: 'Event Coordinator', bio: 'Planning and executing seminars, guest lectures, and flagship cyber events.' },
  { name: 'Zain Abid', role: 'Media & Outreach Head', bio: 'Managing digital presence, promotional campaigns, and external partnerships.' },
  { name: 'Rameen Akhtar', role: 'Content & Communications', bio: 'Creating technical content, newsletters, and managing internal communications.' },
  { name: 'Hamza Tariq', role: 'Finance & Logistics', bio: 'Handling budgeting, sponsorships, and operational logistics for all society events.' },
]

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

function TiltCard({ children }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const el = ref.current; if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(600px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`
  }
  const onLeave = () => { if (ref.current) ref.current.style.transform = '' }
  return <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className="transition-transform duration-200 ease-out">{children}</div>
}

function TeamGrid({ members }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {members.map((m) => (
        <TiltCard key={m.name}>
          <div className="p-6 bg-[#131a2b] border-2 border-[#1e2d45] rounded hover:border-cyan-500/30 transition-colors h-full">
            <div className="w-14 h-14 rounded bg-cyan-500/10 border-2 border-cyan-500/30 flex items-center justify-center mb-4">
              <i className="fas fa-user-shield text-xl text-cyan-400"></i>
            </div>
            <h4 className="text-white font-space font-bold text-lg">{m.name}</h4>
            <span className="inline-block mt-2 px-3 py-0.5 text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 rounded">{m.role}</span>
            <p className="text-gray-400 text-sm mt-3 leading-relaxed">{m.bio}</p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors"><i className="fab fa-linkedin text-lg"></i></a>
              <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors"><i className="fab fa-github text-lg"></i></a>
            </div>
          </div>
        </TiltCard>
      ))}
    </div>
  )
}

export default function AboutPage() {
  useReveal()

  return (
    <div className="pt-16 bg-[#0b0f19] min-h-screen">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div data-reveal className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400">About Us</span>
            <h1 className="text-4xl sm:text-5xl font-space font-bold text-white mt-3">
              Our <span className="text-cyan-400">Mission</span>
            </h1>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Cultivating a community of ethical hackers and cybersecurity enthusiasts at UET Lahore.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {[
              { icon: 'fa-bullseye', title: 'Our Mission', desc: 'To cultivate a community of ethical hackers and cybersecurity enthusiasts at UET Lahore, equipped with cutting-edge knowledge, practical skills, and a strong sense of digital responsibility.' },
              { icon: 'fa-binoculars', title: 'Our Vision', desc: 'A digitally resilient Pakistan where every student is empowered with cybersecurity awareness and skills to protect our digital future.' },
            ].map((item, i) => (
              <div key={item.title} data-reveal className="p-8 bg-[#131a2b] border-2 border-[#1e2d45] rounded hover:border-cyan-500/30 transition-colors" style={{ transitionDelay: `${i * 200}ms` }}>
                <div className="w-12 h-12 rounded bg-cyan-500/10 border-2 border-cyan-500/30 flex items-center justify-center mb-5">
                  <i className={`fas ${item.icon} text-lg text-cyan-400`}></i>
                </div>
                <h3 className="text-white font-space font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div data-reveal className="mb-20">
            <h3 className="text-center text-2xl font-space font-bold text-white mb-12">
              Our <span className="text-cyan-400">Journey</span>
            </h3>
            <div className="max-w-3xl mx-auto">
              {timeline.map((e) => (
                <div key={e.year} className="relative flex items-start gap-5 pb-8 pl-8 border-l-2 border-[#1e2d45] last:pb-0">
                  <div className="absolute left-[-9px] w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#0b0f19]"></div>
                  <div className="pt-0.5">
                    <span className="text-cyan-400 font-bold font-space text-lg">{e.year}</span>
                    <h4 className="text-white font-semibold mt-0.5">{e.title}</h4>
                    <p className="text-gray-400 text-sm mt-1">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-20">
            {coreValues.map((v, i) => (
              <div key={v.title} data-reveal className="p-8 bg-[#131a2b] border-2 border-[#1e2d45] rounded text-center hover:border-cyan-500/30 transition-colors" style={{ transitionDelay: `${i * 200}ms` }}>
                <div className="w-14 h-14 mx-auto mb-4 rounded bg-cyan-500/10 border-2 border-cyan-500/30 flex items-center justify-center">
                  <i className={`fas ${v.icon} text-xl text-cyan-400`}></i>
                </div>
                <h4 className="text-white font-space font-bold text-lg mb-2">{v.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          <div data-reveal className="mb-16">
            <h3 className="text-center text-2xl font-space font-bold text-white mb-3">
              <span className="text-cyan-400">Core Body</span>
            </h3>
            <p className="text-center text-gray-500 text-sm mb-10 max-w-lg mx-auto">
              The leadership team driving the society's vision and strategic direction.
            </p>
            <TeamGrid members={coreBody} />
          </div>

          <div data-reveal className="mb-16">
            <h3 className="text-center text-2xl font-space font-bold text-white mb-3">
              Executive Body — <span className="text-cyan-400">Tech Teams</span>
            </h3>
            <p className="text-center text-gray-500 text-sm mb-10 max-w-lg mx-auto">
              The technical backbone — CTFs, labs, workshops, and security research.
            </p>
            <TeamGrid members={techTeam} />
          </div>

          <div data-reveal>
            <h3 className="text-center text-2xl font-space font-bold text-white mb-3">
              Executive Body — <span className="text-cyan-400">Non-Tech Teams</span>
            </h3>
            <p className="text-center text-gray-500 text-sm mb-10 max-w-lg mx-auto">
              Outreach, events, content, finance — the engine behind our community.
            </p>
            <TeamGrid members={nonTechTeam} />
          </div>
        </div>
      </section>
    </div>
  )
}
