export default function Panel({ children, className = '', title }) {
  return (
    <div className={`bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl ${className}`}>
      {title && (
        <h3 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">
          {title}
        </h3>
      )}
      {children}
    </div>
  )
}
