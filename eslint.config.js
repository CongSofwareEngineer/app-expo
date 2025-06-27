const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const { fixupConfigRules, fixupPluginRules } = require("@eslint/compat");
const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");

const prettier = require("eslint-plugin-prettier");
const unusedImports = require("eslint-plugin-unused-imports");
const reactHooks = require("eslint-plugin-react-hooks");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = defineConfig([
  expoConfig, // 👈 expo already includes react, jsx-a11y, etc.
  {
    files: ["**/*.ts", "**/*.tsx"],
    ignores: ["dist/*"],

    // 👉 chỉ extends Prettier (nếu muốn override Prettier rule)
    extends: fixupConfigRules(
      compat.extends("plugin:prettier/recommended")
    ),

    plugins: {
      "react-hooks": reactHooks,
      "unused-imports": unusedImports,
      "@typescript-eslint": typescriptEslint,
      prettier: fixupPluginRules(prettier),
    },

    rules: {
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "prettier/prettier": [
        "warn",
        {
          printWidth: 150,
          semi: false,
          singleQuote: true,
          jsxSingleQuote: true,
          trailingComma: "es5",
          jsxBracketSameLine: false,
          proseWrap: "always",
          endOfLine: "lf",
        },
      ],
    },
  },
]);
