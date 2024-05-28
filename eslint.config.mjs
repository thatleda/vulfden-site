// @ts-check
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import pluginJs from "@eslint/js";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import perfectionist from "eslint-plugin-perfectionist";
import perfectionistNatural from "eslint-plugin-perfectionist/configs/recommended-natural";
import prettier from "eslint-plugin-prettier/recommended";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import sonarjs from "eslint-plugin-sonarjs";
import testingLibrary from "eslint-plugin-testing-library";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import vitest from "eslint-plugin-vitest";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  perfectionistNatural,
  {
    plugins: {
      perfectionist,
    },
    rules: {
      "perfectionist/sort-imports": [
        "warn",
        {
          "custom-groups": {
            type: {
              react: "react",
            },
            value: {
              "gatsby": ["gatsby", "gatsby-*"],
              "react": ["react", "react-*"],
              "styled-components": "styled-components",
            },
          },
          "groups": [
            "react",
            "gatsby",
            "styled-components",
            ["builtin", "external"],
            "internal-type",
            "internal",
            "type",
            ["parent-type", "sibling-type", "index-type"],
            ["parent", "sibling", "index"],
            "side-effect",
            "style",
            "object",
            "unknown",
          ],
          "internal-pattern": ["components/**"],
          "newlines-between": "always",
          "order": "asc",
          "type": "natural",
        },
      ],
    },
  },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  {
    settings: {
      react: {
        version: "18.2.0",
      },
    },
  },
  {
    plugins: {
      "jsx-a11y": pluginJsxA11y,
    },
    rules: pluginJsxA11y.configs.recommended.rules,
  },
  sonarjs.configs.recommended,
  eslintPluginUnicorn.configs["flat/recommended"],
  {
    rules: {
      "unicorn/filename-case": [
        "warn",
        { cases: { kebabCase: true, pascalCase: true }, ignore: ["^SEO"] },
      ],
    },
  },
  prettier,
  {
    files: ["**/*.spec.{js,ts,jsx,tsx}"],
    plugins: {
      "testing-library": fixupPluginRules({
        rules: testingLibrary.rules,
      }),
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
      ...testingLibrary.configs.react.rules,
    },
  },
];
