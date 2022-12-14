module.exports = {
    plugins: ['prettier', 'import', '@typescript-eslint', 'jest-dom'],
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
        'plugin:jest-dom/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        tsconfigRootDir: __dirname,
        project: ['tsconfig.json'],
    },
    root: true,
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    rules: {
        'no-debugger': 'off',
        'no-console': 0,
        'class-methods-use-this': 'off',
        'import/no-unresolved': 'error',
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
};
