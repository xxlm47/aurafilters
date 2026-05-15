import { useFilterStore } from '../../features/filters/filterStore'
import { FILTERS } from '../../features/filters/filterPresets'
import Panel from '../ui/Panel'
import { Sliders, Sparkles } from 'lucide-react'

export default function AuraControls() {
  const { activeFilter, setActiveFilter, intensity, setIntensity } = useFilterStore()

  return (
    <Panel className="w-full lg:w-80 flex flex-col gap-6" title="Aura Architecture">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-neon-cyan mb-2">
          <Sliders size={14} />
          <span className="text-[10px] font-bold uppercase tracking-wider">Parameters</span>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-[10px] uppercase font-bold text-gray-400">
            <span>Intensity</span>
            <span>{Math.round(intensity * 100)}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="2"
            step="0.01"
            value={intensity}
            onChange={(e) => setIntensity(parseFloat(e.target.value))}
            className="w-full accent-neon-pink"
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2 text-neon-violet mb-2">
          <Sparkles size={14} />
          <span className="text-[10px] font-bold uppercase tracking-wider">Core Engine</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {Object.values(FILTERS).map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`p-3 rounded-xl border text-[10px] font-bold uppercase tracking-tighter transition-all ${
                activeFilter === filter.id
                  ? 'border-neon-pink bg-neon-pink/10 text-white'
                  : 'border-white/10 bg-white/5 text-gray-500 hover:border-white/20'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
      </div>
    </Panel>
  )
}
