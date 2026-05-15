import { create } from 'zustand'

export const useAppStore = create((set) => ({
  activeTab: 'studio', // 'studio' | 'marketplace'
  setActiveTab: (tab) => set({ activeTab: tab }),
}))
