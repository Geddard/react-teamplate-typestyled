module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'prettier', 'unused-imports'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
      ],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        'no-console': 'warn',
        'prefer-const': 'error',
        'no-debugger': 'warn',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
        'react/prop-types': 'off',
        'unused-imports/no-unused-imports': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react/react-in-jsx-scope': 'off',
        'import/prefer-default-export': 'off',
        'arrow-body-style': ['warn', 'as-needed', { requireReturnForObjectLiteral: false }],
      },
      env: {
        browser: true,
        jasmine: true,
        jest: true,
        node: true,
      },
    },
  ],
};
