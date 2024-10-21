import type { Flatten, UnitConfig, UnitFactory, UnitInstance } from './types'
import { parseValueUnitString } from './parser'

export function createUnitFactory<T extends UnitConfig>(unitConfigs: T[]) {
  type UnitSymbol = Flatten<T['symbol']>
  type UnitName = Flatten<T['name']>
  type UnitIdentifier = UnitSymbol | UnitName

  const fallbackUnitConfig = unitConfigs[0]
  const unitConfigsMap = unitConfigs.reduce((map, unitConfig) => {
    [unitConfig.symbol, unitConfig.name].flat().forEach((identifier) => {
      map[identifier.toLowerCase() as Lowercase<UnitIdentifier>] = unitConfig
    })
    return map
  }, {} as Record<Lowercase<UnitIdentifier>, T>)

  return class Unit {
    readonly value: number
    private unitConfig: T

    constructor(value: number, identifier?: UnitIdentifier) {
      this.value = value
      if(!identifier) {
        this.unitConfig = fallbackUnitConfig
      } else {
        this.unitConfig = unitConfigsMap[identifier.toLowerCase() as Lowercase<UnitIdentifier>]
      }
    }

    static from(input: string | number) {
      const [value, identifier] = parseValueUnitString(input)
      return new Unit(value, identifier as UnitIdentifier)
    }

    get baseValue() {
      return this.value * this.unitConfig.factor
    }

    get symbol() {
      return (typeof this.unitConfig.symbol === 'string' ?
        this.unitConfig.symbol :
        this.unitConfig.symbol[0]) as UnitSymbol
    }

    get name() {
      return (typeof this.unitConfig.name === 'string' ?
        this.unitConfig.name :
        this.unitConfig.name[0]) as UnitName
    }

    to(identifier: UnitIdentifier) {
      const outputUnitConfig = unitConfigsMap[identifier.toLowerCase() as Lowercase<UnitIdentifier>]
      const outputValue = this.baseValue / outputUnitConfig.factor
      return new Unit(outputValue, identifier)
    }

    add(operand: UnitInstance<UnitSymbol, UnitName, UnitIdentifier>) {
      const resultValue = (this.baseValue + operand.baseValue) / this.unitConfig.factor
      return new Unit(resultValue, this.symbol)
    }

    subtract(operand: UnitInstance<UnitSymbol, UnitName, UnitIdentifier>) {
      const resultValue = (this.baseValue - operand.baseValue) / this.unitConfig.factor
      return new Unit(resultValue, this.symbol)
    }

    format() {
      return `${this.value}${this.symbol}`
    }

    clone() {
      return new Unit(this.value, this.symbol)
    }

    toString() {
      return this.format()
    }

    valueOf() {
      return this.baseValue
    }
  } as UnitFactory<UnitSymbol, UnitName, UnitIdentifier>
}
