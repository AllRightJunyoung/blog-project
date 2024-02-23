module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
    sourceType: "module",
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    include: ["./src"],
  },
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",
  },
  extends: ["next/core-web-vitals", "plugin:prettier/recommended"],
  plugins: ["eslint-plugin-simple-import-sort", "unused-imports", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "unused-imports/no-unused-imports-ts": ["error"],
    "comma-spacing": ["error", { before: false, after: true }],
  },
};
