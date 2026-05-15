export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 bg-black/30 backdrop-blur-md mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-neon-pink flex items-center justify-center">
              <span className="text-[10px] font-bold text-white">A</span>
            </div>
            <span className="font-bold tracking-tighter text-white">AURA FILTERS</span>
          </div>
          <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
            The world's first AI-powered cinematic filter studio and creator marketplace.
            Manifest your aesthetic, capture the unseen, and monetize your visual energy.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40">Protocol</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Neural Engine</a></li>
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Market Logic</a></li>
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Whitepaper</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40">Connect</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-neon-pink transition-colors">The Grid (Twitter)</a></li>
            <li><a href="#" className="hover:text-neon-pink transition-colors">Neural Link (Discord)</a></li>
            <li><a href="#" className="hover:text-neon-pink transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-neon-pink transition-colors">Support</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 items-center">
        <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
          © 2026 AURA_OS_SYSTEMS. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-6">
          <span className="text-[10px] text-neon-cyan font-mono animate-pulse">SYSTEM_CORE: v4.2.0-STABLE</span>
          <span className="text-[10px] text-gray-600 font-mono">LATENCY: 12ms</span>
        </div>
      </div>
    </footer>
  )
}
