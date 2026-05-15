export default function Badge({ children, variant = 'pink' }) {
  const variants = {
    pink: 'bg-neon-pink/10 text-neon-pink border-neon-pink/20',
    cyan: 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20',
    violet: 'bg-neon-violet/10 text-neon-violet border-neon-violet/20',
    lime: 'bg-neon-lime/10 text-neon-lime border-neon-lime/20',
  }

  return (
    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${variants[variant]}`}>
      {children}
    </span>
  )
}
