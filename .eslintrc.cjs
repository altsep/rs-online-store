module.exports = {
  plugins: ['prettier', 'import', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:jest-dom/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['tsconfig.json'],
  },
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'no-debugger': 0,
    'no-console': 0,
    'class-methods-use-this': 0,
    'import/no-unresolved': 2,
    'no-param-reassign': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    'import/prefer-default-export': 0,
    'import/no-default-export': 2,
    'import/no-cycle': [2, { maxDepth: 1 }],
  },
  ignorePatterns: ['dist', '*.cjs', '*.config.js', '*setup.js'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.js'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.mts', '*.cts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 2,
        '@typescript-eslint/explicit-member-accessibility': [
          2,
          { accessibility: 'explicit', overrides: { constructors: 'no-public' } },
        ],
      },
    },
  ],
};
