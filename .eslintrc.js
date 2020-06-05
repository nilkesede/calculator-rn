module.exports = {
  root: true,
  extends: ['@react-native-community', 'xo-space/esnext', 'plugin:unicorn/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unicorn'],
  rules: {
    semi: ['error', 'never'],
    curly: ['error', 'multi-or-nest', 'consistent'],
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
          pascalCase: true
        }
      }
    ]
  }
}
