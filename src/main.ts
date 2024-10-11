export function parseValueUnitString(input: string | number): [number, string] {
  let value: number
  let unit: string

  if(typeof input === 'string') {
    input = input.trim()
    const output = input.match(/^(?<value>(?:\+|-)?\d+(?:\.\d+)?(?:(?:e|E)(?:\+|-)?\d+)?) {0,1}(?<unit>[a-zA-Z]+)?$/)

    if(!output || !output.groups)
      throw new Error('Input is invalid')

    value = parseFloat(output.groups.value)
    unit = output.groups.unit ?? ''
  } else {
    value = input
    unit = ''
  }

  if(isNaN(value))
    throw new Error('Value is not a number')
  if(!isFinite(value))
    throw new Error('Value is infinite')

  return [value, unit]
}
