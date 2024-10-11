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
      formats: ['esm', 'umd'],
      fileName: (format) => `unit-factory.${format}.js`
    }
  }
})
