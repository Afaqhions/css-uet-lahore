import { useEffect } from 'react'

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

export default function ContactPage() {
  useReveal()

  return (
    <div className="pt-16 bg-[#0b0f19] min-h-screen">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div data-reveal className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400">Contact</span>
            <h1 className="text-4xl sm:text-5xl font-space font-bold text-white mt-3">
              Get In <span className="text-cyan-400">Touch</span>
            </h1>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              Have a question, want to collaborate, or interested in joining? Reach out to us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div data-reveal>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1.5">Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 bg-[#131a2b] border-2 border-[#1e2d45] rounded-lg text-white placeholder-gray-600 outline-none transition-colors focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1.5">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-[#131a2b] border-2 border-[#1e2d45] rounded-lg text-white placeholder-gray-600 outline-none transition-colors focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1.5">Message</label>
                  <textarea
                    rows="5"
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 bg-[#131a2b] border-2 border-[#1e2d45] rounded-lg text-white placeholder-gray-600 outline-none transition-colors focus:border-cyan-500 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-8 py-3 font-bold text-black bg-cyan-500 rounded-lg hover:bg-cyan-400 transition-colors cursor-pointer w-full sm:w-auto"
                >
                  <i className="fas fa-paper-plane mr-2"></i> Send Message
                </button>
              </form>
            </div>

            <div data-reveal className="space-y-6">
              <div className="p-6 bg-[#131a2b] border-2 border-[#1e2d45] rounded-lg">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border-2 border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-lg text-cyan-400"></i>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Email Us</p>
                    <a href="mailto:css@uet.edu.pk" className="text-gray-400 hover:text-cyan-400 transition-colors">css@uet.edu.pk</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border-2 border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-location-dot text-lg text-cyan-400"></i>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Visit Us</p>
                    <p className="text-gray-400">UET Lahore, GT Road, Lahore, Pakistan</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-[#131a2b] border-2 border-[#1e2d45] rounded-lg">
                <p className="text-white font-semibold mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { icon: 'fa-discord', href: '#' },
                    { icon: 'fa-linkedin', href: '#' },
                    { icon: 'fa-twitter', href: '#' },
                    { icon: 'fa-github', href: '#' },
                    { icon: 'fa-instagram', href: '#' },
                  ].map((s) => (
                    <a
                      key={s.icon}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-lg bg-[#0b0f19] border-2 border-[#1e2d45] flex items-center justify-center text-gray-500 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                    >
                      <i className={`fab ${s.icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-[#131a2b] border-2 border-[#1e2d45] rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center">
                    <i className="fas fa-shield-halved text-black text-xs"></i>
                  </span>
                  <span className="text-white font-space font-bold text-lg">CSS UET</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  "Securing Tomorrow, Today." &mdash; Join us in building a safer digital world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
