import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Upload, Info } from 'lucide-react'
import Button from '../ui/Button'
import Input from '../ui/Input'
import { useMarketplaceStore } from '../../features/marketplace/marketplaceStore'

export default function SellModal({ isOpen, onClose }) {
  const listItem = useMarketplaceStore(state => state.listItem)
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    tags: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    listItem({
      id: `f${Date.now()}`,
      creator: 'Current_User',
      name: formData.name,
      price: parseFloat(formData.price),
      tags: formData.tags.split(',').map(t => t.trim()),
      likes: 0,
      downloads: 0,
      preview: 'linear-gradient(45deg, #a855f7, #b6ff00)'
    })
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-deep-dark border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-neon-pink/20 blur-[100px] -z-10" />

            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">Mint Aura Asset</h2>
                <p className="text-sm text-gray-500">List your aesthetic engine on the global grid.</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors text-gray-400">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Asset Name"
                placeholder="e.g. Cyber_Glitch_v4"
                required
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />

              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Price (ETH)"
                  type="number"
                  step="0.001"
                  placeholder="0.05"
                  required
                  value={formData.price}
                  onChange={e => setFormData({...formData, price: e.target.value})}
                />
                <Input
                  label="Tags (Comma separated)"
                  placeholder="Cinematic, VHS"
                  required
                  value={formData.tags}
                  onChange={e => setFormData({...formData, tags: e.target.value})}
                />
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex gap-3">
                <Info size={16} className="text-neon-cyan shrink-0 mt-0.5" />
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Assets will be verified by the Aura Neural Network before becoming visible.
                  Listing fee: <span className="text-white">0.001 ETH</span>
                </p>
              </div>

              <Button type="submit" className="w-full py-4 flex items-center justify-center gap-2">
                <Upload size={18} />
                MINT TO GRID
              </Button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
