import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'contracts/index': 'src/contracts/index.ts',
    'subgraphs/index': 'src/subgraphs/index.ts',
  },
  format: ['esm', 'cjs'],
  dts: {
    resolve: true,
    compilerOptions: {
      declarationMap: false,
    },
  },
  outDir: 'dist',
  outExtension({ format }) {
    return { js: format === 'esm' ? '.mjs' : '.cjs' }
  },
  splitting: false,
  clean: true,
  treeshake: true,
  external: ['viem', 'wagmi', '@wagmi/core'],
  noExternal: [],
})
