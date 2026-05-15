import { motion } from 'framer-motion'

export default function Ticker() {
  const news = [
    "NEW DROP: 'NEON_SAMURAI' PACK NOW LIVE",
    "ETH PRICE: 2,450.21 (+1.2%)",
    "AURA_GEN_v2 UPDATE: 40% FASTER SHADER MINTING",
    "TRENDING: #VHS_GLITCH #CYBERPUNK #AESTHETIC",
    "SYSTEM_STATUS: ALL SYSTEMS OPERATIONAL",
  ]

  return (
    <div className="bg-neon-pink text-black py-1.5 overflow-hidden whitespace-nowrap border-y border-black/10">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="flex gap-12"
      >
        {[...news, ...news].map((item, i) => (
          <span key={i} className="text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-4">
            <span className="w-1.5 h-1.5 bg-black rounded-full" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
