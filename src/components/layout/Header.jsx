import { useAppStore } from '../../features/filters/appStore'
import { Disc, LayoutGrid, Zap } from 'lucide-react'

export default function Header() {
  const { activeTab, setActiveTab } = useAppStore()

  return (
    <header className="border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-pink to-neon-violet flex items-center justify-center shadow-[0_0_20px_rgba(255,45,120,0.4)]">
            <Zap size={24} className="text-white fill-white" />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold tracking-tighter text-white leading-none">AURA</h1>
            <span className="text-[10px] text-neon-cyan font-mono tracking-[0.2em] uppercase opacity-80">FILTERS_OS</span>
          </div>
        </div>

        <nav className="flex items-center bg-white/5 border border-white/10 rounded-2xl p-1">
          <button
            onClick={() => setActiveTab('studio')}
            className={`flex items-center gap-2 px-6 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'studio'
                ? 'bg-white/10 text-white shadow-inner'
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            <Disc size={14} className={activeTab === 'studio' ? 'animate-spin-slow' : ''} />
            STUDIO
          </button>
          <button
            onClick={() => setActiveTab('marketplace')}
            className={`flex items-center gap-2 px-6 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'marketplace'
                ? 'bg-white/10 text-white shadow-inner'
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            <LayoutGrid size={14} />
            MARKETPLACE
          </button>
        </nav>

        <div className="flex items-center gap-4">
           <div className="hidden md:flex flex-col items-end mr-2">
             <span className="text-[10px] font-mono text-gray-500 uppercase">AURA_BALANCE</span>
             <span className="text-sm font-bold text-neon-lime leading-none">4.208 ETH</span>
           </div>
           <div className="w-10 h-10 rounded-full border border-white/20 bg-gradient-to-b from-white/10 to-transparent p-[1px]">
             <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
               <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=Aura" alt="Avatar" className="w-full h-full object-cover" />
             </div>
           </div>
        </div>
      </div>
    </header>
  )
}
