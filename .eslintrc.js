module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['plugin:jest/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['jest', 'prettier'],
  rules: {
    indent: ['error', 2],
    'jest/no-disabled-tests': ['warn'],
    'jest/no-focused-tests': ['error'],
    'jest/no-identical-title': ['error'],
    'jest/prefer-to-have-length': ['warn'],
    'jest/valid-expect': ['error'],
    'prettier/prettier': ['error']
  }
};
