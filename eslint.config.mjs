import antfu from '@antfu/eslint-config'

// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(antfu({
  type: 'app',
  vue: true,
  typescript: true,
  formatters: true,
  ignores: [
    '**/node_modules/**',
  ],
}, {
  rules: {
    'ts/no-redeclare': 'off',
    'no-console': ['warn'],
    'node/no-process-env': ['error'],
    'node/prefer-global/process': ['off'],
    'ts/consistent-type-definitions': ['error', 'type'],
  },
}))
