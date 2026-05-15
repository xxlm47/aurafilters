import { motion } from 'framer-motion'
import { Heart, Download, User } from 'lucide-react'
import Badge from '../ui/Badge'
import Button from '../ui/Button'

export default function FilterCard({ filter }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group hover:border-neon-cyan/50 transition-colors"
    >
      <div
        className="h-40 w-full relative"
        style={{ background: filter.preview }}
      >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
        <div className="absolute top-3 left-3">
          <Badge variant={filter.tags[0] === 'VHS' ? 'pink' : 'cyan'}>{filter.tags[0]}</Badge>
        </div>
      </div>

      <div className="p-5 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-bold text-white group-hover:text-neon-cyan transition-colors truncate">
              {filter.name}
            </h4>
            <div className="flex items-center gap-1 text-[10px] text-gray-500 mt-1">
              <User size={10} />
              <span>{filter.creator}</span>
            </div>
          </div>
          <div className="text-right">
             <div className="text-neon-lime font-bold text-sm">{filter.price} ETH</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {filter.tags.slice(1).map(tag => (
            <span key={tag} className="text-[9px] text-gray-500 uppercase tracking-widest px-2 py-0.5 border border-white/5 rounded">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-2 pt-2">
          <Button variant="cyan" className="flex-1 py-2 text-xs">
            ACQUIRE
          </Button>
          <button className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-neon-pink hover:border-neon-pink/50 transition-all">
            <Heart size={16} />
          </button>
        </div>

        <div className="flex justify-between items-center text-[9px] text-gray-600 font-mono">
          <span>{filter.downloads} DOWNLOADS</span>
          <span>ID: {filter.id.toUpperCase()}</span>
        </div>
      </div>
    </motion.div>
  )
}
