module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier', // must be last
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['@typescript-eslint', 'react-refresh', 'import'],
  rules: {
    'import/no-unresolved': 'error',
    'react-refresh/only-export-components': 'warn',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: '{react, react-dom}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '*.(css|scss)',
            group: 'index',
            patternOptions: { matchBase: true },
            position: 'after',
          },
        ],
        alphabetize: { order: 'asc', caseInsensitive: true },
        warnOnUnassignedImports: true,
        'newlines-between': 'always',
      },
    ],
  },
  root: true,
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
