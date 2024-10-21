# unit-factory
A lightweight JavaScript library for working with measurement units. It provides a robust API for conversion and manipulation, allowing the creation of custom unit factories. Designed with user-friendliness in mind, it serves as an ideal solution for both small projects and large-scale applications.

## Quickstart

Via CDN:
```html
<script src="https://unpkg.com/unit-factory/dist/unit-factory.browser.js"></script>
```

Using package manager:
```bash
# npm
npm i unit-factory

# Yarn
yarn add unit-factory

# pnpm
pnpm add unit-factory
```

## API Reference

### UnitFactory

- #### `UnitFactory.from(input: string | number): UnitInstance`
  
  Creates an instance of a unit by parsing the input string. If a number is passed, the first unit in the factory will be considered the unit.

  Example:

  ```typescript
  import { Duration } from 'unit-factory'

  Duration.from('30m')
  Duration.from(500) // a millisecond will be considered the unit
  ```

### UnitInstance

- #### `UnitInstance.value`

  Returns the unit value.

  Example:

  ```typescript
  import { Duration } from 'unit-factory'

  const minute = Duration.from('1m')
  console.log(minute.value) // returns 1
  ```

- #### `UnitInstance.baseValue`

  Returns the unit value in the smallest factory unit.

  Example:

  ```typescript
  import { Duration } from 'unit-factory'

  const minute = Duration.from('1m')
  console.log(minute.baseValue) // returns 60000 because the smallest unit in this factory is a millisecond
  ```

- #### `UnitInstance.symbol`

  Returns the unit symbol.

  Example:

  ```typescript
  import { Duration } from 'unit-factory'

  const minute = Duration.from('1m')
  console.log(minute.symbol) // returns 'm'
  ```

- #### `UnitInstance.name`

  Returns the unit name.

  Example:

  ```typescript
  import { Duration } from 'unit-factory'

  const minute = Duration.from('1m')
  console.log(minute.name) // returns 'minute'
  ```

- #### `UnitInstance.to(identifier: UnitIdentifier): UnitInstance`

  TODO

  Example:

  ```typescript
  import { Duration } from 'unit-factory'

  const minute = Duration.from('60s').to('m')
  console.log(minute.format()) // returns '1m'
  ```

- #### `UnitInstance.add(operand: string | number | UnitInstance): UnitInstance`

  TODO

  Example:

  ```typescript
  import { Duration } from 'unit-factory'

  const result = Duration.from('1m').add('60s')
  console.log(result.format()) // returns '2m'
  ```

- #### `UnitInstance.subtract(operand: string | number | UnitInstance): UnitInstance`

  TODO

  Example:

  ```typescript
  import { Duration } from 'unit-factory'

  const result = Duration.from('2m').subtract('60s')
  console.log(result.format()) // returns '1m'
  ```
