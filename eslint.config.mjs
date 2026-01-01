import globals from 'globals'
import astroParser from 'astro-eslint-parser'
import astro from 'eslint-plugin-astro'

import tsParser from '@typescript-eslint/parser'
import tseslint from '@typescript-eslint/eslint-plugin'

import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'

import prettier from 'eslint-config-prettier'

export default [
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**', 'coverage/**', '.vercel/**', '.netlify/**']
  },

  // JS/TS/React
  {
    files: ['**/*.{js,cjs,mjs,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true }
        // For type-aware linting (optional but nice):
        // project: ["./tsconfig.json"],
        // tsconfigRootDir: import.meta.dirname,
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y
    },
    settings: {
      react: { version: 'detect' }
    },
    rules: {
      // Base sanity
      'no-debugger': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],

      // Use TS-aware unused-vars
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],

      // React 17+ (new JSX transform) – don’t require React in scope
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      // Hooks: MUST HAVE
      ...reactHooks.configs.recommended.rules,

      // A11y (good default; tone down if noisy)
      ...jsxA11y.configs.recommended.rules
    }
  },

  // Astro files
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser, // lint <script> blocks with TS parser
        extraFileExtensions: ['.astro'],
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: { astro },
    rules: {
      ...astro.configs.recommended.rules,

      // Optional team preferences:
      'astro/no-set-html-directive': 'warn',
      'astro/no-unused-css-selector': 'warn'
    }
  },

  // If you use Prettier, this prevents ESLint from fighting it
  prettier
]
