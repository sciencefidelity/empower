module.exports = {
  plugins: [
    "@typescript-eslint",
    "eslint-comments",
    "promise",
    "unicorn",
    "eslint-plugin-tsdoc",
  ],
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:eslint-comments/recommended",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "plugin:@typescript-eslint/recommended",

    "prettier",
  ],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  rules: {
    // https://basarat.gitbook.io/typescript/main-1/defaultisbad
    "import/prefer-default-export": "off",
    // It's not accurate in the monorepo style
    "import/no-extraneous-dependencies": "off",
    // Allow most functions to rely on type inference
    // @typescript-eslint/explicit-module-boundary-types
    // will ensure exports are typed
    "@typescript-eslint/explicit-function-return-type": "off",
    // React adds the import in compile stage since v17
    // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
    "react/react-in-jsx-scope": "off",
    // This helpful when using with TypeScript
    "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
    // Airbnb prefers forEach
    "unicorn/no-array-for-each": "off",
    // This can get quite restrictive by failing filenames like `vite-env.d.ts`
    "unicorn/prevent-abbreviations": "off",
    // Disable JSDoc and setup linting of TSDoc
    "require-jsdoc": "off",
    "valid-jsdoc": "off",
    "tsdoc/syntax": "warn",
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        // Allow CJS until ESM support improves
        "@typescript-eslint/no-var-requires": "off",
        "unicorn/prefer-module": "off",
      },
    },
  ],
};
