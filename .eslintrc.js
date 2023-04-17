module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }]
  }
};
