export default function Footer() {
  return (
    <footer className="border-t border-[#1e2d45] bg-[#0b0f19] py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <i className="fas fa-shield-halved text-cyan-500 text-xs"></i>
          <span>&copy; 2026 Cyber Security Society &mdash; UET Lahore</span>
        </div>
        <div className="flex gap-6 text-xs text-gray-600 uppercase tracking-widest">
          <span className="hover:text-gray-400 cursor-pointer transition-colors">Privacy</span>
          <span className="hover:text-gray-400 cursor-pointer transition-colors">Terms</span>
          <span className="hover:text-gray-400 cursor-pointer transition-colors">Code of Conduct</span>
        </div>
      </div>
    </footer>
  )
}
