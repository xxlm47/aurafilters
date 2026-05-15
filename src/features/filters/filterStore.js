import { create } from 'zustand'

export const useFilterStore = create((set) => ({
  activeFilter: 'ethereal',
  intensity: 0.8,
  isGenerating: false,
  generated: false,

  setActiveFilter: (filterId) => set({ activeFilter: filterId }),
  setIntensity: (val) => set({ intensity: val }),
  setGenerating: (val) => set({ isGenerating: val }),
  setGenerated: (val) => set({ generated: val }),
}))
