export default {
  env: {
    es2024: true,   // Enables ES2024 syntax support
    node: true,     // Enables Node.js global variables
  },
  extends: [
    'eslint:recommended',  // Use ESLint's recommended rules
  ],
  parserOptions: {
    ecmaVersion: 2024,  // Set to the latest ECMAScript version
    sourceType: 'module',  // Enable support for ES modules (import/export)
  },
  rules: {
    'no-unused-vars': 'warn',  // Warn about unused variables
    'no-console': 'off',  // Allow console statements
    'quotes': ['error', 'single'],  // Enforce single quotes
    'semi': ['error', 'always'],  // Require semicolons
  },
};