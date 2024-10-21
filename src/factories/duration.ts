// import type { UnitConfig } from '../types'
import { createUnitFactory } from '../factory'

export const Duration = createUnitFactory([
  { factor: 1, symbol: 'ms', name: 'millisecond' } as const, // satisfies UnitConfig
  { factor: 1000, symbol: ['s', 'sec'], name: 'second' } as const,
  { factor: 60000, symbol: ['m', 'min'], name: 'minute' } as const,
  { factor: 3600000, symbol: ['h', 'hr'], name: 'hour' } as const,
  { factor: 86400000, symbol: 'd', name: 'day' } as const,
  { factor: 604800000, symbol: ['w', 'wk'], name: 'week' } as const,
  { factor: 2629800000, symbol: 'mo', name: 'month' } as const,
  { factor: 31557600000, symbol: ['y', 'yr'], name: 'year' } as const
])
