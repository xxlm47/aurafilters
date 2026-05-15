import { useState } from 'react'
import FilterPreview from '../components/studio/FilterPreview'
import AuraControls from '../components/studio/AuraControls'
import PromptTags from '../components/studio/PromptTags'
import Panel from '../components/ui/Panel'
import Button from '../components/ui/Button'
import { useFilterStore } from '../features/filters/filterStore'
import { processAuraPrompt } from '../features/filters/promptEngine'
import { motion } from 'framer-motion'
import { Zap, Share2, Download } from 'lucide-react'

export default function Studio() {
  const { isGenerating, setGenerating, setActiveFilter, setGenerated, generated } = useFilterStore()
  const [tags, setTags] = useState(['Cyborg', 'NightCity', 'Anamorphic'])

  const handleGenerate = async () => {
    setGenerating(true)
    try {
      const result = await processAuraPrompt(tags)
      setActiveFilter(result.filterId)
      setGenerated(true)
    } finally {
      setGenerating(false)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Main Viewport */}
      <div className="lg:col-span-8 space-y-6">
        <FilterPreview />

        <Panel title="Aesthetic Neural Input">
          <div className="flex flex-col md:flex-row gap-6 items-end">
            <div className="flex-1 w-full">
              <PromptTags tags={tags} setTags={setTags} />
            </div>
            <Button
              className="w-full md:w-auto min-w-[160px] h-[46px]"
              onClick={handleGenerate}
              disabled={isGenerating || tags.length === 0}
            >
              {isGenerating ? (
                <span className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  >
                    <Zap size={16} />
                  </motion.div>
                  MANIFESTING...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Zap size={16} />
                  GENERATE AURA
                </span>
              )}
            </Button>
          </div>
        </Panel>
      </div>

      {/* Side Controls */}
      <div className="lg:col-span-4 space-y-6">
        <AuraControls />

        <Panel title="Actions">
          <div className="grid grid-cols-1 gap-3">
            <Button variant="cyan" className="w-full flex items-center justify-center gap-2">
              <Download size={18} />
              CAPTURE FRAME
            </Button>
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <Share2 size={18} />
              MINT TO MARKET
            </Button>
          </div>
        </Panel>

        <div className="p-4 rounded-xl bg-neon-cyan/5 border border-neon-cyan/10">
          <div className="flex items-center gap-2 text-neon-cyan mb-2 font-bold text-[10px] uppercase">
            <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-ping" />
            System Status
          </div>
          <p className="text-[10px] text-gray-400 font-mono leading-relaxed">
            NEURAL_LINK: ACTIVE<br />
            LATENCY: 24ms<br />
            BUFFER_HEALTH: 100%<br />
            UPLOADING_TELEMETRY...
          </p>
        </div>
      </div>
    </div>
  )
}
