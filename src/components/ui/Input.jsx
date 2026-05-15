export default function Input({ label, ...props }) {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-xs text-gray-400 font-bold uppercase">{label}</label>}
      <input
        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
        {...props}
      />
    </div>
  )
}
