export type Flatten<T> = T extends (infer U)[] ? Flatten<U> : T

export interface UnitConfig {
  factor: number
  symbol: string | string[]
  name: string | string[]
}

export interface UnitInstance<US, UN, UI> {
  readonly value: number
  get baseValue(): number
  get symbol(): US
  get name(): UN
  to(identifier: UI): UnitInstance<US, UN, UI>
  add(operand: UnitInstance<US, UN, UI>): UnitInstance<US, UN, UI>
  subtract(operand: UnitInstance<US, UN, UI>): UnitInstance<US, UN, UI>
  clone(): UnitInstance<US, UN, UI>
}

export interface UnitFactory<US, UN, UI> {
  new(value: number, identifier?: UI): UnitInstance<US, UN, UI>
  from(input: string | number): UnitInstance<US, UN, UI>
}
