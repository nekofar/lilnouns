import { defineConfig, type Options } from 'tsup'

const tsupConfig: Options = {
  entry: ['src/**/*.ts', '!src/**/*.test.ts'],
  format: 'esm',
  dts: {
    resolve: false,
    compilerOptions: {
      declarationMap: false,
    },
  },
  outDir: 'dist',
  splitting: false,
  clean: true,
  treeshake: true,
  sourcemap: true,
  minify: 'terser',
  terserOptions: {
    format: {
      comments: false,
    },
  },
}

export default defineConfig(tsupConfig)
