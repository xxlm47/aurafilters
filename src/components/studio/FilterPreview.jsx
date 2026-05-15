import { useFilterStore } from '../../features/filters/filterStore'
import { FILTERS } from '../../features/filters/filterPresets'
import { useDeviceTier } from '../../hooks/useDeviceTier'
import CameraView from './CameraView'

export default function FilterPreview() {
  const activeFilterId = useFilterStore((state) => state.activeFilter)
  const intensity = useFilterStore((state) => state.intensity)
  const deviceTier = useDeviceTier()

  const activeFilter = FILTERS[activeFilterId] || FILTERS.ethereal

  return (
    <div className="relative aspect-video w-full max-w-4xl mx-auto group">
      <div
        className="w-full h-full rounded-2xl overflow-hidden transition-all duration-700"
        style={{ filter: activeFilter.css }}
      >
        <CameraView intensity={intensity} />
      </div>

      {/* Overlay Glow - Throttled by device tier */}
      {activeFilter.glow && deviceTier !== 'low' && (
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl mix-blend-screen opacity-30 transition-all duration-500"
          style={{ background: activeFilter.gradient }}
        />
      )}

      {/* HUD Elements */}
      <div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="font-mono text-[10px] text-neon-cyan opacity-80">
            [ COORDINATES: 34.0522° N, 118.2437° W ]<br />
            [ FREQUENCY: 440Hz ]
          </div>
          <div className="font-mono text-[10px] text-right text-neon-pink opacity-80">
            FILTER: {activeFilter.name.toUpperCase()}<br />
            INTENSITY: {(intensity * 100).toFixed(0)}%
            {deviceTier === 'low' && <div className="text-[8px] text-neon-lime mt-1">[ L-PWR MODE ]</div>}
          </div>
        </div>

        <div className="flex justify-center">
           <div className="w-1/3 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </div>
    </div>
  )
}
