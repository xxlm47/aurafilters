import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useFilterStore } from './filterStore'

describe('useFilterStore', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => useFilterStore())
    expect(result.current.activeFilter).toBe('ethereal')
    expect(result.current.intensity).toBe(0.8)
  })

  it('should update activeFilter', () => {
    const { result } = renderHook(() => useFilterStore())
    act(() => {
      result.current.setActiveFilter('cyberpunk')
    })
    expect(result.current.activeFilter).toBe('cyberpunk')
  })

  it('should update intensity', () => {
    const { result } = renderHook(() => useFilterStore())
    act(() => {
      result.current.setIntensity(1.5)
    })
    expect(result.current.intensity).toBe(1.5)
  })
})
