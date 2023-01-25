module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    'plugin:@typescript-eslint/recommended',
    "plugin:react-hooks/recommended"
  ],
  settings: {
    react: {
      version: "detect",
    }
  },
  env: {
    browser: true,
    amd: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', "react"],
  root: true,
}