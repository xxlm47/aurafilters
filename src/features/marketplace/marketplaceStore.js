import { create } from 'zustand'

export const useMarketplaceStore = create((set) => ({
  items: [
    {
      id: 'f1',
      creator: 'Aura_Prime',
      name: 'VaporGhost',
      price: 0.05,
      tags: ['VHS', 'Retro', 'Glitch'],
      likes: 124,
      downloads: 450,
      preview: 'linear-gradient(45deg, #ff2d78, #00f5ff)'
    },
    {
      id: 'f2',
      creator: 'Neon_Samurai',
      name: 'Midnight_Katana',
      price: 0.12,
      tags: ['Cinematic', 'Sharp', 'Dark'],
      likes: 89,
      downloads: 210,
      preview: 'linear-gradient(45deg, #050508, #a855f7)'
    },
    {
      id: 'f3',
      creator: 'Data_Drifter',
      name: 'Neural_Static',
      price: 0.08,
      tags: ['AI', 'Noise', 'Experimental'],
      likes: 230,
      downloads: 890,
      preview: 'linear-gradient(45deg, #b6ff00, #ff2d78)'
    }
  ],
  purchased: [],

  purchaseItem: (itemId) => set((state) => ({
    purchased: [...state.purchased, itemId]
  })),

  listItem: (item) => set((state) => ({
    items: [item, ...state.items]
  }))
}))
