import { useState, useEffect } from 'react'

export function useDeviceTier() {
  const [tier, setTier] = useState('mid') // 'low' | 'mid' | 'high'

  useEffect(() => {
    const memory = navigator.deviceMemory || 4
    const cores = navigator.hardwareConcurrency || 4

    if (memory <= 2 || cores <= 2) {
      setTier('low')
    } else if (memory >= 8 && cores >= 8) {
      setTier('high')
    } else {
      setTier('mid')
    }
  }, [])

  return tier
}
