import { motion } from 'framer-motion'

export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}) {
  const variants = {
    primary: 'bg-gradient-to-r from-neon-pink to-neon-violet text-white shadow-[0_0_15px_rgba(255,45,120,0.5)]',
    cyan: 'bg-gradient-to-r from-cyan-500 to-neon-cyan text-black font-bold shadow-[0_0_15px_rgba(0,245,255,0.5)]',
    outline: 'border-2 border-neon-violet text-neon-violet bg-transparent hover:bg-neon-violet/10',
    ghost: 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5'
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02, translateY: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
