import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Hash } from 'lucide-react'

export default function PromptTags({ tags, setTags }) {
  const [input, setInput] = useState('')

  const addTag = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      if (!tags.includes(input.trim())) {
        setTags([...tags, input.trim()])
      }
      setInput('')
    }
  }

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(t => t !== tagToRemove))
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2 min-h-[32px]">
        <AnimatePresence>
          {tags.map((tag) => (
            <motion.span
              key={tag}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="px-3 py-1 bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-[10px] font-bold rounded-full flex items-center gap-2"
            >
              <Hash size={10} />
              {tag}
              <button onClick={() => removeTag(tag)} className="hover:text-white transition-colors">
                <X size={10} />
              </button>
            </motion.span>
          ))}
        </AnimatePresence>
      </div>

      <div className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={addTag}
          placeholder="Manifest aesthetic tokens..."
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-neon-cyan transition-all"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-500 font-mono pointer-events-none">
          [ENTER]
        </div>
      </div>
    </div>
  )
}
