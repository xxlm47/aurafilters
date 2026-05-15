import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Plus } from 'lucide-react'
import { useMarketplaceStore } from '../features/marketplace/marketplaceStore'
import FilterCard from '../components/marketplace/FilterCard'
import SellModal from '../components/marketplace/SellModal'
import Button from '../components/ui/Button'

export default function Marketplace() {
  const items = useMarketplaceStore(state => state.items)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [search, setSearch] = useState('')

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold tracking-tighter text-white">
            GLOBAL <span className="text-neon-pink">GRID</span>
          </h1>
          <p className="text-gray-500 text-sm font-mono uppercase tracking-widest">
            Protocol: P2P_AESTHETIC_EXCHANGE
          </p>
        </div>

        <div className="flex flex-1 max-w-xl gap-3">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search frequencies..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-neon-cyan transition-all"
            />
          </div>
          <button className="p-3 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-all">
            <Filter size={20} />
          </button>
          <Button variant="cyan" onClick={() => setIsModalOpen(true)} className="flex items-center gap-2">
            <Plus size={20} />
            <span className="hidden sm:inline">MINT</span>
          </Button>
        </div>
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {filteredItems.map((item) => (
          <FilterCard key={item.id} filter={item} />
        ))}
      </motion.div>

      {filteredItems.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-gray-600 font-mono uppercase tracking-[0.2em]">No assets found on this frequency.</p>
        </div>
      )}

      <SellModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
