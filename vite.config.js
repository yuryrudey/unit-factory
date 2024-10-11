import { defineConfig } from 'vite'
import dtsPlugin from 'vite-plugin-dts'
import path from 'node:path'

export default defineConfig({
  plugins: [
    dtsPlugin({ rollupTypes: true })
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, './src/main.ts'),
      name: 'UnitFactory',
      formats: ['es', 'cjs', 'iife'],
      fileName: (format) => {
        const name = 'unit-factory'
        if(format === 'es')
          return `${name}.js`
        if(format === 'cjs')
          return `${name}.cjs`
        if(format === 'iife')
          return `${name}.browser.js`
      }
    }
  }
})
