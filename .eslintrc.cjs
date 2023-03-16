module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  root: true,
  rules: {
    "prettier/prettier": "error",
    quotes: ["error", "single"]
  },
};